<template>
    <div :class="baseClass">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus praesentium recusandae maxime voluptate nulla accusamus pariatur repellendus laudantium distinctio amet, maiores reprehenderit tenetur sed architecto temporibus est dolores fugit minima!
    </div>
    
</template>

<script>


export default {
    props: ['variant', 'text'],
    computed: {
        baseClass() {
            return [
                'alert',
               this.variant ? `alert-${this.variant}` : ''
            ]
        },
    },
  
}
</script>


<style scoped>
.alert {
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background: #ddd;
}

.alert-success {
    background: #42b983;
    color: #fff;
}

.alert-danger {
    background: red;
    color: white;
}
</style>