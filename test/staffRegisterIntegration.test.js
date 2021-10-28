const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/staff"

const testStaffSignup = {
    vaildBody: {
        "team": "6124fd21b6cf2337a831eee4",
	    "teamNumber": "1",
        "givenName": "Kerry1",
        "familyName": "liu1",
        "loginEmail": "testnew@test",
        "password": "365",
        "role": "Manager",
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
