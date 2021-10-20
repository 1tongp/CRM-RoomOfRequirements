const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/calendar"

const testEventUpdate = {
    vaildBody: {
        "visibility": "Public",
    }
}

//const testCalendarId = "61336effc3becb16841a04f8"
const testCalendarId = "615ac1517957dd29b8c5e287"

describe("Calendar integration tests", () => {
    it('should be able to update Event', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/edit/' + testCalendarId,
                body: testEventUpdate.vaildBody,
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