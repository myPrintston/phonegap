function Printer() {
    this.status = 0;
    this.statusMessage = "";
    this.errorIdsReported = -1;
    this.jamsToday = 0;
    this.lastJamReportTime = 0;
    this.timeUpdated = "NaN";
};

Printer.prototype = new PhysicalObject();

Printer.prototype.setStatus = function(newStatus) {
    this.status = newStatus;
};

Printer.prototype.setStatusMessage = function(newStatusMessage) {
    this.statusMessage = newStatusMessage
};

Printer.prototype.setErrorIdsReported = function(newErrorIdsReported) {
    this.errorIdsReported = newErrorIdsReported;
};

Printer.prototype.setJamsToday = function(newJamsToday) {
    this.jamsToday = newJamsToday;
};

Printer.prototype.setLastJamReportTime = function(newLastJamReportTime) {
    this.lastJamReportTime = newLastJamReportTime;
};

Printer.prototype.setTimeUpdated = function(newTimeUpdated) {
    this.timeUpdated = newTimeUpdated;
};

Printer.prototype.getStatus = function() {
    return this.status;
};

Printer.prototype.getStatusMessage = function() {
    return this.statusMessage;
};

Printer.prototype.getErrorIdsReported = function() {
    return this.errorIdsReported;
};

Printer.prototype.getJamsToday = function() {
    return this.jamsToday;
};

Printer.prototype.getLastJamReportTime = function() {
    return this.lastJamReportTime;
};

Printer.prototype.getTimeUpdated = function() {
    return this.timeUpdated;
};