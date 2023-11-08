window.onload = () => {
    google.charts.load("current", {packages:['corechart']});

    google.charts.setOnLoadCallback(drawChartBar);
    google.charts.setOnLoadCallback(drawChartPie);

    function drawChartBar() {
        var data = google.visualization.arrayToDataTable([
        ["Element", "Escaños", { role: "style" } ],
        ["PP", 137, "blue"],
        ["PSOE", 121, "red"],
        ["Vox", 33, "green"],
        ["ERC", 7, "yellow"],
        ["Junts", 7, "color: #038cfc"],
        ["BNG+UPN+CC", 3, "color: #acb1b5"],
        ["Sumar", 31, "color: pink"],
        ["EH Bildu", 6, "color: #80e8a8"],
        ["EAJ-PNV", 5, "color: #0d5729"]
        ]);

        
        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                        { calc: "stringify",
                            sourceColumn: 1,
                            type: "string",
                            role: "annotation"},
                        2]);

        view.setRows(data.getSortedRows({column: 1, desc: true}));


        var options = {
        title: "Composicion del Congreso de los diputados 2023",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }

    function drawChartPie() {
        var data = google.visualization.arrayToDataTable([
            ["Element", "Escaños", { role: "style" } ],
            ["PP", 137, "blue"],
            ["PSOE", 121, "red"],
            ["Vox", 33, "green"],
            ["ERC", 7, "yellow"],
            ["Junts", 7, "color: #038cfc"],
            ["BNG+UPN+CC", 3, "color: #acb1b5"],
            ["Sumar", 31, "color: pink"],
            ["EH Bildu", 6, "color: #80e8a8"],
            ["EAJ-PNV", 5, "color: #0d5729"]
            ]);

        var options = {
            title: "Composicion del Congreso de los diputados 2023",
          pieHole: 0.4,
          is3D: true,
          colors: ['blue','red', 'green', 'yellow', '#038cfc', '#acb1b5', 'pink', '#80e8a8', '#0d5729']
        };

        data.sort([{column: 1, desc: true}]);

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
}