const customer = require('../models/customer');
const Customer = require('../models/customer');
// const { OrderCustomerGet } = require('./orderController');
const Order = require('../models/order');
// const bcrypt = require('bcryptjs');

// POST request for customer create
exports.customerCreatePost = function (req, res) {
    const { givenName, familyName, email, gender, age, dateOfBirth, phone, address, region, insurance } = req.body;
    Customer.findOne({ email: email }).then((emailExist) => {

        // for the case when email is already registered
        if (emailExist) {
            res.status(409).json({ success: false, message: "This email has been registered!" });
        }

        // otherwise, create a new account for customer
        else {
            const newCustomer = new Customer({
                givenName,
                familyName,
                email,
                gender,
                age,
                dateOfBirth,
                phone,
                address,
                region,
                insurance,

            });

            newCustomer.save().then((customer) => {
                res.status(200).json({
                    success: true,
                    message: "customer created successfully",
                    customer: {
                        id: customer.id,
                        givenName: customer.givenName,
                        familyName: customer.familyName,
                        email: customer.email,
                        gender: customer.gender,
                        age: customer.age,
                        dateOfBirth: customer.dateOfBirth,
                        phone: customer.phone,
                        address: customer.address,
                        region: customer.region,
                        insurance: customer.insurance
                    },
                })
            })

        }
    });
};

// Get request for customer detail 
exports.customerDetailGet = function (req, res) {
    Customer.findById(req.params.id, function (err, customerDetail) {

        //if detail for perticular customer exist, print the detail to customer
        if (customerDetail) {
            res.status(200).json({ success: true, customer: customerDetail })
        }
        else {
            res.status(400).json({ success: false, message: "getDetail customer is not found" })
        }
    })
}

// Get request for customer list
exports.customerListGet = function (req, res) {

    customer.find({ staff: req.params.staffId }, function (err, customers) {

        // if the staff has no current customers, return empty
        if (customers.length === 0) {
            res.status(200).json({ success: false, message: "Currently no customers" })
        }
        else if (customers.length === 1) {
            res.status(200).json({ success: true, message: "1", customers: customers })
        }
        else {
            var sortedCustomer = []
            for (i = 0; i < customers.length; i++) {
                sortedCustomer.push({
                    "staff": customers[i].staff,
                    "givenName": customers[i].givenName,
                    "familyName": customers[i].familyName,
                    "email": customers[i].email,
                    "gender": customers[i].gender,
                    "age": customers[i].age,
                    "dateOfBirth": customers[i].dateOfBirth,
                    "address": customers[i].address,
                    "phone": customers[i].phone,
                    "_v": customers[i]._v,
                    "_id": customers[i]._id,
                    "createTime": customers[i]._id,
                    "updateTime": customers[i].updateTime,
                    "region": customers[i].region,
                    "insurance": customers[i].insurance
                })
            }
            sortedCustomer = sortedCustomer.sort(({ updateTime: a }, { updateTime: b }) => b - a)
            res.status(200).json({ success: true, customers: sortedCustomer })
        }
    })
};


// GET request to filter the particular ages of the customer
exports.customerAgeFilterGet = function (req, res) {
    customer.find({ staff: req.params.staffId, age: req.query.age }, function (err, customers) {
        if (customers.length === 0) {
            res.status(200).json({ success: false, message: "There is no customer in this age" })
        }
        else {
            res.status(200).json({ success: true, customers: customers })
        }
    })
}

// POST request for staff to update the detail for a particular customer
// An example of using this function is to update or assign a customer to a staff (link the staff id)
exports.customerChangePost = function (req, res) {

    // check validation of the customer id
    Customer.findById(req.params.customerId, function (err, customerDetail) {
        if (!customerDetail) {
            res.status(404).send("customer is not found!")
        }
        else {
            Customer.findByIdAndUpdate(
                req.params.customerId,
                req.body,
                { new: true },
                function (err, customerNew) {
                    if (err) {
                        res.status(404).json({ success: false, err })
                    }
                    else {
                        res.status(200).json({ success: true, customerDetails: customerNew })
                    }
                })
        }
    })
}

