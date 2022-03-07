import React, { useEffect , useState } from 'react';
import nandu from "./nandu.css"
const Covid =()=>{
    const [data,setData]=useState([]);
     const getovidData=async()=>{
         try{const res= 
            await  fetch('https://data.covid19india.org/data.json');
  const ActualData = await res.json();
//   console.log(ActualData.statewise[5]);
setData(ActualData.statewise[5]);
  console.log(ActualData);
         }
         catch(error){
             console.log(error);

         }
         
     }
    useEffect(()=>{
        getovidData();

    }, []);

    return(
       <>
       <section>
       <h1>
           LIVE <br/> COVID_19 Tracker </h1>
           <ul>
               <li className='card'>
                  <div className='main_card'>
                     <div className='inner_card'>

           <p className='card_name'> Country India <br/>
           Total Information About COVID-19
           State-Wise 


           </p>
                     </div>
                  </div>
               </li>
               <li className='card'>
                  <div className='main_card'>
                     <div className='inner_card'>

           <p className='card_name'> Active Cases

           </p>
           <p className='datank'>
               {
                   data.active
               }
           </p>
                     </div>
                  </div>
               </li>
               <li className='card'>
                  <div className='main_card'>
                     <div className='inner_card'>

           <p className='card_name'> Recovered Cases

           </p>
           <p className='datank'>{data.recovered}

           </p>
                     </div>
                  </div>
               </li>
               <li className='card'>
                  <div className='main_card'>
                     <div className='inner_card'>

           <p className='card_name'> Total Deaths

           </p>
           <p className='datank'>
               {data.deaths}
           </p>
                     </div>
                  </div>
               </li>
               <li className='card'>
                  <div className='main_card'>
                     <div className='inner_card'>

           <p className='card_name'> Confirmed Cases

           </p>
           <p className='datank'>
               {data.confirmed}
           </p>
                     </div>
                  </div>
               </li>
           </ul>
           </section>
       </>
    )
}
 export default Covid