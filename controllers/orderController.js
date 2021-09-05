const Order = require('../models/order');

// POST request for customer order create
exports.customerOrderCreatePost = function(req, res){
    const{customer, staff, detail} = req.body;

    // create a new order
    const newOrder = new Order({
        customer,
        staff,
        detail
    });

    // save new order's data
    newOrder.save(function(err, result){
        if(err){
            res.status(400).json({err});
        }
        else {
            res.status(200).json({message:"created a new order", result: result});

        }
    })   
}


// Get request for staff to get the orders
exports.OrderListGet = function(req, res){
    Order.find({staff: req.params.staffId}, function(err, orders){
        //if for perticular staff, the order list for required status is an empty list, return error message
        if(orders.length === 0 ){
            res.status(200).json({success: false, message:"Order is not found"})
        }
        else{
            var sortOrder = []
            for(i = 0; i < orders.length; i++){
                sortOrder.push({
                    "detail":orders[i].detail,
                    "customer":orders[i].customer,
                    "status":orders[i].status,
                    "updateTime":orders[i].updateTime,
                    "staff":orders[i].staff,
                    "_v":orders[i]._v,
                    "_id":orders[i]._id,
                })
            }
            sortOrder = sortOrder.sort(({updateTime: a}, {updateTime: b}) => b - a)
            res.status(200).json({success: true, orders: sortOrder})
        }
    })

};

// POST request for staff to update the detail for a particular order
exports.orderChangePost = function(req, res){

    // check validation of the order id
    Order.findById(req.params.id, function(err, orderDetail){
        //const{snacksList, status} = req.body;
        if(!orderDetail){
            res.status(404).send("order is not found!")
        }
        else{

            // update the detail for the given order id
            Order.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true},
                function(err, changeOrderDetails){
                    if(err){
                        res.status(404).json({success: false, err})
                    }
                    else{
                        res.status(200).json({success: true, changeOrderDetails: changeOrderDetails})
                    }
                })    
        }
    })
}


/* url: http://localhost:5000/order?customer=:customerID&status=outstanding to get all outstanding orders */
// Get request for customer to get their order details
// exports.customerOrderListGet = function(req, res){
//     Order.find(req.query).populate("vendor").populate("customer").then((orders)=>{
        
//         //if for perticular vendor, the order list for required status is an empty list, return error message
//         if (orders.length == 0){
//             res.status(200).json({ success: false, error: "no order found"})
//         } else {
//             var sortOrder = []
//             for(i = 0; i < orders.length; i++){
//                 sortOrder.push({
//                     "comments":orders[i].comments,
//                     "createTime":orders[i].createTime,
//                     "customer":orders[i].customer,
//                     "discount":orders[i].discount,
//                     "isCanceled":orders[i].isCanceled,
//                     "isChangeable":orders[i].isChangeable,
//                     "isDelivered":orders[i].isDelivered,
//                     "ratings":orders[i].ratings,
//                     "snacksList":orders[i].snacksList,
//                     "status":orders[i].status,
//                     "totalPrice":orders[i].totalPrice,
//                     "updateTime":orders[i].updateTime,
//                     "vendor":orders[i].vendor,
//                     "_v":orders[i]._v,
//                     "_id":orders[i]._id,
//                     "customerName":orders[i].customerName
//                 })
//             }
//             sortOrder = sortOrder.sort(({createTime: a}, {createTime: b}) => b - a)
//             res.status(200).json({ success: true, customerOrders: sortOrder})
//         }
        
//     })       
// };

// GET request for staff to search orders based on the order id
exports.orderListGet = function(req, res){

    // check validation of the order id
    Order.findById(req.params.id, function(err, orders){
        if(!orders){
            res.status(404).json({success: false, message: "order is not found!"})
        }
        else{
            res.status(200).json({success: true, orders: orders})   
        }
    })
}

// GET request for staff to filter the particular type of orders
exports.orderFilterGet = function(req, res){
    Order.find({staff: req.params.staffId, type: req.query.type},function(err, orders){
        if(orders.length === 0){
            res.status(200).json({success: false, message: "This type of Insurance order is not found"})
        }
        else{
            res.status(200).json({success: true, order: orders})
        }
    })
}