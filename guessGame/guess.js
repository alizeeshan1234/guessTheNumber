let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
console.log(randomNumber);

let count = 0; // Initialize count outside the event listener

document.querySelector('button').addEventListener('click', function () {
    let guess = document.querySelector('#guess').value;
    console.log(guess);

    if (guess == randomNumber) {
        document.querySelector('#display1').innerHTML = 'You Won';
        document.querySelector('#display2').innerHTML = '';
        document.querySelector('#randomNumber').innerHTML = randomNumber;
        count++; // Increment count if the guess is correct

        document.querySelector('div').style.backgroundColor = 'lightgreen'; // Apply green background color

        setTimeout(function () {
            document.querySelector('div').style.backgroundColor = ''; // Revert to original background color
        }, 500); // Set a timeout of 5 seconds (5000 milliseconds)
    }
    if (guess < randomNumber) {
        document.querySelector('#display1').innerHTML = 'Too Less!';
        document.querySelector('#display2').innerHTML = 'Try Again!';
        document.querySelector('div').style.backgroundColor = 'red'; // Apply green background color

        setTimeout(function () {
            document.querySelector('div').style.backgroundColor = ''; // Revert to original background color
        }, 500);

    }
    if (guess > randomNumber) {
        document.querySelector('#display1').innerHTML = 'Too High!';
        document.querySelector('#display2').innerHTML = 'Try Again!';
        document.querySelector('div').style.backgroundColor = 'red'; // Apply green background color

        setTimeout(function () {
            document.querySelector('div').style.backgroundColor = ''; // Revert to original background color
        }, 500);
    }

    document.querySelector('#guess').value = '';

    console.log(count); // Log the count value
});
