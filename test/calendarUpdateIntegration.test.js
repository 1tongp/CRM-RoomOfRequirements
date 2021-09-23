const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/calendar"

const testEventUpdate = {
    vaildBody: {
        "startTime": "0930AM",
        "endTime": "1030AM"
    }
}

//const testCalendarId = "61336effc3becb16841a04f8"
const testCalendarId = "614c1d64501f380a044b5285"

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