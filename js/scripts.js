$(document).ready(function () {
    $("#what").click(function () {
        $(".feature").toggle(slow)
    });
});

function xx() {
    var name = (document).getElementById("name").value;
    var email = (document).getElementById("email").innerHTML;
    var message = (document).getElementById("message").innerHTML;
alert name
alert email
alert message

    if (name == true) {
        alert(submitted);
        return false;
    } else if (email === '@') {
        alert("Please enter a valid email");
    } else if (message.entered) {
        alert("Thank you for your message");
    } else {
        var mail = ("name" + "email" + "message")
        alert("Name" + " we have recieved your message." + " Thank you for reaching us to us.")
    };
}