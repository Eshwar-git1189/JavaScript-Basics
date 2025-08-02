# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-3fsot1uo?file=2-BMICalculator%2Findex.html)

# Solution code

## project 1 - Color Changer
```javascript
const boxes = document.querySelectorAll(".button")
const body = document.querySelector("body")
body.addEventListener('click', function(e){
  if(!e.target.classList.contains('button')){
    body.style.backgroundColor = "black";
  }
})
// console.log(box)
boxes.forEach(function (button){
  //console.log(boxes)
  button.addEventListener('click', function(e){
    //console.log(e)
    //console.log(e.target)
    switch(e.target.id){
      case "grey":
        body.style.backgroundColor = e.target.id
        break;
      
      case "white":
        body.style.backgroundColor = e.target.id
        break;
      
      case "blue":
        body.style.backgroundColor = e.target.id
        break;
      
      case "yellow":
        body.style.backgroundColor = e.target.id
        break;
      
    }
  })
})

```


## project 2 - BMI Calculator
# Solution code
```javascript
const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
//this usecase will give you empty

//To avoid default action of form which submits to server by GET or POST operation
form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const condition = document.querySelector('#condition');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    var bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`;
  }
  if(bmi < 18.6){
    condition.innerHTML = `<h2>Underweight</h2>`;
    condition.style.color = 'red';
  }else if(bmi > 24.9){
    condition.innerHTML = `<h2>Overweight</h2>`;
    condition.style.color = 'red';
  }else{
    condition.innerHTML = `<h2>Normal Range</h2>`;
    condition.style.color = 'green'
  }

});

```
## project 3 - Digital Clock
# Solution code
```javascript
// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')
let date = new Date()
console.log(date.toLocaleTimeString())

//To show a running time we can use a event in js - setInterval()
setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```
