input.onButtonPressed(Button.A, function () {
    if (User_Guess > 0) {
        User_Guess += -1
        basic.showNumber(User_Guess)
    }
})
function Tries (num: number) {
    return num
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Hidden_Number(User_Guess)))
})
input.onButtonPressed(Button.B, function () {
    User_Guess += 1
    basic.showNumber(User_Guess)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("#Tries=")
    basic.showString("" + (Tries(Tries2)))
    basic.pause(1000)
    basic.clearScreen()
})
function Hidden_Number (num: number) {
    if (num == Random_) {
        Tries2 = 0
        User_Guess = 0
        return "NICE"
    } else if (num < Random_) {
        Tries2 += 1
        return "HIGHER"
    } else {
        Tries2 += 1
        return "LOWER"
    }
}
let Tries2 = 0
let User_Guess = 0
let Random_ = 0
Random_ = randint(0, 20)
let Determiner = 0
