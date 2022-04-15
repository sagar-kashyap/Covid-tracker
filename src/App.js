import React from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api/api.index';

class App extends React.Component {

  state={
    data:{},
  }

  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData});
    
  }

  render(){
    const { data } =this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Charts />
        <CountryPicker />
  
      </div>
    );
  }
  }
  

export default App;
