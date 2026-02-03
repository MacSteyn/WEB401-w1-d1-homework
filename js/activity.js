$(document).ready(function () {
    // Apply pointer cursor to selectable cells
    $("tbody td").each(function () {
        const cellText = $(this).text().trim();
        const isNotAvailable = cellText.toLowerCase() === "not available";
        const isActivityLabel = $(this).index() === 0;

        if (!isNotAvailable && !isActivityLabel) {
            $(this).css("cursor", "pointer");

            // Toggle selection on click
            $(this).on("click", function () {
                $(this).toggleClass("selected");
            });
        }
    });
});