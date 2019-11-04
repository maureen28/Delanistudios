$(document).ready(function () {
    $("p").click(function () {
        $(".feature-hidden").toggle("slow");
        $(".feature-showing").toggle("fast");
    });
});
