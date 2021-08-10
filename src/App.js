import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import style from "./App.module.css";
import { fetchData } from './api';


class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  } 
  
  handleCountryChange = async (country) => {
    console.log(country);
    //fetch data
    //set state
  }

  render() {
    const { data } = this.state;
    return (
      <div className={style.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart />
      </div>
    )
  }
}

export default App;