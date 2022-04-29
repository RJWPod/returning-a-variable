function Hidden_Number (num: number) {
    if (0 == Random_) {
        User_Guess = num
        basic.showString("NICE")
    } else if (num < Random_) {
        basic.showString("HIGHER")
        Guesses += 1
    } else if (num > Random_) {
        basic.showString("LOWER")
        Guesses += 1
    }
    return ""
}
input.onButtonPressed(Button.A, function () {
    if (User_Guess > 0) {
        User_Guess += -1
        basic.showNumber(User_Guess)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Hidden_Number(User_Guess))
})
input.onButtonPressed(Button.B, function () {
    User_Guess += 1
    basic.showNumber(User_Guess)
})
input.onGesture(Gesture.Shake, function () {
    Hidden_Number(User_Guess)
})
let Guesses = 0
let User_Guess = 0
let Random_ = 0
Random_ = randint(0, 20)
