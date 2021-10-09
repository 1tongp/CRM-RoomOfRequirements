let URLs = {};

// live url
if (process.env.NODE_ENV === "production") {
    URLs = {
        baseURL: "/api",
        socketURL: "https://crm-room-of-requirement.herokuapp.com/"
    };
} else {
    URLs = {
        baseURL: "http://localhost:8080/api",
        socketURL: "http://localhost:8080/api",
    };
}

export default URLs;
