//"npm run test"
const expect = require('chai').expect;
const request = require('request');
const app = require('../server');

const baseUrl = "http://localhost:8080/staff"

const testStaffInfo = {
    vaildBody: {
        "givenName": "Jenny",
        "familyName": "Kim",
        "password": "123456",
        "phone": 1331331666,
        "photoPath": "https://www.google.com.au/search?q=Jennie&tbm=isch&source=iu&ictx=1&fir=uF22PFCTwJafZM%252CZaJuVnLsZ74fpM%252C_&vet=1&usg=AI4_-kSxjGJlEkyzPjEhmw5jp36EdL5d7w&sa=X&ved=2ahUKEwjHwI-W6ObyAhXLAYgKHW-LA84Q_h16BAg9EAE#imgrc=uF22PFCTwJafZM",
        "address": "Union House"
    }
}

const testStaffId = "6124b0c04093d131dc476e44"

describe("staff integration tests", () => {
    it('should be able to update profile for staff', function(done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/changeDetails/' + testStaffId,
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