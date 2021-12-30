radio.onReceivedNumber(function (receivedNumber) {
    ell = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    punts = 0
    basic.showNumber(punts)
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
            soundExpression.happy.playUntilDone()
            punts += 1
            basic.showNumber(punts)
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
            soundExpression.happy.playUntilDone()
            punts += 1
            basic.showNumber(punts)
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
            soundExpression.happy.playUntilDone()
            punts += 1
            basic.showNumber(punts)
        }
    }
    ell = 0
    if (punts == 3) {
        soundExpression.soaring.playUntilDone()
        basic.showIcon(IconNames.Yes)
        punts = 0
    }
})
let jo = 0
let punts = 0
let ell = 0
music.setBuiltInSpeakerEnabled(true)
radio.setGroup(1)
music.setVolume(255)
ell = 0
punts = 0
basic.showNumber(punts)
