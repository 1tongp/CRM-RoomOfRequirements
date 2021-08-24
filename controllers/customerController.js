const Customer = require('../models/customer');
// const bcrypt = require('bcryptjs');

// POST request for customer register 
exports.customerCreatePost = function (req, res) {
    const { givenName, familyName, email, gender, age, dateOfBirth, phone, address} = req.body;
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
                address

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
                        address: customer.address
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
