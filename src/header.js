import React, { useEffect, useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import CountUp from "react-countup"
import "./header.css"
import Table from 'react-bootstrap/Table'
import NumberFormat from "react-countup";
import Charts from "./Charts";




function Main(props) {
  let [latest, setLatest] = useState([]);
  let [nepal, setNepal] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(async () => {

    const urls = ["https://disease.sh/v2/all?yesterday=false",
      "https://disease.sh/v2/countries/nepal?yesterday=false&strict=true"];
    Promise.all([
      fetch(urls[0]).then(value => value.json()),
      fetch(urls[1]).then(value => value.json())
    ])
      .then((value) => {
        setLatest(value[0])
        setNepal(value[1])
        setLoading(false)
        console.log(value)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function show() {
    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();

    const header = (
      <div className="deckss">
        <span className="worldWide">World Wide</span>
        <CardDeck className="deck">
          <Card
            bg={"secondary"}
            text={"white"}
            className="text-center"
            style={{ marginLeft: 3 }}
          >
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text>
                <CountUp
                  end={latest.cases}
                  duration={2}
                  separator=","
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated: {lastUpdated}</small>
            </Card.Footer>
          </Card>
          <Card bg={"danger"} text={"white"} className="text-center" style={{}}>
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <Card.Text>
                {" "}
                <CountUp
                  end={latest.deaths}
                  duration={2}
                  separator=","
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated: {lastUpdated}</small>
            </Card.Footer>
          </Card>
          <Card
            bg={"success"}
            text={"white"}
            className="text-center"
            style={{}}
          >
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
                {" "}
                <CountUp
                  end={latest.recovered}
                  duration={2}
                  separator=","
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated: {lastUpdated}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );

    return header;
  }

  function donno() {
    const nepalFlag = nepal.countryInfo.flag;
    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();
    const toReturn =
      <div className="all">
        <div className="title">
          Covid-19 updates
        </div>
        {/* <div className="mini">
          Nepal
        </div>
        <Container>
          <Row>
            <Col>Confirmed</Col>
            <Col>Deaths</Col>
            <Col>Recovered</Col>
          </Row>
          <Row>
            <Col>{nepal.cases}</Col>
            <Col>{nepal.deaths}</Col>
            <Col>{nepal.recovered}</Col>
          </Row>
        </Container>
        <div className="mini">
          World wide
        </div>
        <Container>
          <Row>
            <Col>Confirmed</Col>
            <Col>Deaths</Col>
            <Col>Recovered</Col>
          </Row>
          <Row>
            <Col>{latest.cases}</Col>
            <Col>{latest.deaths}</Col>
            <Col>{latest.recovered}</Col>
          </Row>
        </Container> */}

        <Table striped bordered hover variant="dark">

          <tbody>
            <tr>
              <th className="mini" colSpan="3">Nepal {}
                <img src={nepalFlag} width="12" alt="flag of nepal" />

              </th>
            </tr>
            <tr>
              <td style={{ color: "lightBlue" }}>Confirmed</td>
              <td style={{ color: "red" }}>Deaths</td>
              <td style={{ color: "green" }}>Recovered</td>
            </tr>
            <tr>
              <td>  <NumberFormat
                end={nepal.cases}
                duration={1.5}
                separator={","}
              /></td>
              <td>  <NumberFormat
                end={nepal.deaths}
                duration={1.5}
                separator={","}
              /></td>
              <td>  <NumberFormat
                end={nepal.recovered}
                duration={1.5}
                separator={","}
              /></td>

            </tr>
            <tr>
              <th className="mini" colSpan="3">World {}
                <img src="https://www.globe.gov/globe-gov-home-portlet/images/learn-earth-system/learn-earth-system-clean.png" width="12"
                  alt="globe"
                />
              </th>
            </tr>
            <tr>
              <td style={{ color: "lightBlue" }}>Confirmed</td>
              <td style={{ color: "red" }}>Deaths</td>
              <td style={{ color: "green" }}>Recovered</td>
            </tr>
            <tr>
              <td>  <NumberFormat
                end={latest.cases}
                duration={1.5}
                separator={","}
              /></td>
              <td>  <NumberFormat
                end={latest.deaths}
                duration={1.5}
                separator={","}
              /></td>
              <td>  <NumberFormat
                end={latest.recovered}
                duration={1.5}
                separator={","}
              /></td>

            </tr>

            <tr>
              <td colSpan="3">Last updated: {lastUpdated}</td>

            </tr>

            <tr>
            <td colSpan="3">Full information can be obtained from <a href="https://coronatrackersankraman.netlify.app/">here</a>
              </td>

            </tr>


          </tbody>
        </Table>
        <Charts name="Nepal" />
      </div>


    return toReturn;
  }
  if (loading)
    return (
      <div className="spinners">
        {" "}
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  return <div>  {donno()}
  </div>;
}

export default Main;
