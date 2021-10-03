const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/staff"

const testStaffSignup = {
    vaildBody: {
        "givenName": "Kerry1",
        "familyName": "liu1",
        "loginEmail": "testnew1@test",
        "password": "365",
        "role": "manager",
        "phone": 13580807979,
        "address": "Uni melb West House",
        "companysuburb": "Box Hill"
    }
}

describe("staff integration tests", () => {
    it('should be able to create account', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/register',
                body: testStaffSignup.vaildBody,
                json: true,
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body.message).to.equal("staff registered successfully");
                if (error) done (error);
                else done();
            }
        );
    })
})