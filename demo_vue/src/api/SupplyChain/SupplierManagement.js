import interceptor from '@/utils/request'

export const supplierQueryService = async() => {
  return interceptor
    .get('/supplier')
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
    })
}

export const supplierAddService = async (newSupplier) => {
  return await interceptor
  .post('/supplier/add',newSupplier)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}

export const supplierDeleteService = async (supplierID) =>{
  return interceptor
  .delete(`/delete/${supplierID}`)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}

export const supplierUpdateService = async (modifiledSupplier) =>{
  return interceptor
  .put('/supplier/update',modifiledSupplier)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}
