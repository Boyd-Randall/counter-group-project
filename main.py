red_count = 0
blue_count = 0
green_count = 0
Active_number = red_count
basic.show_number(0)

def on_forever():
    global red_count, Active_number, blue_count, green_count
    if input.pin_is_pressed(TouchPin.P0):
        red_count += 1
        Active_number = red_count
    elif input.pin_is_pressed(TouchPin.P1):
        blue_count += 1
        Active_number = blue_count
    elif input.pin_is_pressed(TouchPin.P2):
        green_count += 1
        Active_number = green_count
    if (blue_count or (green_count or red_count)) > 10:
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.spring),
            SoundExpressionPlayMode.IN_BACKGROUND)
        red_count = 0
        blue_count = 0
        green_count = 0
        Active_number = 0
    basic.show_number(Active_number)
basic.forever(on_forever)
