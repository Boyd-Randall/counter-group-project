function Clear_all () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.InBackground)
    red_count = 0
    blue_count = 0
    green_count = 0
    Active_number = 0
}
let Active_number = 0
let green_count = 0
let blue_count = 0
let red_count = 0
red_count = 0
blue_count = 0
green_count = 0
Active_number = red_count
basic.showNumber(0)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) && (input.pinIsPressed(TouchPin.P1) && input.pinIsPressed(TouchPin.P2))) {
        basic.pause(2000)
        if (input.pinIsPressed(TouchPin.P0) && (input.pinIsPressed(TouchPin.P1) && input.pinIsPressed(TouchPin.P2))) {
            Clear_all()
        }
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        red_count += 1
        Active_number = red_count
    } else if (input.pinIsPressed(TouchPin.P1)) {
        blue_count += 1
        Active_number = blue_count
    } else if (input.pinIsPressed(TouchPin.P2)) {
        green_count += 1
        Active_number = green_count
    }
    if ((blue_count || (green_count || red_count)) > 10) {
        Clear_all()
    }
    basic.showNumber(Active_number)
})
