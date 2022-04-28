function Hidden_Number (num: number) {
    if (num == Random_) {
        basic.showString("NICE")
    } else if (num < Random_) {
        basic.showString("HIGHER")
        Guesses += 1
    } else if (num > Random_) {
        basic.showString("LOWER")
        Guesses += 1
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
    Hidden_Number(User_Guess)
})
input.onButtonPressed(Button.B, function () {
    User_Guess += 1
    basic.showNumber(User_Guess)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Hidden_Number(Guesses))
})
let User_Guess = 0
let Guesses = 0
let Random_ = 0
Random_ = randint(0, 20)
