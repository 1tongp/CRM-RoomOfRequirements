const expect = require('chai').expect;
const request = require('request');

const testStaffInfo = {
    vaildBody: {
        "givenName": "Jenny",
        "familyName": "Wang",
        "password": "123456",
        "phone": 1331331666
    }
}

const testStaffResult = {
    vaildResult: {
        "givenName": "Jenny",
        "familyName": "Wang",
        "password": "123456",
        "phone": 1331331666
    }
}

describe("unit tests", () => {
    it('should return a updated information for staff', function (done) {
        var curBody = {
            "givenName": "Jennie",
            "familyName": "Wang",
            "password": "123456",
            "phone": 1331331333
        }

        // var responseBody = {
        //     "currentAddress": "unimelb building",
        //     "parked": false,
        //     "location": [0, 0],
        //     "readyForOrder": false
        // }

        curBody.givenName = testStaffInfo.vaildBody.givenName;
        curBody.familyName = testStaffInfo.vaildBody.familyName;
        curBody.password = testStaffInfo.vaildBody.password;
        curBody.phone = testStaffInfo.vaildBody.phone;


        expect(curBody).to.eql(testStaffResult.vaildResult)
        done()
    })

})