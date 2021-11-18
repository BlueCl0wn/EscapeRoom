let Run = false
let mode = 0
let x = 0
let y = 0
basic.forever(function () {
    if (mode == 0) {
        Run = true
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                if (input.buttonIsPressed(Button.A)) {
                    led.plot(x, y)
                    basic.pause(100)
                } else if (input.buttonIsPressed(Button.B)) {
                    led.unplot(x, y)
                    basic.pause(10)
                } else if (input.buttonIsPressed(Button.AB)) {
                    radio.setGroup(0)
                } else if (y >= 4) {
                    break;
                }
            }
        }
        while (Run) {
            if (input.buttonIsPressed(Button.A)) {
                led.plot(x, y)
                x = x + 1
                basic.pause(100)
            } else if (input.buttonIsPressed(Button.B)) {
                led.unplot(x, y)
                x = x + 1
                basic.pause(10)
            } else if (input.buttonIsPressed(Button.AB)) {
                y = y + 1
                x = 0
            } else if (y >= 4) {
                break;
            }
        }
    } else if (mode == 1) {
    	
    } else {
    	
    }
})
