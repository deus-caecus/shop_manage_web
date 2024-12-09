import interceptor from '@/utils/request'

export const supplierQueryService = () => {
  return interceptor
    .get('/supplier'/*url*/)
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
    })
}

export const supplierAddService = (newSupplier) => {
  return interceptor
  .post('/supplier/add'/*  */,newSupplier)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}

export const supplierDeleteService = (supplierID) =>{
  return interceptor
  .delete(`/delete/${supplierID}`)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}

export const supplierUpdateService = (modifiledSupplier) =>{
  return interceptor
  .put('/supplier/update',modifiledSupplier)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}
