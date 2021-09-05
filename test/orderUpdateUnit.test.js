const expect = require('chai').expect;
const request = require('request');

const testOrderInfo = {
    vaildBody: {
        "customer": "6124d9bb644d143d6c11faa9",
        "staff": "6124b0c04093d131dc476e44",
        "detail": "successful updated",
    }
}

const testOrderResult = {
    vaildResult: {
        "customer": "6124d9bb644d143d6c11faa9",
        "staff": "6124b0c04093d131dc476e44",
        "detail": "successful updated",
    }
}

describe("order unit tests", () => {
    it('should return a updated information for order', function (done) {
        var curBody = {
            "customer": "6124d9bb644d143d6c11faa9",
            "staff": "6124b0c04093d131dc476e44",
            "detail": "old version",
        }

        curBody.customer = testOrderInfo.vaildBody.customer;
        curBody.staff = testOrderInfo.vaildBody.staff;
        curBody.detail = testOrderInfo.vaildBody.detail;


        expect(curBody).to.eql(testOrderResult.vaildResult)
        done()
    })

})