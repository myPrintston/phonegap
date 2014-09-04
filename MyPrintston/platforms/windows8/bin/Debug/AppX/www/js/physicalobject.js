function PhysicalObject() {
    this.location = new Location();
};

PhysicalObject.inherits(Location);

PhysicalObject.prototype.setLocation = function(newLocation) {
    this.location = newLocation;
};

PhysicalObject.prototype.getLocation = function() {
    return this.location;
};