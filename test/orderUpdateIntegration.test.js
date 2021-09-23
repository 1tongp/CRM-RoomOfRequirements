const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/order"

const testOrderInfo = {
    vaildBody: {
        "detail": "2021/8/24, use the phone to contact the customer; 2021/9/05, send a gift to customer"
    }
}

//const testOrderId = "6124e0e03cd92a39a0633944"
const testOrderId = "61398639041fbf5258ee1f7c"

describe("order integration tests", () => {
    it('should be able to update detail or staff for order', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/change/' + testOrderId,
                body: testOrderInfo.vaildBody,
                json: true,
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body.success).to.equal(true);
                if (error) done (error);
                else done();
            }
        );
    })
})