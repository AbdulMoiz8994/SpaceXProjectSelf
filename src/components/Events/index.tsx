import React from 'react'
import {useEventsQuery} from '../../generated/graphql'

export const EventsCont=() =>{

const startWith=3
const {data,loading,error}=useEventsQuery({
    variables:{
        limit: startWith,
        offset: 0,
        order: "desc",
        sort: "event_data_utc"
    },
    notifyOnNetworkStatusChange: true
})

if(loading){
    return(
        <h1>Loading...</h1>
    )
}
if(error){
    return(
        <h1>Error...</h1>
    )
}
!!data &&(
    console.log(data)
    
)
    return(
        <div>

        </div>
    )
}
