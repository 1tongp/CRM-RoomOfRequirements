const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/customer"

const testCustomerCreate = {
    vaildBody: {
        "givenName": "Lay1",
        "familyName": "Zhang1",
        "email": "23@test",
        "gender": "male",
        "age": 27,
        "dateOfBirth": "1990/12/22",
        "phone": 33333311111,
        "address": "Beijing",
        "region": "Box Hill",
        "insurance": {}
    }
}

describe("customer integration tests", () => {
    it('should be able to create customer information', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/create',
                body: testCustomerCreate.vaildBody,
                json: true,
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body.message).to.equal("customer created successfully");
                if (error) done (error);
                else done();
            }
        );
    })
})