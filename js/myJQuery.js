$(document).ready(function () {
    $("#myButtons").click(function () {
        let input = $(this).text()
        createMeElement(input)
    });
});

const createMeElement = (input) => {
    let text = $("<div></div>").text("You clicked : " + input)
    text
        .addClass("text-center")
        .addClass("border")
        .addClass("border-danger")
        .addClass("rounded")
        .addClass("p-3")
        .addClass("m-2")
    $("#display").children().append(text)
}
