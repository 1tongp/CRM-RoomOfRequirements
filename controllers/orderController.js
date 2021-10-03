const Order = require('../models/order');

// POST request for customer order create
exports.customerOrderCreatePost = function(req, res){
    const{customer, staff, detail, expireDate,type} = req.body;

    // create a new order
    const newOrder = new Order({
        customer,
        staff,
        detail,
        expireDate,
        type
        
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
        if(orders.length === 0){
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
                    "type":orders[i].type,
                    "expireDate": orders[i].expireDate,
                    "customerName": ""
                    
                })
            }
            sortOrder = sortOrder.sort(({expireDate: a}, {expireDate: b}) => a - b)
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

// GET post to get the order list for a particular customer
exports.OrderCustomerGet = function(req, res){
    Order.find({customer: req.params.customerId}, function(err, orders){
        if(orders.length === 0 ){
            res.status(200).json({success: false, message:"Customer Order is not found"})
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
                    "type":orders[i].type,
                })
            }
            sortOrder = sortOrder.sort(({updateTime: a}, {updateTime: b}) => b - a)
            res.status(200).json({success: true, orders: sortOrder})
        }
    })

};
// GET request to get the order details based on the customer id and insurance type
exports.OrderCustomerTypeGet = function(req, res){
    Order.find({customer: req.params.customerId, type: req.query.type}, function(err, orders){
        if(!orders){
            res.status(200).json({success: false, message:"Customer Order is not found"})
        }
        else{
            res.status(200).json({success: true, orderDetail: orders})
        }
    })

};