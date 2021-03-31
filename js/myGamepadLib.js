function MyGamepadLib() {
    const self = {
        getGamepad: navigator.getGamepads(),
        startGamepad: window.addEventListener("gamepadconnected", function(e) {
            console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            e.gamepad.index,
            e.gamepad.id,
            e.gamepad.buttons.length, e.gamepad.axes.length);
            console.log(e);
        })
    };
    return self;
}
//     const self = {};
//     self.getGamepad = navigator.getGamepads();

//     self.updateGamepad = function(index) {

//         let isConnected = myGamepadLib().getGamepad;

//         if(isConnected == true) {
//             requestAnimationFrame(this.updateGamepad());
//         }

//     };
//     return self;

