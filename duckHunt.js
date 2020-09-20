var duckHuntGame = function () {
    var self = this; 
    this.running = undefined; 

    this.initialize = function() {
        console.log("initializing game..."); 

        self.running = true; 

        console.log("game initialized, running"); 

        self.runGame(); 
    }; 

    this.runGame = function() {

        // while (this.running == true) {
            
        // }
    }; 

    this.tick = function(x) {

    }; 

    this.initialize(); 
}







// var duckHuntGame = function(){
//     var self = this;
//     this.options={
//         height:540,
//         width:680,
//         score:0,
//         round:0
        
//     }
//     this.player = new player();

//     this.initialize = function() {

//     };

//     this.reset = function(){
//         self.score=0;
//         self.round=0;
//     };
    
//     this.initialize(); 
// }

// var player = function(){
//     var self=this;
//     this.xPos = 500;
//     this.yPos = 500;
//     this.ammo = 6;
//     this.canShoot = true;

//     this.setPostion=function(xPos, yPos){
//         //Implement Crosshair wiggle, recoil?
//     }
//     this.fireGun = function(){
//         //Handles firing gun logic
//     }

// }
// var target = function(/*targetType*/){
//     var self = this;
//     this.xPos = 0;
//     this.yPos = 0;
//     // this.type = targetType;

//     this.initialize = function() {
//         self.xPos = 0; 
//         self.yPos = 0; 
//         // this.type = targetType;
//     };

//     this.setPostion = function(xPos,yPos ){
//         //TODO
//     };

//     this.updatePosition = function(direction){
//         //TODO
//     };
    
//     this.initialize(); 
// }
