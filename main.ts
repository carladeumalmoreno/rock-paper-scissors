radio.onReceivedNumber(function (receivedNumber) {
    ell = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    jo = randint(1, 3)
    radio.sendNumber(jo)
    control.waitMicros(6000)
    if (jo == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        if (ell == 3) {
            soundExpression.happy.play()
            punts += 1
        }
    } else if (jo == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        if (ell == 1) {
            soundExpression.happy.play()
            punts += 1
        }
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        if (ell == 2) {
            soundExpression.happy.play()
            punts += 1
        }
    }
    ell = 0
    if (jo == 3) {
        basic.showIcon(IconNames.Yes)
        soundExpression.happy.play()
    }
})
let jo = 0
let ell = 0
radio.setGroup(1)
music.setVolume(255)
ell = 0
let punts = 0
