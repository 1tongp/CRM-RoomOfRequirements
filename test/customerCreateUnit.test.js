const expect = require('chai').expect;
const request = require('request');

const testCustomerInfo = {
    vaildBody: {
        "givenName": "Lay1",
        "familyName": "Zhang1",
        "email": "34@test",
        "gender": "male",
        "age": 27,
        "dateOfBirth": "1990/12/22",
        "phone": 33333311111,
        "address": "Beijing",
        "region": "Box Hill",
        "insurance": {}
    }
}

const testCustomerResult = {
    vaildResult: {
        "givenName": "Lay1",
        "familyName": "Zhang1",
        "email": "34@test",
        "gender": "male",
        "age": 27,
        "dateOfBirth": "1990/12/22",
        "phone": 33333311111,
        "address": "Beijing",
        "region": "Box Hill",
        "insurance": {}
    }
}

describe("customer unit tests", () => {
    it('should return a new customer', function (done) {
        var curBody = {
            "givenName": "",
            "familyName": "",
            "email": "",
            "gender": "",
            "age": 0,
            "dateOfBirth": "",
            "phone": 0,
            "address": "",
            "region": "",
            "insurance": {}
        }

        curBody.givenName = testCustomerInfo.vaildBody.givenName;
        curBody.familyName = testCustomerInfo.vaildBody.familyName;
        curBody.email = testCustomerInfo.vaildBody.email;
        curBody.gender = testCustomerInfo.vaildBody.gender;
        curBody.age = testCustomerInfo.vaildBody.age;
        curBody.dateOfBirth = testCustomerInfo.vaildBody.dateOfBirth;
        curBody.phone = testCustomerInfo.vaildBody.phone;
        curBody.address = testCustomerInfo.vaildBody.address;   
        curBody.region = testCustomerInfo.vaildBody.region;
        curBody.insurance = testCustomerInfo.vaildBody.insurance; 


        expect(curBody).to.eql(testCustomerResult.vaildResult)
        done()
    })

})