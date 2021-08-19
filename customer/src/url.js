let URLs = {};

// live url 要改
if (process.env.NODE_ENV === "production") {
    URLs = {
        baseURL : "/api",
        socketURL: "https://frontend-keepitsimple.herokuapp.com/"
    };

} else {
    URLs = {
        baseURL : "http://localhost:5000/api",
        socketURL: "http://localhost:5000/api",
    };
}

export default URLs;