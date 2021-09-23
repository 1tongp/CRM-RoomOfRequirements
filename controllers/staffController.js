const Staff = require('../models/staff');
const bcrypt = require('bcryptjs');

// POST request for staff register 
exports.staffRegisterPost = function (req, res) {
    const { givenName, familyName, loginEmail, password, role, phone, team} = req.body;
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
                team
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
                                team: staff.team
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
                                res.status(200).json({ changeDetails: changeDetails })
                            }
                        })
                })
            })
        }
    })
}

// exports.staffChangeNamePost = function (req, res) {
//     const { givenName, familyName } = req.body;
//     Staff.findById(req.params.id, function (err, staffId) {

//         // if staff id not exist in database, return the error message
//         if (!staffId) {
//             res.status(404).json({ success: false, message: "changeNameDetail staff is not found" })
//         }

//         // if id for perticular staff exist, based on the staff's id to update the personal detail for staff
//         else {
//             if (err) throw err;
//             Staff.findByIdAndUpdate(
//                 req.params.id,
//                 { givenName, familyName },
//                 { new: true },
//                 function (err, changeName) {
//                     if (err) {
//                         res.status(404).json({ success: false, error: err })
//                     }
//                     else {
//                         res.status(200).json({ success: true, changeName: changeName })
//                     }
//                 })
//         }
//     })
// }

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
                            team: staff.team
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
                            team: staff.team
                    },
                });
            }
            else {
                res.status(200).json({ success: false, error: 'Password Incorrect' });
            }
        }
    })
}

