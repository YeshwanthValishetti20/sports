// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
<<<<<<< HEAD
      target: "http://3.110.48.22:5000", // Replace with your backend server URL
=======
      target: "https://kreedacbit.onrender.com", // Replace with your backend server URL
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
      changeOrigin: true,
    })
  );
};
