console.log("running");

var duckHuntUI = function() {
    var self = this; 
    this.game = undefined; // initialized when game is started, not on title screen
    
    this.initialize = function() {
        $("#btnLaunch").hide();

        $("#btnPlay").on("click", function() {
            $("#btnLaunch").show(); 

            setTimeout(function() {
                self.runGameUI();
                console.log("play btn pressed: starting game"); 
                self.game = new duckHuntGame(); 
            }, 1); 
        });

    };

    this.runGameUI = function() {
        document.getElementById("gameBoard").addEventListener("mousemove", self.getMousePos);
        // document.removeEventListener("mousemove", self.getMousePos); 
        // document.addEventListener("mousedown", self.mouseClick); 
        $("#btnLaunch").on("click", function() {
            self.game.running = false;  
            console.log("launch pressed"); 
        });
    };

    this.getMousePos = function(e) {
        $(".board").css("cursor", "none"); 
        var x = e.clientX; 
        var y = e.clientY; 
        // console.log(x + " " + y); 
        $("#crosshair").css("left", x - 40); 
        $("#crosshair").css("top", y - 40); 
    }; 

    this.getMouseClick = function(e) {
        console.log("click"); 
    }

    this.initialize(); 
}



// var duckHuntUI = function () {
//     var self = this;
//     this.game = undefined;
//     this.target = new target();
//     target.xPos = 50;
//     target.yPos = 50;
//     this.initialize = function () {
//         self.game = new duckHuntGame()

//         document.getElementById("btnPlay").onclick = function () {
            
//         };
//     };

//     this.launchTarget = function () {
//         console.log("launch"); 

//         var x = 0; 
//         while (x < 500) {
//             console.log("loop"); 
            
//                 $('#target').css("left", target.xPos);
//                 $('#target').css("top", target.yPos);
//                 console.log(target.xPos);
//                 target.xPos += 2;
//                 target.yPos += 1;
//                 if (target.xPos > 1000) {
//                     self.running = false;
//                 }
//             x++; 
//         }
//     };

//     this.initialize();
// }