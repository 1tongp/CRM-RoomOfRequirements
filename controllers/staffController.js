const Staff = require('../models/staff');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');

// POST request for staff register 
exports.staffRegisterPost = function (req, res) {
    const { photoPath,companysuburb, givenName, familyName, loginEmail, password, role, phone, address, team, teamNumber} = req.body;
    Staff.findOne({ loginEmail: loginEmail }).then((emailExist) => {

        // for the case when email is already registered
        if (emailExist) {
            res.status(409).json({ success: false, message: "This email has been registered!" });
        }

        // otherwise, create a new account for staff
        else {
            const newStaff = new Staff({
                givenName,
                familyName,
                loginEmail,
                password,
                role,
                phone,
                address,
                team,
                teamNumber,
                companysuburb,
                photoPath,
            });

            // hash the password
            // save the new staff's informtion in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newStaff.password, salt, (err, hash) => {
                    if (err) throw err;
                    newStaff.password = hash;
                    newStaff.save().then((staff) => {
                        res.status(200).json({
                            success: true,
                            message: "staff registered successfully",
                            staff: {
                                id: staff.id,
                                givenName: staff.givenName,
                                familyName: staff.familyName,
                                loginEmail: staff.loginEmail,
                                password: staff.password,
                                role: staff.role,
                                phone: staff.phone,
                                address: staff.address,
                                team: staff.team,
                                teamNumber: staff.teamNumber,
                                companysuburb: staff.companysuburb,
                            },
                        })
                    })
                })
            })
        }
    });
};

// Get request for staff detail 
exports.staffDetailGet = function (req, res) {
    Staff.findById(req.params.id, function (err, staffDetail) {

        //if detail for perticular staff exist, print the detail to staff
        if (staffDetail) {
            res.status(200).json({ success: true, staff: staffDetail })
        }
        else {
            res.status(400).json({ success: false, message: "getDetail staff is not found" })
        }
    })
}

// Post request for staff to change their details
exports.staffChangeDetailsPost = function (req, res) {
    //const { givenName, familyName, password, phone, photoPath} = req.body;
    Staff.findById(req.params.id, function (err, staffId) {

        // if staff id not exist in database, return the error message
        if (!staffId) {
            res.status(404).json({ success: false, message: "changeDetail staff is not found" })
        }

        // if id for perticular staff exist, based on the staff's id to update the personal detail for staff
        // special case: email address and role cannot be updated.
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) throw err;
                    req.body.password = hash,
                    Staff.findByIdAndUpdate(
                        req.params.id,
                        req.body,
                        //{ givenName, familyName, password: hash, phone, photoPath},
                        { new: true },
                        function (err, changeDetails) {
                            if (err) {
                                res.status(404).json({ err })
                            }
                            else {
                                res.status(200).json({success: true, changeDetails: changeDetails })
                            }
                        })
                })
            })
        }
    })
}

// Post request for staff to change their details
exports.staffChangeInfoPost = function (req, res) {
    //const { givenName, familyName, password, phone, photoPath} = req.body;
    Staff.findById(req.params.id, function (err, staffId) {

        // if staff id not exist in database, return the error message
        if (!staffId) {
            res.status(404).json({ success: false, message: "changeDetail staff is not found" })
        }

        // if id for perticular staff exist, based on the staff's id to update the personal detail for staff
        // special case: email address and role cannot be updated.
        else {
            if (err) throw err;
                    Staff.findByIdAndUpdate(
                        req.params.id,
                        req.body,
                        //{ givenName, familyName, password: hash, phone, photoPath},
                        { new: true },
                        function (err, changeDetails) {
                            if (err) {
                                res.status(404).json({ success: false, error: err })
                            }
                            else {
                                res.status(200).json({ success: true, changeDetails: changeDetails })
                            }
                        })
        }
    })
}

