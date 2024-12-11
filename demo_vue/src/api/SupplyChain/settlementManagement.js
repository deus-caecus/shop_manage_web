import interceptor from '@/utils/request'
//
export const settlementQueryService = async() => {
  return interceptor
    .get('/goods-flow-invoice')
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
    })
}

export const settlementAddService = async (newSettlement) => {
  return await interceptor
  .post('/settlement/add',newsettlement)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}

export const settlementDeleteService = async (settlementID) =>{
  return interceptor
  .delete(`/delete/${settlementID}`)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}

export const settlementUpdateService = async (modifiledsettlement) =>{
  return interceptor
  .put('/settlement/update',modifiledsettlement)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}
