var triesPerSecondSlider = document.getElementById("triesPerSecond");
var outputValue = document.getElementById("outputValue");
var passwordInput = document.getElementById("password");
var resultOutput = document.getElementById("result");

triesPerSecondSlider.oninput = function() {
    outputValue.value = this.value;
}

function calculateTime() {
    var password = passwordInput.value;
    if(password.length < 4) {
        resultOutput.innerHTML = "Error: Password must be at least 4 characters long.";
        return;
    }

    var charsetSize = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]
        .reduce((sum, regex) => sum + (regex.test(password) ? (regex === /[0-9]/ ? 10 : (regex === /[^a-zA-Z0-9]/ ? 32 : 26)) : 0), 0);
    var triesPerSecond = Math.pow(10, triesPerSecondSlider.value);
    var combinations = Math.pow(charsetSize, password.length);
    var times = ["years", "months", "days", "hours", "minutes", "seconds"];
    var durations = [12, 30, 24, 60, 60];
    var time = combinations / triesPerSecond;

    for(var i = 0; i < durations.length; i++) {
        time /= durations[i];
        if(Math.round(time) > 0) break;
    }

    resultOutput.innerHTML = time <= 0 ? "The password will be found instantly." :
        `Given the parameters (${charsetSize} character set, 10^${triesPerSecondSlider.value} tries per second), it would take approximately ` +
        `${Math.round(time)} ${times[i]} to crack your password using brute force.`;
}