exports.staffChangeTeamPost = function (req, res) {
    // const { team, teamNumber } = req.body;
    Staff.findById(req.params.id, function (err, staffId) {

        // if staff id not exist in database, return the error message
        if (!staffId) {
            res.status(404).json({ success: false, message: "changeDetail staff is not found" })
        }

        // if id for perticular staff exist, based on the staff's id to update the personal detail for staff
        else {
            if (err) throw err;
            Staff.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true },
                function (err, change) {
                    if (err) {
                        res.status(404).json({ success: false, error: err })
                    }
                    else {
                        res.status(200).json({ success: true, change: change })
                    }
                })
        }
    })
}

exports.staffLoginPost = function (req, res) {
    const { loginEmail, password } = req.body;

    // Match staff
    Staff.findOne({
        loginEmail: loginEmail,
    }).then((staff) => {
        if (!staff) {
            res.status(200).json({ success: false, error: "Email Not Registered" });
        }
        else {
            bcrypt.compare(password, staff.password, (err, isMatch) => {
                if (isMatch) {
                    res.status(200).json({
                        success: true,
                        staff: {
                            id: staff.id,
                            givenName: staff.givenName,
                            familyName: staff.familyName,
                            loginEmail: staff.loginEmail,
                            password: staff.password,
                            role: staff.role,
                            phone: staff.phone,
                            photoPath: staff.photoPath,
                            team: staff.team,
                            address: staff.address,
                            companysuburb: staff.companysuburb,
                            orderNum: staff.orderNum,
                            teamNumber: staff.teamNumber
                        },
                    });
                }
                else {
                    res.status(200).json({ success: false, error: 'Password Incorrect' });
                }
            })
        }
    })
}

// staff login unhash 
exports.staffLoginUnhashPost = function (req, res) {
    const { loginEmail, password } = req.body;

    Staff.findOne({
        loginEmail: loginEmail,
    }).then((staff) => {
        if (!staff) {
            res.status(200).json({ success: false, error: "Email Not Registered" });
        }
        else {
            if (password === staff.password) {
                res.status(200).json({
                    success: true,
                    staff: {
                        id: staff.id,
                            givenName: staff.givenName,
                            familyName: staff.familyName,
                            loginEmail: staff.loginEmail,
                            password: staff.password,
                            role: staff.role,
                            phone: staff.phone,
                            photoPath: staff.photoPath,
                            team: staff.team,
                            address: staff.address,
                            companysuburb: staff.companysuburb,
                            orderNum: staff.orderNum,
                            teamNumber: staff.teamNumber
                    },
                });
            }
            else {
                res.status(200).json({ success: false, error: 'Password Incorrect' });
            }
        }
    })
}

// GET request to get the team members based on the 'team ObjectID'
exports.teamMemberGet = function(req, res){

    // check validation of the order id
    Staff.find({team: req.params.teamId}, function(err, team){
        if(!team){
            res.status(404).json({success: false, message: "team is not found!"})
        }
        else{
            res.status(200).json({success: true, members: team})   
        }
    })
}

// POST request to update the number of orders for a particular staff
exports.orderNumUpdate = function (req, res) {
    const { orderNum } = req.body;
    Staff.findById(req.params.id, function (err, detail) {
        if (!detail) {
            res.status(404).send("staff is not found!")
        }
        else {
            Staff.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true },
                function(err, staffNew) {
                    if (err) {
                        res.status(404).json({ success: false, err })
                    }
                    else {
                        res.status(200).json({ success: true, staffDetail: staffNew })
                    }
                }
            )
        }
    })
}

exports.staffGet = function (req, res) {
    Staff.find({ role: req.query.role }, function (err, staffList) {
        if (staffList.length === 0) {
            res.status(200).json({ success: false, message: "No staff exist" })
        }
        else {
            var staffLists = []
            var key = 1;
            for (i = 0; i < staffList.length; i++) {

                
                    staffLists.push({
                        "key": key++,
                        "firstName": staffList[i].givenName,
                        "lastName": staffList[i].familyName,
                        "contactNumber": staffList[i].phone,
                        "email": staffList[i].loginEmail,
                        "teamNumber": staffList[i].teamNumber,
                        "teamId":staffList[i].team,
                        "id":staffList[i]._id,
                        "region":staffList[i].companysuburb,
                        "update": [],
                    })
                
            }
            res.status(200).json({ success: true, staff: staffLists })
        }
    })
}