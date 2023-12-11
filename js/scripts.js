console.log("Hello from scripts.js!");

document.getElementById("buttonTwo").onclick = function() {
    document.getElementById("buttonOne").style.visibility = "visible";
}
document.getElementById("buttonTwo").onclick = function() {
    document.getElementById("buttonThree").style.visibility = "visible";
}

document.getElementById("buttonTwo").onclick = function() {
    document.getElementById("picture").style.visibility = "visible";
}

$('.bitoon').on("click", function() {
    $('#statement').html('You have reached a fork in the path! Which way do you chose?')
    $('#picture').html('<img src="images/imageOne.png">')
    $('#buttonOne').html('Dark Path')
    $('#buttonTwo').html('Light Path')
    $('#buttonThree').html('Rocky Path')
});

