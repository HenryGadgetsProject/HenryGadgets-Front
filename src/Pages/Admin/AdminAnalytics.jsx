import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Pie, Bar } from "react-chartjs-2";
import helper from "./helper";
import TablaInformacion from "./TablaInformacion";

const AdminAnalytics = () => {
  const orders = useSelector((state) => state.order.orders);
  console.log(orders);
  const [months, setMonths] = useState(helper());
  const [ventas, setVentas] = useState(0);
  const [nulled, setNulled] = useState(0);
  const [anuales, setAnuales] = useState([]);

  async function dataPerMonth(filterInput, orders) {
    let fechaHoy = new Date();
    let month = fechaHoy.getMonth();
    let totalCadaMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //Uno por cada mes.... sorry #NotSorry
    let chosenMonth;
    switch (filterInput) {
      case "Enero":
        chosenMonth = "01";
        break;
      case "Febrero":
        chosenMonth = "02";
        break;
      case "Marzo":
        chosenMonth = "03";
        break;
      case "Abril":
        chosenMonth = "04";
        break;
      case "Mayo":
        chosenMonth = "05";
        break;
      case "Junio":
        chosenMonth = "06";
        break;
      case "Julio":
        chosenMonth = "07";
        break;
      case "Agosto":
        chosenMonth = "08";
        break;
      case "Septiembre":
        chosenMonth = "09";
        break;
      case "Octubre":
        chosenMonth = "10";
        break;
      case "Noviembre":
        chosenMonth = "11";
        break;
      case "Diciembre":
        chosenMonth = "12";
        break;
      default:
    }

    let ordersFilteredByMonth = [];
    let months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    for (var i = 0; i < orders.length; i++) {
      if (orders[i].created_at.substring(7, 5) === chosenMonth) {
        ordersFilteredByMonth.push(orders[i]);
      }
      switch (orders[i].created_at.substring(7, 5)) {
        case "01":
          totalCadaMes[0] += orders[i].total_price;
          break;
        case "02":
          totalCadaMes[1] += orders[i].total_price;
          break;
        case "03":
          totalCadaMes[2] += orders[i].total_price;
          break;
        case "04":
          totalCadaMes[3] += orders[i].total_price;
          break;
        case "05":
          totalCadaMes[4] += orders[i].total_price;
          break;
        case "06":
          totalCadaMes[5] += orders[i].total_price;
          break;
        case "07":
          totalCadaMes[6] += orders[i].total_price;
          break;
        case "08":
          totalCadaMes[7] += orders[i].total_price;
          break;
        case "09":
          totalCadaMes[8] += orders[i].total_price;
          break;
        case "10":
          totalCadaMes[9] += orders[i].total_price;
          break;
        case "11":
          totalCadaMes[10] += orders[i].total_price;
          break;
        case "12":
          totalCadaMes[11] += orders[i].total_price;
          break;
        default:
      }
    }

    let monthlySells = 0;
    let monthlyCancels = 0;
    for (i = 0; i < ordersFilteredByMonth.length; i++) {
      if (ordersFilteredByMonth[i].state === "completed") {
        monthlySells++;
      }
      if (ordersFilteredByMonth[i].state === "cancelled") {
        monthlyCancels++;
      }
    }

    let recorte = parseInt(month) + 1;
    totalCadaMes.length = recorte;
    months.length = recorte;

    setMonths(months);
    setAnuales(totalCadaMes);
    setVentas(monthlySells);
    setNulled(monthlyCancels);
  }

  return (
    <>
      <div className="tituloLeo2">Estadisticas de las ventas</div>
      <div className="botonsAnalytics">
        {months.map((x) => (
          <button
            key={x}
            className="btn btn-sm"
            onClick={() => dataPerMonth(x, orders)}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="graficos">
        <div className="tarta">
          <Pie
            data={{
              labels: ["Cancelaciones", "Ventas"],
              datasets: [
                {
                  data: [nulled, ventas],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            height={110}
            width={180}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: false,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>
        <div className="barritas">
          <Bar
            data={{
              labels: months,
              datasets: [
                {
                  label: "$ ARS",
                  data: anuales,
                  fill: false,
                  borderColor: "rgb(82, 119, 222)",
                  backgroundColor: ["rgba(2,17,82,.7)"],
                  borderWidth: 1,
                },
              ],
            }}
            height={150}
            width={350}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: false,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>
      </div>
      <TablaInformacion />
    </>
  );
};

export default AdminAnalytics;
