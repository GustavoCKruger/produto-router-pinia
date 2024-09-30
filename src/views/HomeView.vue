<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product';

const router = useRouter()
const productStore = useProductStore()

function visualizar(id) {
  router.push(`/product/${id}`)
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
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>R${{ product.price.toFixed(2) }}</td>
        <td>
          <button @click="visualizar(product.id)">ver</button>
          <button @click="visualizar(product.id)">excluir</button>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<style scoped>
table,
tr,
th,
td {
  border: 2px solid black;
}

tr,
td {
  min-width: 130px;
}

button {
  min-width: 65px;
  background-color: rgb(127, 168, 164);
}
</style>
