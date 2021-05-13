bitcommander.onEvent(BCPins.Yellow, BCEvents.Down, function () {
    radio.sendNumber(3)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . # #
        . # # # .
        # # . . .
        . # # # .
        . . . # #
        `)
    clear()
})
bitcommander.onEvent(BCPins.Blue, BCEvents.Down, function () {
    radio.sendNumber(4)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # # . . .
        . # # # .
        . . . # #
        . # # # .
        # # . . .
        `)
    clear()
})
bitcommander.onEvent(BCPins.Green, BCEvents.Down, function () {
    radio.sendNumber(2)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # . . . #
        # # . # #
        . # . # .
        . # # # .
        . . # . .
        `)
    clear()
})
function clear () {
    basic.pause(200)
    basic.clearScreen()
}
bitcommander.onEvent(BCPins.Red, BCEvents.Down, function () {
    radio.sendNumber(1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        # # . # #
        # . . . #
        `)
    clear()
})
music.playMelody("- - - - - - - - ", 120)
radio.setGroup(1)
