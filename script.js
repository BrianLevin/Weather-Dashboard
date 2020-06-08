$(document).ready(function () {
    $("#search-button").on("click", function () {
        var searchValue = $("#search-value").val();
        // clear input box
        $("#search-value").val("");

        searchWeather(searchValue);
    });
    $(".history").on("click", "li", function () {
        searchWeather($(this).text());
    });

    function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
    }
});