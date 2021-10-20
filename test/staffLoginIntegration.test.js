const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/staff"

const testStaffLogin = {
    vaildBody: {
        "loginEmail": "ror@h1.com",
        "password": "123456789c"
    }
}

describe("staff integration tests", () => {
    it('should be able to Sign in to account', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/login',
                body: testStaffLogin.vaildBody,
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