let URLs = {};

// live url
if (process.env.NODE_ENV === "production") {
    URLs = {
        baseURL: "/api",
        socketURL: "https://crm-room-of-requirement.herokuapp.com/"
    };
} else {
    URLs = {
        baseURL: "http://localhost:3000/api",
        socketURL: "http://localhost:3000/api",
    };
}

export default URLs;
