input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    let mode = 0
    if (mode == 0) {
        for (let index = 0; index < 4; index++) {
            if (input.buttonIsPressed(Button.A)) {
            	
            } else if (input.buttonIsPressed(Button.B)) {
            	
            } else if (input.buttonIsPressed(Button.AB)) {
            	
            } else if (input.isGesture(Gesture.Shake)) {
            	
            } else {
            	
            }
        }
    } else if (mode == 1) {
    	
    } else {
    	
    }
})
