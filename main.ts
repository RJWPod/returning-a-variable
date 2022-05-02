input.onButtonPressed(Button.A, function () {
    if (User_Guess > 0) {
        User_Guess += -1
        basic.showNumber(User_Guess)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Hidden_Number(User_Guess)))
})
input.onButtonPressed(Button.B, function () {
    User_Guess += 1
    basic.showNumber(User_Guess)
})
input.onGesture(Gesture.Shake, function () {
    Determiner += 1
    basic.showString("#Tries=")
    basic.showString("" + (Hidden_Number(User_Guess)))
    basic.pause(1000)
    basic.clearScreen()
})
function Hidden_Number (num: number) {
    if (Determiner == 1) {
        Determiner += -1
        return Tries
    } else if (num == Random_) {
        return "NICE"
    } else if (num < Random_) {
        Tries = "" + Tries + 1
        return "HIGHER"
    } else if (num > Random_) {
        Tries = "" + Tries + 1
        return "LOWER"
    }
    return Tries
}
let Tries = ""
let User_Guess = 0
let Determiner = 0
let Random_ = 0
Random_ = randint(0, 20)
Determiner = 0
