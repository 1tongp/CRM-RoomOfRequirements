const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/order"

const testOrderCreate = {
    vaildBody: {
        "customer": "6124d9bb644d143d6c11faa9",
        "staff": "6124b0c04093d131dc476e44",
        "detail": "Integration test",
    }
}

describe("Order integration tests", () => {
    it('should be able to create Order', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/create',
                body: testOrderCreate.vaildBody,
                json: true,
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body.message).to.equal("created a new order");
                if (error) done (error);
                else done();
            }
        );
    })
})