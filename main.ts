radio.onReceivedNumber(function (receivedNumber) {
    ell = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    jo = randint(1, 3)
    radio.sendNumber(jo)
    if (jo == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (jo == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let jo = 0
let ell = 0
radio.setGroup(1)
