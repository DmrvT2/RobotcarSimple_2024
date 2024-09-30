function 右折 () {
    servos.P0.run(75)
    servos.P1.run(0)
    basic.pause(825)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
    前進１マス()
    右折()
    前進１マス()
    左折()
    前進１マス()
    servos.P0.stop()
    servos.P1.stop()
})
function 左折 () {
    servos.P0.run(0)
    servos.P1.run(-75)
    basic.pause(825)
}
input.onButtonPressed(Button.B, function () {
    while (true) {
        servos.P0.stop()
        servos.P1.stop()
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
function 前進１マス () {
    servos.P0.run(50)
    servos.P1.run(-50)
    basic.pause(1350)
}
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Happy)
