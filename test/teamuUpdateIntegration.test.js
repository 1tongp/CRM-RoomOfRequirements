const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/staff"

const testStaffInfo = {
    vaildBody: {
    	"team": "6124fd21b6cf2337a831eee4",
        "teamNumber": "1"
    }
}

const testStaffId = "6133649478c8be4038fb4ebd"

describe("Staff team should be updated", () => {
    it('should be able to update team number and team ID for staff', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/changeInfo/' + testStaffId,
                body: testStaffInfo.vaildBody,
                json: true,
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body.changeDetails.teamNumber).to.equal("1");
                if (error) done (error);
                else done();
            }
        );
    })
})