//"npm run test"
const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/staff"

const testStaffInfo = {
    vaildBody: {
        "phone": 1331331666,
        "address": "Union House"
    }
}

const testStaffId = "616e6d8ed158b944c448536b"

describe("staff integration tests", () => {
    it('should be able to update profile for staff', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/changeInfo/' + testStaffId,
                body: testStaffInfo.vaildBody,
                json: true,
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body.changeDetails.phone).to.equal(1331331666);
                if (error) done (error);
                else done();
            }
        );
    })
})