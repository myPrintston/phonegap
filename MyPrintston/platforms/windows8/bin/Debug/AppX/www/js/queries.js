//var http = require("http");
var SERVER_ADDRESS = "54.186.188.121";
var PORT = "2016";

//getPrinterStatuses();



function addError(callback) {
    httpRequest("/error/", "GET", callback);
};

function checkLogin(callback) {
    httpRequest("/checklogin/", "GET", callback);
};

function getAllPrinterData(callback) {
    httpRequest("/pall/", "GET", callback);
};

function getAllPrinterStatuses(callback) {
    httpRequest("/pallStat/", "GET", callback);
};

function getErrorTypes(callback) {
    httpRequest("/etypes/", "GET", callback);
};

function getPrinterStatusById(printerId, callback) {
    httpRequest("/pid/" + printerId + "/", "GET", callback);
};

function logout(callback) {
    httpRequest("/logout/", "GET", callback);
};

function reportPrinterFixed(printerId, callback) {
    httpRequest("/fixprinter/" + printerId + "/", "GET", callback);
};

function getErrors(printerId, callback) {
    httpRequest("/geterrors/" + printerId, "GET", callback);
};

function pids(callback) {
    httpRequest("/etypes/", "GET", callback);
};




function httpRequest(pathToUse, methodToUse, callback) {
    var request = new XMLHttpRequest();
    
    url = "http://" + SERVER_ADDRESS + ":" + PORT + pathToUse;
    request.open("GET", url, true);

    //Call a function when the state changes.
    request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status == 200 || request.status == 0) {
            callback(request.responseText)
        }
    }
}
//console.log(tweets);
request.send();
    
    //parentElement.innerHTML += url;
    //$.get(url, callback);
}

function processPrinterData(data) {
    var parentElement = document.getElementById("fillme");
    parentElement.innerHTML = data;
};