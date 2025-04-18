const Order = require('./../models/Order')
const Product = require('./../models/Product')
const Table = require('./../models/Table')

exports.pushOrderService = async(body) => {
    let isSuccess = ''
    let total = 0
    const { table, products, tip } = body;
    console.log(body)
    try {
        const myTable = await Table.findById(table);
        tableValidations(myTable)
        await updateProductByOrder(products, total, tip)
        const newOrder = new Order({
            table: table,
            products: products,
            total: total
        })
        myTable.status = 'occupied'
        await myTable.save()
        await newOrder.save()
    } catch(error) {
        console.log('pushOrderService Error', error.message)
        isSuccess = error.message
    }

    return isSuccess
}

exports.closeOrderService = async(id) => {
    let isSuccess = ''
    try {
        await Order.findByIdAndUpdate(id, { status: 'closed' })
    } catch(error) {
        console.log('closeOrderService Error', error)
        isSuccess = error.message
    }

    return isSuccess
}

const tableValidations = (myTable) => {
    if (!myTable) throw new Error('Table does not exist!');
    if (myTable.status == 'occupied') throw new Error('Table is occupied');
}

const productValidations = (myProduct, product) => {
    if(!myProduct) throw new Error('Product doesnt exist!!')
    if(myProduct.existences < product.quantity) throw new Error(`There are no ${ myProduct.name } in existences`)
}

const updateProductByOrder = async(products, total, tip) => {
    for(let product of products) {            
        const myProduct = await Product.findById(product.productId)
        productValidations(myProduct, product)
        myProduct.existences -= product.quantity
        await myProduct.save()        
        total += myProduct.price * product.quantity
        
    }
    if(tip){
        let totalTip = total * 0.10
        total += totalTip
    }
}