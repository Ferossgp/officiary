import React, { useRef, useEffect } from "react";
import Plot from "react-plotly.js";
import ListItem from "../../components/ListItem";

import chart1 from "../../graphs/chart1.json";
import chart2 from "../../graphs/chart2.json";
import chart3 from "../../graphs/chart3.json";
import chart4 from "../../graphs/chart4.json";
import chart5 from "../../graphs/chart5.json";
import chart6 from "../../graphs/chart6.json";

function Chart() {
  const data = {
    x: chart1.x,
    y: chart1.y,
    hoverinfo: "skip",
    type: "scatter",
    mode: "lines",
    fill: "tozeroy",
    line: {
      color: "#341A04"
    }
  };
  const rugplot = {
    x: chart1.price_estimations,
    y: chart1.price_estimations.map(() => -0.00000004),
    hoverinfo: "skip",
    mode: "markers",
    type: "scatter",
    marker: {
      color: "#341A04",
      size: 4,
      line: {
        color: "white",
        width: 0.5
      }
    }
  };
  return (
    <div className="my-12 flex items-center flex-col">
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
              x: 960000,
              y: 0,
              xref: "x",
              yref: "y",
              text: "",
              showarrow: true,
              arrowhead: 0,
              ax: 0,
              ay: -250
            },
            {
              x: 2000000,
              y: 0,
              xref: "x",
              yref: "y",
              text: "",
              showarrow: true,
              arrowhead: 0,
              ax: 0,
              ay: -65
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
              source: "/mercedes.png",
              xref: "x1",
              yref: "paper",
              size: "stretch",
              layer: "above",
              x: (1 / 26) * 2.48,
              y: 0.9,
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
              x: (1 / 26) * 4.5,
              y: 0.45,
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
              x: (1 / 26) * 4.5,
              y: 0.65,
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
            b: 20
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
      color: "#341A04"
    }
  };
  const rugplot2 = {
    x: chart2.price_estimations,
    y: chart2.price_estimations.map(() => -0.00000004),
    hoverinfo: "skip",
    mode: "markers",
    type: "scatter",
    marker: {
      color: "#341A04",
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
          height: 400,
          showlegend: false,
          margin: {
            l: 20,
            t: 0,
            b: 20
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
      color: "#341A04"
    }
  };
  const rugplot = {
    x: chart3.price_estimations,
    y: chart3.price_estimations.map(() => -0.00000004),
    hoverinfo: "skip",
    mode: "markers",
    type: "scatter",
    marker: {
      color: "#341A04",
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
            b: 20
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
            b: 20
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
            b: 20
          }
        }}
      />
    </div>
  );
}

function Chart6() {
  const data = {
    x: chart6.x,
    y: chart6.y,
    text: chart6.text,
    type: "scatter",
    mode: "markers",
    marker: {
      size: chart6.size,
      color: chart6.color,
      colorbar: {
        title: "Доход родственников",
        titleside: "top",
        tickmode: "array",
        ticks: "outside"
      }
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
            showticklabels: true,
            title: "общая стоимость личного автопарка",
            x: 0.5
          },
          yaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: "",
            showticklabels: true,
            title: "общая стоимость автопарка родственника",
            y: 0.5
          },
          width: 1280,
          height: 400,
          showlegend: false,
          barmode: "stack",
          barnorm: "percent"
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

function MainText() {
  const textEl = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line
    var text = new Blotter.Text("Cars of Duma", {
      family: "Staatliches",
      size: 147,
      fill: "#fff",
      paddingLeft: 40,
      paddingRight: 40
    });

    // eslint-disable-next-line
    var material = new Blotter.RollingDistortMaterial();
    material.uniforms.uRotation.value = 170;
    material.uniforms.uSpeed.value = 0.02;
    material.uniforms.uSineDistortCycleCount.value = 0.025;
    material.uniforms.uSineDistortAmplitude.value = 0.1;
    material.uniforms.uNoiseDistortAmplitude.value = 0.01;
    material.uniforms.uNoiseDistortVolatility.value = 12;
    // eslint-disable-next-line
    var blotter = new Blotter(material, {
      texts: text
    });

    var elem = textEl.current;
    var scope = blotter.forText(text);

    scope.appendTo(elem);
  }, [textEl]);

  return (
    <div className="relative bg-gray-900">
      <div className="flex w-full py-64" style={{height: "100vh"}}>
        <div
          className="mx-auto flex items-center justify-center"
          ref={textEl}
        ></div>
      </div>
    </div>
  );
}

function HomeView() {
  return (
    <div className="bg-white shadow-l overflow-hidden">
      <MainText />
      <div className="w-full container mx-auto flex flex-col flex-wrap mt-0 pt-6 pb-4 py-1">
      
        <h2 className="text-2xl">Распределение стоимости автомобилей</h2>
        <Chart />
        Лидерами high-end сегмента являются Mercedes-Maybach S 560, ими владеют 12 депутатов. Эти же машины являются самыми дорогими задекларированными автомобилями.
        Наиболее типичной машиной (200 штук) депутата является Mercedes S500, средняя стоимость которого колеблется около миллиона. 

        <h2 className="text-xl mt-24">2% самых дорогих автомобиля</h2>
        <Chart2 />
        Любители автомобилей подороже предпочитают классику: Bentley Mulsanne, Maybach 57 и Rolls-Royce Phantom. Их стоимость начинается от 19 миллионов рублей.

        <h2 className="text-xl mt-24">Остальные 98%</h2>
        <Chart3 /> 
        В ценовой категории до 20 миллионов рублей преобладают Mercedes-Benz S500, Toyota Land Cruiser Prado и Toyota Rav 4. 
        Если вы хотите щегольнуть, то купите BMW X5 или Lexus RX350. 
        <div className="flex -mx-2 items-center">
          <div className="w-1/3 px-2 items-center flex flex-col">
            <img src="/mercedes-benz.png"/>
            <p>Mercedes-Benz S500</p>
          </div>
          <div className="w-1/3 px-2 items-center flex flex-col"><img src="/crusak.png"/><p>Toyota Land Cruiser Prado</p></div>
          <div className="w-1/3 px-2 items-center flex flex-col"><img src="/rav4.png"/><p>Toyota Rav 4</p></div>
        </div>
        
        <h2 className="text-2xl mt-24">Средняя стоимость автомобиля члена партии</h2>
        <Chart4 />
        Мы решили посмотреть, не отличаются ли требования членов различных партий к своим автомобилям. 
        Оказалось, желания разнопартийцев совпадают на отметке в 1 600 000 рублей. 
        
        <h2 className="text-2xl mt-24">Доля отечественных автомобилей от общего числа автомобилей партии</h2>
        <Chart5 />
        
        Лидером являются представители КПРФ.

        <h2 className="text-2xl mt-24">Отношение личных и совместных доходов к стоимости личного автопарка, и автопарка родственников</h2>
        <Chart6 />
        
      </div>
    </div>
  );
}

export default HomeView;
