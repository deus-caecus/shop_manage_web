import interceptor from '@/utils/request'

export const supplierQueryService = async() => {
  return await interceptor
    .get('/supplier')
    .then(response => {
      console.log(response.data)
      return response.data.data
    }).catch(error => {
      console.log(error)
    })
}

export const supplierAddService = async (newSupplier) => {
  return await interceptor
  .post('/supplier/add',newSupplier)
  .then(response=>{
    console.log(response.data)
    return response.data.data
  }).catch(error=>{
    console.log(error)
  })
}

export const supplierDeleteService = async (supplierID) =>{
  return await interceptor
  .delete(`/delete/${supplierID}`)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}

export const supplierUpdateService = async (modifiledSupplier) =>{
  return await interceptor
  .put('/supplier/update',modifiledSupplier)
  .then(response=>{
    return response.data
  }).catch(error=>{
    console.log(error)
  })
}
