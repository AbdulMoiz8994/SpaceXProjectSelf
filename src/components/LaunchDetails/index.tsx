import React from 'react';
import {useLaunchDetailsQuery} from '../../generated/graphql'


export const LaunchesDetails=() =>{

   const {data,error,loading}=useLaunchDetailsQuery({
       variables:{
            id: "10"           
       }
   })
     if(loading){
         return(<h1>Loading...</h1>)
     }
     if(error){
         return(<h1>Error...</h1>)
     }
     !!data &&(
         console.log(data)
     )

    return(
        <div>

        </div>
    )
}