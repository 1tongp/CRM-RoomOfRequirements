const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/calendar"

const testEventCreate = {
    vaildBody: {
        "event": "Integration Test use Only",
        "staff": "6124b0c04093d131dc476e44",
        "type": "Work",
        "startTime": "0800AM",
        "endTime": "0915AM",
        "dateYear": "09/05/2021"
    }
}

describe("Calendar integration tests", () => {
    it('should be able to create Event', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/create',
                body: testEventCreate.vaildBody,
                json: true,
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body.message).to.equal("created a new event");
                if (error) done (error);
                else done();
            }
        );
    })
})