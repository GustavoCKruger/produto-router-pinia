import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Liquidificador', price: 79.9, qty: 100 },
    { id: 2, name: 'Torneira', price: 179.9, qty: 100 },
    { id: 3, name: 'Secador', price: 100, qty: 100 },
    { id: 4, name: 'Ar Condicionado', price: 2000, qty: 100 },
    { id: 5, name: 'Panela', price: 259.9, qty: 100 }
  ])

  function deleteProductById(id) {
    const pos = products.value.findIndex((product) => product.id == id)
    products.value.splice(pos, 1)
  }

  function getProductById(id) {
    //for (let product of products.value) {
    //if (product.id == id) {
    //return product
    //}
    //}
    // return null
    return products.value.find((product) => product.id == id)
  }

  //const getProductById = (id) => products.value.find((product) => product.id == id)

  return { products, getProductById, deleteProductById }
})
