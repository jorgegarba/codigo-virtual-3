var ctx = document.getElementById("grafico").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Perú", "Brasil", "Colombia", "Chile"],
    datasets: [
      {
        label: "índice 1",
        data: [25000, 30000, 15000, 45000],
        backgroundColor: [
          "rgba(255, 255, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Indice 2",
        fontColor: "#00ff00",
        data: [80000, 50500, 90000, 65000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontColor: "#0000ff",
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
