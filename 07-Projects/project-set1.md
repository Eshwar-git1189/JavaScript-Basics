# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-3fsot1uo?file=2-BMICalculator%2Findex.html)

# Solution code

## project 1
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