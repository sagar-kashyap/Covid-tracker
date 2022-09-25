import axios from 'axios';

const url='https://covid19.mathdro.id/api'; //covid data api(recovery data in not being updated)

export const fetchData= async ()=>{
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(url);
        return{
            confirmed:confirmed,
            recovered:recovered,
            deaths:deaths,
            lastUpdate:lastUpdate
        }
         
    } catch (error) {
        
    }
}

export const fetchDailyData=async()=>{
    try {
        const {data}=await axios.get(`${url}/daily`);
        
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))

        return modifiedData;
    } catch (error) {
        
    }
}
<<<<<<< HEAD

=======
>>>>>>> cbb0c8b69e697c4a8f0fa504d7705c7313878d11
