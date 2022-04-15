import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api/api.index';
import {Line,Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import styles from './Charts.module.css';

const Charts=()=>{
    const [dailyData,setDailyData]=useState([]);

    useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();
    });
    const lineChart=(
        dailyData.length!==0
        ?
        <Line 
        data={{labels:dailyData.map(({date})=>date),
        datasets:[{
            data:dailyData.map(({confirmed})=>confirmed),
            label:'Infected',
            borderColor:'#3333ff',
            fill:true,
        },{
            data:dailyData.map(({deaths})=>deaths),
            label:'Deaths',
            borderColor:'rgba(255,0,0,0.5)',
            fill:true,
        }],}}>

        </Line>:null
    );

return(
        <div className={styles.container}>
            {lineChart}
        </div>   
        
    )
}

export default Charts;