// GET request to filter the particular gender of the customer
exports.customerGenderFilterGet = function (req, res) {
    customer.find({ staff: req.params.staffId, gender: req.query.gender }, function (err, customers) {
        if (customers.length === 0) {
            res.status(200).json({ success: false, message: "No Customers Founded" })
        }
        else {
            res.status(200).json({ success: true, customers: customers })
        }
    })
}

// GET request to search customer by using their first name
exports.customerNameSearchGet = function (req, res) {
    customer.find({ staff: req.params.staffId, givenName: req.query.givenName }, function (err, customers) {
        if (customers.length === 0) {
            res.status(200).json({ success: false, message: "No Customers Founded" })
        }
        else {
            res.status(200).json({ success: true, customers: customers })
        }
    })
}

// GET request to get all customers that currently no assigned staff
exports.customerNoStaffGet = function (req, res) {
    customer.find({ staff: req.query.staffId }, function (err, cusList) {
        if (cusList.length === 0) {
            res.status(200).json({ success: false, message: "Every customer has an assigned staff" })
        }
        else {
            var cusLists = []
            var key = 1;
            for (i = 0; i < cusList.length; i++) {

                for (j = 0; j < cusList[i].insurance.length; j++) {
                    cusLists.push({
                        "key": key++,
                        "firstName": cusList[i].givenName,
                        "lastName": cusList[i].familyName,
                        "contactNumber": cusList[i].phone,
                        "email": cusList[i].email,
                        "insurance": cusList[i].insurance[j],
                        "id":cusList[i]._id,
                        "details":[],
                        "assign":[]
                    })
                }
            }
            res.status(200).json({ success: true, customers: cusLists })
        }
    })
}

// GET request to get the number of customers that associated with particular staff
exports.customerNumberGet = function (req, res) {
    customer.find({ staff: req.params.staffId }, function (err, customers) {
        if (customers.length === 0) {
            res.status(200).json({ success: false, message: "No Customers Founded" })
        }
        else {
            res.status(200).json({ success: true, numCustomers: customers.length })
        }
    })
}

// GET request to get the customers' partial information 
exports.customerPartialGet = function (req, res) {
    customer.find({ staff: req.params.staffId }, function (err, cusList) {
        if (cusList.length === 0) {
            res.status(200).json({ success: false, message: "No customer" })
        }
        else {
            var cusLists = []
            var key = 1;
            for (i = 0; i < cusList.length; i++) {

                for (j = 0; j < cusList[i].insurance.length; j++) {
                    cusLists.push({
                        "key": key++,
                        "firstName": cusList[i].givenName,
                        "lastName": cusList[i].familyName,
                        "contactNumber": cusList[i].phone,
                        "email": cusList[i].email,
                        "insurance": cusList[i].insurance[j],
                        "id":cusList[i]._id,
                        "details":[]
                    })
                }




            }
            res.status(200).json({ success: true, customerList: cusLists })
        }
    })
}



// POST request to update/add the insurance array
exports.customerInsuranceUpdate = function (req, res) {
    const { insurance } = req.body;
    Customer.findById(req.params.customerId, function (err, customerDetail) {
        if (!customerDetail) {
            res.status(404).send("customer is not found!")
        }
        else {
            Customer.findByIdAndUpdate(
                req.params.customerId,
                {$addToSet: {insurance}},
                {new: true},
                function(err, customerNew) {
                    if (err) {
                        res.status(404).json({ success: false, err })
                    }
                    else {
                        res.status(200).json({ success: true, customerDetails: customerNew })
                    }
                }
            )
        }
    })
}

// POST request to update/delete the insurance array
exports.customerInsuranceDelete = function (req, res) {
    const { insurance } = req.body;
    Customer.findById(req.params.customerId, function (err, customerDetail) {
        if (!customerDetail) {
            res.status(404).send("customer is not found!")
        }
        else {
            Customer.findByIdAndUpdate(
                req.params.customerId,
                {$pullAll: {insurance}},
                {new: true},
                function(err, customerNew) {
                    if (err) {
                        res.status(404).json({ success: false, err })
                    }
                    else {
                        res.status(200).json({ success: true, customerDetails: customerNew })
                    }
                }
            )
        }
    })
}