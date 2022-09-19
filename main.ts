input.onPinPressed(TouchPin.P0, function () {
    red_count += 1
    basic.clearScreen()
    basic.showNumber(red_count)
})
input.onPinPressed(TouchPin.P2, function () {
    green_count += 1
    basic.clearScreen()
    basic.showNumber(green_count)
})
input.onPinPressed(TouchPin.P1, function () {
    blue_count += 1
    basic.clearScreen()
    basic.showNumber(blue_count)
})
let green_count = 0
let blue_count = 0
let red_count = 0
red_count = 0
blue_count = 0
green_count = 0
basic.showNumber(0)
