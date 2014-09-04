function Location() {
    this.longitude = 0.0;
    this.latitude = 0.0;
    this.buildingName = "None";
    this.roomNumber = "None";
}

Location.prototype.setLongitude = function(newLongitude) {
    this.longitude = newLongitude;
};

Location.prototype.setLatitude = function(newLatitude) {
    this.latitude = newLatitude;
};

Location.prototype.setBuildingName = function(newBuildingName) {
    this.buildingName = newBuildingName;
};

Location.prototype.setRoomNumber = function(newRoomNumber) {
    this.roomNumber = newRoomNumber;
};

Location.prototype.getLongitude = function() {
    return this.longitude;
};

Location.prototype.getLatitude = function() {
    return this.latitude;
};

Location.prototype.getBuildingName = function() {
    return this.buildingName;
};

Location.prototype.getRoomNumber = function() {
    return this.roomNumber;
};

// Add a distance to function
//Location.prototype.distanceTo = function() {
//    return this.longitude;
//};