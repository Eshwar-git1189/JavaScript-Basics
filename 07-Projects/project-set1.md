# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-3fsot1uo?file=2-BMICalculator%2Findex.html)

# project 1 - Color Changer

## Solution code

```javascript
const boxes = document.querySelectorAll(".button");
const body = document.querySelector("body");
body.addEventListener("click", function (e) {
  if (!e.target.classList.contains("button")) {
    body.style.backgroundColor = "black";
  }
});
// console.log(box)
boxes.forEach(function (button) {
  //console.log(boxes)
  button.addEventListener("click", function (e) {
    //console.log(e)
    //console.log(e.target)
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;

      case "white":
        body.style.backgroundColor = e.target.id;
        break;

      case "blue":
        body.style.backgroundColor = e.target.id;
        break;

      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
```

# project 2 - BMI Calculator

## Solution code

```javascript
const form = document.querySelector("form");
// const height = parseInt(document.querySelector('#height').value)
//this usecase will give you empty

//To avoid default action of form which submits to server by GET or POST operation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const condition = document.querySelector("#condition");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    var bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
  if (bmi < 18.6) {
    condition.innerHTML = `<h2>Underweight</h2>`;
    condition.style.color = "red";
  } else if (bmi > 24.9) {
    condition.innerHTML = `<h2>Overweight</h2>`;
    condition.style.color = "red";
  } else {
    condition.innerHTML = `<h2>Normal Range</h2>`;
    condition.style.color = "green";
  }
});
```

# project 3 - Digital Clock

## Solution code

```javascript
// const clock = document.querySelector('#clock')
const clock = document.getElementById("clock");
let date = new Date();
console.log(date.toLocaleTimeString());

//To show a running time we can use a event in js - setInterval()
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

# project 4 - Guess the number

## Solution code

```javascript
let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainings = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 10;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number");
  } else {
    prevGuess.push(guess);

    if (numGuess === 0) {
      displayGuess(guess);
      displayMessage(`Game over!!,Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //
  if (guess === random) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is too low `);
  } else if (guess > random) {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  //
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess--;
  remainings.innerHTML = `${numGuess}`;
}
function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    startOver.removeChild(p);
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 10;
    guessSlot.innerHTML = ``;
    remainings.innerHTML = `${numGuess}`;
    userInput.removeAttribute("disabled");
    displayMessage(`New Game again`);
    playGame = true;
  });
}
function endGame() {
  //
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
```

# project 5 - Unlimited Colors

## Solution code

```javascript
const newColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(newColor());
let intervalsetter;
const startInterval = function () {
  if (!intervalsetter) {
    intervalsetter = setInterval(backgroundChanger, 1000);
  }
};
const stopInterval = function () {
  clearInterval(intervalsetter);
  intervalsetter = null;
  document.body.style.backgroundColor = "#0f0f0f";
};
const backgroundChanger = function () {
  document.body.style.backgroundColor = newColor();
};

document.querySelector("#start").addEventListener("click", startInterval);
document.querySelector("#stop").addEventListener("click", stopInterval);
```

# project 6 - keyboard

## Solution code

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
    `;
});
```
