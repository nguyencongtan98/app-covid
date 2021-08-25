import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import "moment/locale/vi";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountries } from "./apis";
import "./App.css";
import { CountrySelector } from "./components/CountrySelector";
import { HighLight } from "./components/HighLight";
import { Summary } from "./components/Summary";

moment.locale("vi");

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
      setSelectedCountryId("vn");
    });
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountries(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  console.log("data: ", report);

  const handleOnchage = (event) => {
    setSelectedCountryId(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h2" component="h2">
        SỐ LIỆU COVID 19
      </Typography>
      <Typography variant="h2">{moment().format("LLL")}</Typography>
      <CountrySelector
        countries={countries}
        handleOnchange={handleOnchage}
        value={selectedCountryId}
      />
      <HighLight report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId} />
    </Container>
  );
}

export default App;
