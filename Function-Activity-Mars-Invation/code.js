var robot = {
    name : "VKU Robot",
    coordinates : {
        x :0,
        y:0,
        z:0
    }
};

// Check method

robot.check = function(){
    console.log("Robot position: x = " +
    this.coordinates.x + ", y = " +
    this.coordinates.y +", z = " +
    this.coordinates.z + ".");

    if (this.coordinates.x  === 4 && this.coordinates.y === 2 && this.coordinates.z === 3){
        console.log("Mission complete");
    }
}

robot.moveRight = function(){
    if(this.coordinates.x !== 10){
        this.coordinates.x ++;
    }
    this.check();
}
robot.moveLeft = function(){
    if(this.coordinates.x !== 0){
        this.coordinates.x --;
    }
    this.check();
}
robot.moveForward = function(){
    if(this.coordinates.y !== 10){
        this.coordinates.y ++;
    }
    this.check();
}
robot.moveBackward = function(){
    if(this.coordinates.y !== 0){
        this.coordinates.y --;
    }
    this.check();
}
robot.moveUp = function(){
    if(this.coordinates.z !== 10){
        this.coordinates.z ++;
    }
    this.check();
}
robot.moveDown = function(){
    if(this.coordinates.z !== 0){
        this.coordinates.z --;
    }
    this.check();
}