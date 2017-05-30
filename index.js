const request = require('request');
const urlList = require('./urls.json');

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



