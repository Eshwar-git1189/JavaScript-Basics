// document.getElementById('owl').onclick = function(){
    //     alert('owll')
    // }

    //attachEvent()
    //jQuery - on
    document.getElementById("owl").addEventListener("click", function (e) {
      // alert("owllll");
      //console.log(e);
    });
    //PointerEvent
    //type, timestamp, defaultPrevented
    //target. toElement, srcElement,currentTarget,
    //clientX, clientY, screenX, screenY
    //altkey, ctrlkey, shiftkey, keyCode

    //eventPropogation
    // The third parameter in addEventListener:
    // false = listen during bubbling (most common).
    /*Clicked on owl
        one.html:130 Click inside the ul
        one.html:133 Click on owl
        one.html:130 Click inside the ul
        one.html:133 Click on owl
        one.html:130 Click inside the ul
        */

    // true = listen during capturing (less common).
    //Clicked on owl
    // one.html:127 Click on owl
    // one.html:124 Click inside the ul
    // one.html:127 Click on owl
    // one.html:124 Click inside the ul
    // one.html:127 Click on owl

    // If you omit this third argument, it defaults to false (bubbling).
    document.getElementById("images").addEventListener(
      "click",
      function (e) {
        //console.log("Click inside the ul");
      },
      false
    );
    document.getElementById("owl").addEventListener(
      "click",
      function (e) {
        //console.log("Click on owl");
        //e.stopPropagation(); //Event don't get bubbled and don't go to upper element.
      },
      false
    );

    document.getElementById("google").addEventListener(
      "click",
      function (e) {
        e.preventDefault(); // Doesn't redirect to google.Use preventDefault() when you want to override or disable the browser’s normal handling of an event.
        //e.stopPropagation();
        //console.log("google click");
      },
      false
    );

    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if(e.target.tagName === 'IMG'){
            console.log(e.target.id);
            let removeIt = e.target.parentNode;
            removeIt.remove();
            
        }
        //console.log(e.target.parentNode);
        //let removeIt=e.target.parentNode
        //removeIt.remove()
        //removeIt.parentNode.removeChild(removeIt);
    },false)