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

  return { products }
})
