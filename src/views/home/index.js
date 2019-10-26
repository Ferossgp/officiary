import React from "react";
import Plot from "react-plotly.js";
import ListItem from "../../components/ListItem";

import chart1 from "../../graphs/chart1.json";
import chart2 from "../../graphs/chart2.json";
import chart3 from "../../graphs/chart3.json";
import chart4 from "../../graphs/chart4.json";

function Chart() {
  const data = {
    x: chart1.x,
    y: chart1.y,
    type: "scatter",
    mode: "lines",
    fill: "tozeroy"
  };
  const rugplot = {
    x: chart1.price_estimations,
    y: chart1.price_estimations.map(() => -0.00000004),
    mode: "markers",
    type: "scatter",
    marker: {
      color: "rgb(164, 194, 244)",
      size: 4,
      line: {
        color: "white",
        width: 0.5
      }
    }
  };
  return (
    <div>
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
          width: 1280,
          height: 340,
          showlegend: false,
          title: "A Fancy Plot"
        }}
      />
    </div>
  );
}

function Chart2() {
  const data2 = {
    x: chart2.x,
    y: chart2.y,
    type: "scatter",
    mode: "lines",
    fill: "tozeroy"
  };
  const rugplot2 = {
    x: chart2.price_estimations,
    y: chart2.price_estimations.map(() => -0.00000004),
    mode: "markers",
    type: "scatter",
    marker: {
      color: "rgb(164, 194, 244)",
      size: 4,
      line: {
        color: "white",
        width: 0.5
      }
    }
  };
  return (
    <div>
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
          height: 340,
          showlegend: false,
          title: "A Fancy Plot"
        }}
      />
    </div>
  );
}

function Chart3() {
  const data = {
    x: chart3.x,
    y: chart3.y,
    type: "scatter",
    mode: "lines",
    fill: "tozeroy"
  };
  const rugplot = {
    x: chart3.price_estimations,
    y: chart3.price_estimations.map(() => -0.00000004),
    mode: "markers",
    type: "scatter",
    marker: {
      color: "rgb(164, 194, 244)",
      size: 4,
      line: {
        color: "white",
        width: 0.5
      }
    }
  };
  return (
    <div>
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
          height: 340,
          showlegend: false,
          title: "A Fancy Plot"
        }}
      />
    </div>
  );
}

function Chart4(){
  const data = {
    x: chart4.x,
    y: chart4.y,
    type: "bar",
    marker:{
      color: ['#CC1111 ', '#FF9933', '#4488CC', '#003399']
    },
  };
  return (
    <div>
      <Plot
        data={[data]}
        layout={{
          xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: true,
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
          title: ""
        }}
      />
    </div>
  )
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
      </div>
    </div>
  );
}

export default HomeView;
