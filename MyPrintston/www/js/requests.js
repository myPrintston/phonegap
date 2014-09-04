//var http = require("http");
var SERVER_ADDRESS = "54.186.188.121";
var PORT = "2016";

//getPrinterStatuses();



function addError(callback) {
    httpGetRequest("/error/", callback);
};

function checkLogin(callback) {
    httpGetRequest("/checklogin/", callback);
};

function getErrors(printerId, callback) {
    httpGetRequest("/geterrors/" + printerId, callback);
};

function getAllPrinterData(callback) {
    httpGetRequest("/pall/", callback);
};

function getAllPrinterStatuses(callback) {
    httpGetRequest("/pallStat/", callback);
};

function getErrorTypes(callback) {
    httpGetRequest("/etypes/", callback);
};

function getPrinterStatusById(printerId, callback) {
    httpGetRequest("/pid/" + printerId + "/", callback);
};

// Assumes printerIds is in the form of an Array
function getPrinterStatusesByIds(printerIds, callback) {
    httpGetRequest("/pids/" + printerIds.join("/") + "/", callback);
};

function login(userName, password, callback) {
    httpGetRequest("/login/" + userName + "/" + password + "/", callback);
};

function logout(callback) {
    httpGetRequest("/logout/", callback);
};

function reportError(callback) {
    var printer = new Object();
    printer.printerid = 57;
    printer.netid = "daashley";
    printer.buildingName = "Firestone Library";
    printer.roomNumber = "B-4-K";
    printer.errors = "[8, 9, 10]";
    printer.errMsg = "Done Broke it Again";
    var jsonString = JSON.stringify(printer);
    httpPostRequest("/error/", "json; charset=utf-8", jsonString, callback);
};

// Assumes errorTypes is an array
function reportErrorsFixed(printerId, errorTypes, callback) {
    httpGetRequest("/fixerrors/" + printerId + "/" + errorTypes.join("/") + "/", callback);
};

function reportPrinterFixed(printerId, callback) {
    httpGetRequest("/fixprinter/" + printerId + "/", callback);
};

function httpGetRequest(pathToUse, callback) {
    var request = new XMLHttpRequest();
    var url = "http://" + SERVER_ADDRESS + ":" + PORT + pathToUse;

    request.open("GET", url, true);

    //Call a function when the state changes.
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                callback(request.responseText)
            }
        }
    }
    request.send();
};


function httpPostRequest(pathToUse, dataType, dataToSend, callback) {
    var request = new XMLHttpRequest();
    var url = "http://" + SERVER_ADDRESS + ":" + PORT + pathToUse;

    request.open('POST', url, true);
    request.setRequestHeader('Content-type','application/' + dataToSend);
    request.setRequestHeader("Content-length", dataToSend.length);
    request.setRequestHeader("Connection", "close");

    request.onreadystatechange = function(){
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                callback(request.responseText)
            }
        }
    }
    request.send(dataToSend);
};

function processPrinterData(data) {
    var parentElement = document.getElementById("fillme");
    parentElement.innerHTML = data;
};