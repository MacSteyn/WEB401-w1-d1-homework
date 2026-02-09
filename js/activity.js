// User interaction with table cells
$(document).ready(function () {

    // loop through all table cells
    $("table td").each(function () {
        let content = $(this).text().trim();
        let colIndex = $(this).index();

        // skip first column (activity names)
        if (colIndex === 0) return;

        // skip "Not Available"
        if (content === "Not Available") return;

        // make selectable
        $(this).addClass("selectable-cell");

        // click behavior
        $(this).on("click", function () {
            let cliffName = $("th").eq(colIndex).text();

            $(this).toggleClass("selected");

            if ($(this).hasClass("selected")) {

                // show selected display box
                $("#displaySelected").css({
                    "visibility": "visible",
                    "margin-top": "2em"
                });

                // add selected activity text
                $("#result").append("<p>" + content + " at " + cliffName + "</p>");

            } else {

                // remove unselected activity
                $("#result p:contains('" + content + "')").remove();

                // hide box if no selections remain
                if ($("#result p").length === 0) {
                    $("#displaySelected").css({
                        "visibility": "hidden",
                        "margin-top": "0"
                    });
                }
            }
        });
    });

    // ⭐ NEW PART — index() + eq() logic for assignment requirement
    $("table").on("click", "td", function () {

        let colIndex = $(this).index();               // which column
        let rowIndex = $(this).closest("tr").index(); // which row

        let cliffName = $("th").eq(colIndex).text();  // column header
        let activityName = $("tr").eq(rowIndex).find("td").eq(0).text(); // first 
        let selectedActivity = $(this).text();        // clicked cell text

        // append to selected list
        $("#selected").append(
            "<p> aaa" + selectedActivity + " at " + cliffName + "</p>"
        );
    });

});
