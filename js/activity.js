$(document).ready(function () {

    // select only valid activity cells
    $("table td").each(function () {
        let cellText = $(this).text().trim();
        let colIndex = $(this).index();

        // skip first column (Hiking, Kayak, etc.)
        if (colIndex === 0) return;

        // skip "Not Available"
        if (cellText === "Not Available") return;

        // make selectable
        $(this).css("cursor", "pointer");

        // click behavior
        $(this).on("click", function () {
            $(this).toggleClass("selected");
        });
    });

});
