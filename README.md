# Brute Force Time Estimate

This project is a simple JavaScript-based tool designed to estimate the time it would take for a brute force attack to crack a given password.

It takes into account the complexity of the password and the number of attempts per second.

## Calculation

The calculation is based on the length and complexity of the password, as well as the number of attempts per second. The complexity is evaluated by checking for the presence of lowercase and uppercase letters, numbers, and non-alphanumeric characters. For each type of character present, the size of the character set is increased accordingly (26 for letters and 10 for numbers). The number of attempts per second is configurable by the user.

By default, the number of attempts is set to 10^9.

## How to Use

1. Clone this repository: `git clone https://github.com/yrimbaud/brute-force-time-estimate.git`
2. Open `index.html` in a web browser
3. Input a password in the designated field
4. Adjust the slider to set the number of attempts per second for the brute force attack
5. The tool will display the estimated time to crack the password.

## Limitations

The tool currently assumes that the attacker has no prior knowledge of the password and that they are using a simple brute force attack. It does not take into account more advanced cracking techniques such as dictionary attacks or rainbow table attacks.


## Donation

If you find this project beneficial and appreciate its contributions, you might consider offering your support. One of the ways you can do this is through a Bitcoin donation.

Here is the Bitcoin address:
`bc1q3pc0ftvdew3e87k07d00k8tqj7ll924hgy69n6`

Every donation, big or small, is deeply appreciated and will be used to further improve and maintain this project.

## Author

This project is maintained by Yann Rimbaud ([yrimbaud](https://github.com/yrimbaud)).
