function increaseScore (element)
    {
        element.innerText++;
    }
function subscribe (className)
    {
        document.querySelector("."+className).remove();
    }
function endGame ()
    {
        alert("The Ninja have won!");
    }
setTimeout(endGame, 13000);