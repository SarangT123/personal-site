window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

let sticky = navbar.offsetHeight;
navbar.classList.add("scale-up-ver-top")

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.classList.add("scale-up-ver-top")
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("scale-up-ver-top")

    }
}


var _CONTENT = [
    "Python",
    "Javascript",
    "C++",
    "Go",
    "GDScript",
    "C#",
    // "Java",
    // "C",
    // "PHP",
    // "Swift",
    // "Kotlin",
    // "Dart",
    // "Rust",
    // "Objective-C",
    // "Ruby",
    // "R",
    // "Scala",
    // "Haskell",
    // "Erlang",
    // "Lua",
    // "Visual Basic",
    // "Fortran",
    // "Matlab",
    // "Perl",
    // "Clojure",
    // "Elixir",
    // "Julia",
    // "D",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
    // Get substring with 1 characater added
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
        // Hide the cursor
        _CURSOR.style.display = 'none';

        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    // Get substring with 1 characater deleted
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
        clearInterval(_INTERVAL_VAL);

        // If current sentence was last then display the first one, else move to the next
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 400);
    }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 300);