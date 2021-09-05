const expect = require('chai').expect;
const request = require('request');

const testEventInfo = {
    vaildBody: {
        "event": "Integration Test use Only",
        "startTime": "0800AM",
        "endTime": "0915AM",
        "dateYear": "09/05/2021"
    }
}

const testEventResult = {
    vaildResult: {
        "event": "Integration Test use Only",
        "startTime": "0800AM",
        "endTime": "0915AM",
        "dateYear": "09/05/2021"
    }
}

describe("calendar unit tests", () => {
    it('should return a updated event', function (done) {
        var curBody = {
            "event": "Team meeting",
            "startTime": "0800AM",
            "endTime": "1000AM",
            "dateYear": "09/01/2021"
        }

        curBody.event = testEventInfo.vaildBody.event;
        curBody.startTime = testEventInfo.vaildBody.startTime;
        curBody.endTime = testEventInfo.vaildBody.endTime;
        curBody.dateYear = testEventInfo.vaildBody.dateYear;


        expect(curBody).to.eql(testEventResult.vaildResult)
        done()
    })

})