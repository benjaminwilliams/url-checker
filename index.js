"use strict";
const request = require('request');
const meta = require('html-metadata');
const urlList = require('./urls.json');

const urlPrefixLength = 69;
const delimiter = ';';

let isMeta = false;

// allow pages without certs (for UAT environments)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


//  Arguments
process.argv.forEach(function (val, index, array) {
    if(val === "meta"){
        isMeta = true;
    }
});

function getStatus(item){
    request(item.url, (err, response, body) => {
        if(response){
            console.log(item.name + delimiter + " " + getUrl(item.url) + delimiter + " " + response.statusCode)
        }
        else{
            log.push("error: " + item.name + ": " + err);
        }
    });
}

function getUrl(url){
    return url.slice(urlPrefixLength);
}

urlList.forEach((item) => {
    if( isMeta) {
        meta(item.url,(err, data) => {
            if(data){
                const generalData = {title: "ERROR", description: "ERROR"};
                const url = getUrl(item.url);
                if(data.hasOwnProperty('general')){
                    generalData.title =  data.general.title;
                    generalData.description = data.general.description;
                }
                if(generalData.title === undefined){
                    generalData.title = "[NO TITLE]"
                }
                if(generalData.description === undefined){
                 generalData.description = "[NO DESCRIPTION]"
                }
                console.log(`${item.name}${delimiter} ${url}${delimiter} ${generalData.title}${delimiter} ${generalData.description}`);
            }
            else {
                getStatus(item);
            }
        });
    }
    else{
        getStatus(item)
    }
});



