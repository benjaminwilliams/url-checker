const request = require('request');
const urlList = require('./urls.json');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

urlList.forEach((item) => {
    request(item.url, (err, response, body) => {
        if(response){
            console.log(item.name + ": " + response.statusCode);
        }
        else{
            console.log("error: " + item.name + ": " + err);
        }
    });
});



