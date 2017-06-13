const request = require('request');
const meta = require('html-metadata');
const urlList = require('./urls.json');

// allow pages without certs (for UAT environments)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let isMeta = false;
process.argv.forEach(function (val, index, array) {
  if(val === "meta"){
    isMeta = true;
  }
});

urlList.forEach((item) => {
        request(item.url, (err, response, body) => {
            if(response){
              if(isMeta){
                meta(item.url, function (err, data) {
                      const output = `${item.name}, ${data.general.title}, ${data.general.description}`;
                      console.log(output);
                  });
              }
              else{
                console.log(item.name + "," + response.statusCode);
              }
            }
            else{
                log.push("error: " + item.name + ": " + err);
            }
        });
});



