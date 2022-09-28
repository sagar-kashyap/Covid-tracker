import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api/api.index';
import {Line,Bar} from 'react-chartjs-2';
// import {Chart as ChartJS} from 'chart.js/auto';

import styles from './Charts.module.css';

const Charts=({data:{confirmed,recovered,deaths},country})=>{
    const [dailyData,setDailyData]=useState([]);

    useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();
        
    },[]);
    const lineChart=(
        dailyData.length!==0    //check dailyData should not be empty
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

        </Line>:null      /// if dailydata has some value then execute the Line command, if not then null
    );

    console.log(confirmed,recovered,deaths)

      const barChart=(
        confirmed
        ?(
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)'
                    ],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country}`}
            }}
            />

            
        ):null
      );  

return(
        <div className={styles.container}>
            {country?barChart:lineChart}
        </div>   
        
    )
}

export default Charts;
