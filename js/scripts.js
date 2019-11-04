$(document).ready(function () {
    $("#feature").click(function () {
        $(".feature-hidden").toggle("slow");
        $(".feature-showing").toggle("fast");
    });
});
$(document).ready(function () {
    $("#icon").click(function () {
        $(".feature2-hidden").toggle("slow");
        $(".feature2-showing").toggle("fast");
    });
});

$(document).ready(function () {
    $("#product").click(function () {
        $(".feature3-hidden").toggle("slow");
        $(".feature3-showing").toggle("fast");
    });
});

document.querySelector('#button').addEventListener('click', function () {
    document.querySelector('#feedback').style.display = 'flex';
})
document.querySelector(".close").addEventListener('click', function () {
    document.querySelector("#feedback").style.display = 'none';
})