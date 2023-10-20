function sortTable(column, dataType) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("studentTable");
    switching = true;
    dir = "asc";
    
    // Get the current sorting direction from the data attribute
    var currentDirection = table.querySelector("th:nth-child(" + (column + 1) + ")").getAttribute("data-sort-direction");

    if (currentDirection === "asc") {
        dir = "desc";
    }
    
    // Reset sorting direction for all columns
    var headers = table.getElementsByTagName("th");
    for (i = 0; i < headers.length; i++) {
        headers[i].setAttribute("data-sort-direction", "asc");
    }
    
    // Set the new sorting direction
    table.querySelector("th:nth-child(" + (column + 1) + ")").setAttribute("data-sort-direction", dir);

    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("tr");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[column];
            y = rows[i + 1].getElementsByTagName("td")[column];

            if (dataType === 'date') {
                x = new Date(parseDate(x.textContent));
                y = new Date(parseDate(y.textContent));
            } else if (dataType === 'text') {
                x = x.textContent.toLowerCase();
                y = y.textContent.toLowerCase();
            }

            if (dir === "asc") {
                if (x > y) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x < y) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        }
    }

    // Reset arrow rotation for all arrows
    var arrows = document.querySelectorAll(".sort");
    arrows.forEach(function(arrow) {
        arrow.style.transform = "";
    });

    // Rotate the current arrow based on sorting direction
    var arrow = table.querySelector("th:nth-child(" + (column + 1) + ") .sort");
    if (dir === "desc") {
        arrow.style.transform = "rotate(180deg)";
    }
}

function parseDate(dateString) {
    var parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}





//search
document.getElementById("searchInput").addEventListener("input", function() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        var found = false; // Flag to track if the row matches the search criteria
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            txtValue = td[j].textContent || td[j].innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                found = true; // The row contains a match
                break;
            }
        }
        if (found) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
});
