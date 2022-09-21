<template>
    <div>
        
            {{ $route.query.page }} 
             Usuários
    

    <button @click="login()">
        Login
    </button>
</div>
</template>

<script>
export default {
    created() {
        console.log(this.$router);
    },
    methods: {
        login() {
            this.$router.push({name: 'about'})
            console.log('chegou');
        }
    }
}
</script>
