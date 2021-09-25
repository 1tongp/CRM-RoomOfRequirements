const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/staff"

const testStaffSignup = {
    vaildBody: {
        "givenName": "Kerry1",
        "familyName": "liu1",
<<<<<<< HEAD
        "loginEmail": "27@test",
=======
        "loginEmail": "32@test",
>>>>>>> d211c590a17124f87282e1795f39c89ed214fee0
        "password": "365",
        "role": "manager",
        "phone": 13580807979
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