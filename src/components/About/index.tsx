import React from 'react'
import {useCompanyInfoQuery} from '../../generated/graphql'



export const CompanyInfoCont = () => {

const {data,loading,error}=useCompanyInfoQuery()
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
   !!data && (
       console.log(data)
   )
   
    return (
        <div>
            
        </div>
    )
}
