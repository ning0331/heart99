input.onButtonPressed(Button.A, function () {
    basic.showNumber(520)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I love You")
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 99; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # # #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
