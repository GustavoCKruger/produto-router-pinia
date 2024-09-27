<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product';

const router = useRouter()
const productStore = useProductStore()

function visualizar(id) {
  router.push(`/products/${id}`)
}
</script>

<template>
  <h1>Listagem de produtos</h1>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <td>Ações</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>R${{ product.price.toFixed(2) }}</td>
        <td><button @click="visualizar(product.id)">ver</button></td>
      </tr>
    </tbody>
  </table>

</template>
