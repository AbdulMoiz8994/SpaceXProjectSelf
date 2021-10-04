import React from 'react'
import {useNextLaunchQuery} from '../../generated/graphql'


export const NextLaunchCont = () => {

    const {data,loading,error}=useNextLaunchQuery()


    if(loading){
          return (<h1>Loading...</h1>)        
    }
    if(error){
        return(<h1>Error...</h1>)
    }
    // console.log(data);
    !!data &&(console.log(data))
    return (
        <div>
            
        </div>
    )
}
