import React, { useEffect, useState } from "react";
import "./App.css";
import "./charts.css";
import Spinner from "react-bootstrap/Spinner";
import {
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  Area,
  AreaChart,
  ComposedChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Charts(props) {
  const [loading, setLoading] = useState(true);

  const [numDays, setNumdays] = useState(30);

  const [graphType, setGraphType] = useState("Line");
  const [test, setTest] = useState([]);


  var lastDate;

  useEffect(() => {
    fetch(`https://disease.sh/v2/historical/np?lastdays=${numDays}`)
      .then((res) => res.json())
      .then((data) => {
        setTest(data);
        setLoading(false);

      });

    // eslint-disable-next-line
  }, [numDays]);

  function testing(needed) {
    var casesArray = [];

    var first = "true";


    console.log(test)
    var historyData = { ...test.timeline };


    var dates = Object.keys(historyData.cases);
    var cases = Object.values(historyData.cases);
    var deaths = Object.values(historyData.deaths);
    var recovered = Object.values(historyData.recovered);

    for (var i = 0; i < dates.length; i++) {
      if (casesArray.length < cases.length) {
        casesArray.push({});

      }
    }

    for (var i = 0; i < dates.length; i++) {
      if (first) {
        var n = dates[i].lastIndexOf("/");
        casesArray[i]["date"] = dates[i].substring(0, n);
        lastDate = dates[i];
      }

      casesArray[i]["confirmed"] = cases[i];
      casesArray[i]["deaths"] = deaths[i];
      casesArray[i]["recovered"] = recovered[i];
    }
    first = false;


    console.log(casesArray)
    return casesArray;

  }

  function showFoot() {
    let fixed = (
      <div>
              <div className="graphMessage">Graph last updated on : {lastDate}</div>

              <div className="graphMessage">Full information can be obtained from <a href = "https://coronatrackersankraman.netlify.app/">here</a></div>

      </div>
    );

    return fixed;
  }


  function returnLines(str) {
    var temp;
    function what() {
      if (graphType === "Line") {
        return Line;
      }

      if (graphType === "Bar") {
        return Bar;
      }

      if (graphType === "Area") {
        return Area;
      }

      if (graphType === "AreaLineComposed") {
        return;
      }
    }

    var TestGraph = what();
    console.log("here");
    temp = (
      <TestGraph
        dataKey={str}
        stroke={stringToColour(str)}
        fill={stringToColour(str)}
        dot={false}
      />

    );


    return temp;
  }

  var stringToColour = function (str) {
    if (str === "confirmed") {
      return "blue"
    }
    if (str === "deaths") {
      return "red"
    }
    if (str === "recovered") {
      return "green"
    }

  };

  function renderLineChart() {
    var width;
    function what() {
      if (graphType === "Line") {
        return LineChart;
      }

      if (graphType === "Bar") {
        return BarChart;
      }
      if (graphType === "Area") {
        return AreaChart;
      }
      if (graphType === "Pie") {
        return PieChart;
      }
      if (graphType === "AreaLineComposed") {
        return ComposedChart;
      }
    }

    var TestGraph = what();

    var current = testing("confirmed");


   
      return (
        <div className="graphs">


          <ResponsiveContainer width={width} height={400}>
            <TestGraph data={current}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />

              {returnLines("confirmed")}
              {returnLines("deaths")}
              {returnLines("recovered")}
            </TestGraph>
          </ResponsiveContainer>
          <div className = "graphMessage"><h4>Nepal</h4></div>

          {showFoot()}
        </div>

      );
    
  }


  function changeDays(event) {
    setNumdays(event.target.value);
  }



  function isFrom() {
    return (
      <>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="number"
            min="0"
            max="200"
            placeholder={"30 days"}
            style={{ width: 72 }}
            onChange={changeDays}
          /> {displayGraphMenu()}
        </form>


      </>
    );
  }

  function displayGraphMenu() {
    function handleChange(e) {
      setGraphType(e.target.value);
    }

    var dropdown0 = (
      <>
        <select onChange={handleChange}>
          <option value={"Line"} checked > Graph type</option>
          <option value={"Line"}> Line</option>
          <option value={"Bar"}> Bar</option>
          <option value={"Area"}> Area</option>

          {/* <option value={"Composed"}> Composed</option> */}
        </select>
        <br />

      </>
    );

    return <>{dropdown0} </>;
  }




  return loading ? (
    <div className="spinners">
      {" "}
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
  ) : (
      <div className="chartsNew">
        {isFrom()}

        {renderLineChart()}
      </div>
    );
}

export default Charts;