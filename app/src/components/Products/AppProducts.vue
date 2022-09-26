<template>
    <div>
        <AppProduct v-for="product in  $store.state.prpducts"
        :key="product.id" :product="product">
        <AppProduct />
        <AppProduct />
    </div>    
</template>

<script>
import AppProduct from './AppProduct.vue';

export default {
    components: { AppProduct }
}
</script>
