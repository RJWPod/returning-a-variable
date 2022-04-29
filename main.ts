function Hidden_Number (num: number) {
    if (num == Random_) {
        return "NICE"
    } else if (num < Random_) {
        Guesses += 1
        return "HIGHER"
    } else if (num > Random_) {
        Guesses += 1
        return "LOWER"
    }
    return Guesses
}
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
    basic.showString("" + (Hidden_Number(Guesses)))
})
let User_Guess = 0
let Guesses = ""
let Random_ = 0
Random_ = randint(0, 20)
