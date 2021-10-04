import React from 'react'
import {useLaunchesQuery} from '../../generated/graphql'

export const LaunchesCont = () => {

let startWith=20;
// const[offset, setoffSet]=useState(20)

const {data,loading,error}=useLaunchesQuery({
    variables:{
        order: "desc",
        sort: "launch_date_local",
        limit: startWith,
        offset: 0
    },
    notifyOnNetworkStatusChange: true
})
if(loading){
    return (<h1>Loading...</h1>)
}
if(error){
    return(<h1>Error...</h1>)
}
  !!data &&(
      console.log(data)
  )

    return (
        <div>
            
        </div>
    )
}
