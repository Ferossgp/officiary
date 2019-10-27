import React from "react";
import Plot from "react-plotly.js";
import ListItem from "../../components/ListItem";

import chart1 from "../../graphs/chart1.json";
import chart2 from "../../graphs/chart2.json";
import chart3 from "../../graphs/chart3.json";
import chart4 from "../../graphs/chart4.json";
import chart5 from "../../graphs/chart5.json";

function Chart() {
  const data = {
    x: chart1.x,
    y: chart1.y,
    hoverinfo: "skip",
    type: "scatter",
    mode: "lines",
    fill: "tozeroy",
    line: {
      color: "#8b4a93"
    }
  };
  const rugplot = {
    x: chart1.price_estimations,
    y: chart1.price_estimations.map(() => -0.00000004),
    hoverinfo: "skip",
    mode: "markers",
    type: "scatter",
    marker: {
      color: "#8b4a93",
      size: 4,
      line: {
        color: "white",
        width: 0.5
      }
    }
  };
  return (
    <div className="my-12">
      <Plot
        data={[data, rugplot]}
        layout={{
          xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: true,
            range: [0, 26000000]
          },
          yaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: false
          },
          annotations: [
            {
              x: 25000000,
              y: 0,
              xref: "x",
              yref: "y",
              text: "",
              showarrow: true,
              arrowhead: 0,
              ax: 0,
              ay: -40
            },
            {
              x: 9600000,
              y: 0,
              xref: "x",
              yref: "y",
              text: "",
              showarrow: true,
              arrowhead: 0,
              ax: 0,
              ay: -40
            },
            {
              x: 20000000,
              y: 0,
              xref: "x",
              yref: "y",
              text: "",
              showarrow: true,
              arrowhead: 0,
              ax: 0,
              ay: -40
            }
          ],
          images: [
            {
              source: "/maybach.png",
              xref: "x1",
              yref: "paper",
              size: "stretch",
              layer: "above",
              x: (1 / 26000000) * 25900000,
              y: 0.35,
              sizex: 0.2,
              sizey: 0.2,
              opacity: 1,
              xanchor: "right",
              yanchor: "middle"
            },
            {
              source: "/mercedes.jpeg",
              xref: "x1",
              yref: "paper",
              size: "stretch",
              layer: "above",
              x: (1 / 26) * 10.48,
              y: 0.35,
              sizex: 0.2,
              sizey: 0.2,
              opacity: 1,
              xanchor: "right",
              yanchor: "middle"
            },

            {
              source: "/x5.jpg",
              xref: "x1",
              yref: "paper",
              size: "stretch",
              layer: "above",
              x: (1 / 26) * 21,
              y: 0.35,
              sizex: 0.1,
              sizey: 0.1,
              opacity: 1,
              xanchor: "right",
              yanchor: "middle"
            },
            {
              source: "/rx350.png",
              xref: "x1",
              yref: "paper",
              size: "stretch",
              layer: "above",
              x: (1 / 26) * 21,
              y: 0.55,
              sizex: 0.3,
              sizey: 0.1,
              opacity: 1,
              xanchor: "right",
              yanchor: "middle"
            }
          ],
          width: 1280,
          height: 340,
          showlegend: false,
          margin: {
            l: 20,
            t: 0,
            b: 20,
          }
        }}
      />
    </div>
  );
}

function Chart2() {
  const data2 = {
    x: chart2.x,
    y: chart2.y,
    hoverinfo: "skip",
    type: "scatter",
    mode: "lines",
    fill: "tozeroy",
    line: {
      color: "#8b4a93"
    }
  };
  const rugplot2 = {
    x: chart2.price_estimations,
    y: chart2.price_estimations.map(() => -0.00000004),
    hoverinfo: "skip",
    mode: "markers",
    type: "scatter",
    marker: {
      color: "#8b4a93",
      size: 4,
      line: {
        color: "white",
        width: 0.5
      }
    }
  };
  return (
    <div className="mx-auto">
      <Plot
        data={[data2, rugplot2]}
        layout={{
          xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: true,
            range: [5000000, 26000000]
          },
          yaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: false
          },
          width: 720,
          height: 400,
          showlegend: false,
          margin: {
            l: 20,
            t: 0,
            b: 20,
          }
        }}
      />
    </div>
  );
}

function Chart3() {
  const data = {
    x: chart3.x,
    y: chart3.y,
    hoverinfo: "skip",
    type: "scatter",
    mode: "lines",
    fill: "tozeroy",
    line: {
      color: "#8b4a93"
    }
  };
  const rugplot = {
    x: chart3.price_estimations,
    y: chart3.price_estimations.map(() => -0.00000004),
    hoverinfo: "skip",
    mode: "markers",
    type: "scatter",
    marker: {
      color: "#8b4a93",
      size: 4,
      line: {
        color: "white",
        width: 0.5
      }
    }
  };
  return (
    <div className="my-12">
      <Plot
        data={[data, rugplot]}
        layout={{
          xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: true,
            range: [0, 5000000]
          },
          yaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: false
          },
          width: 1280,
          height: 400,
          showlegend: false,
          margin: {
            l: 20,
            t: 0,
            b: 20,
          }
        }}
      />
    </div>
  );
}

function Chart4() {
  const data = {
    x: chart4.x,
    y: chart4.y,
    hoverinfo: "skip",
    type: "bar",
    marker: {
      color: ["#CC1111 ", "#FF9933", "#4488CC", "#003399"]
    }
  };
  return (
    <div className="my-12">
      <Plot
        data={[data]}
        layout={{
          xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: true
          },
          yaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: false
          },
          width: 1280,
          height: 340,
          showlegend: false,
          margin: {
            l: 20,
            t: 0,
            b: 20,
          }
        }}
      />
    </div>
  );
}

function Chart5() {
  const data = {
    name: "ВАЗ",
    x: chart5.x1,
    y: chart5.y1,
    hoverinfo: "skip",
    type: "bar",
    marker: {
      color: chart5.colors1
    }
  };
  const full = {
    name: "Другие Марки",
    x: chart5.x2,
    y: chart5.y2,
    type: "bar",
    marker: {
      color: chart5.colors2
    }
  };
  return (
    <div className="my-12">
      <Plot
        data={[data, full]}
        layout={{
          xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: true
          },
          yaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: false
          },
          width: 1280,
          height: 400,
          showlegend: true,
          barmode: "stack",
          barnorm: "percent",
          margin: {
            l: 20,
            t: 20,
            b: 20,
          }
        }}
      />
    </div>
  );
}

function Rating({ data }) {
  return (
    <div className="w-1/3">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      {data &&
        data.entries &&
        data.entries.map(item => {
          return (
            <ListItem name={item.name} id={item.id} value={item.rating_value} />
          );
        })}
    </div>
  );
}

function HomeView() {
  return (
    <div className="bg-white shadow-l overflow-hidden">
      <div className="w-full container mx-auto flex flex-col flex-wrap mt-0 pt-6 pb-4 py-1">
        <Chart />
        <Chart2 />
        <Chart3 />
        <Chart4 />
        <Chart5 />
      </div>
    </div>
  );
}

export default HomeView;
