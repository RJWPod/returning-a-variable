function Hidden_Number (num: number) {
    let Guesses = ""
    if (0 == Random_) {
        return "NICE"
    } else if (num < Random_) {
        return "HIGHER"
    } else if (num > Random_) {
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
    basic.showNumber(Hidden_Number(User_Guess))
})
input.onButtonPressed(Button.B, function () {
    User_Guess += 1
    basic.showNumber(User_Guess)
})
input.onGesture(Gesture.Shake, function () {
    Hidden_Number(User_Guess)
})
let User_Guess = 0
let Random_ = 0
Random_ = randint(0, 20)
