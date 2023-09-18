const graphDiv = document.getElementById("graph");

fetch("http://localhost:3000")
    .then(async res => {
        const data = await res.json();
        Plotly.newPlot(graphDiv, [data]);
    });
