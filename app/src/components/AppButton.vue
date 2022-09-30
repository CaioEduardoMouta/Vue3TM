<template>
    <button @click="$emit('update')">
        {{ variant }}
        <slot></slot>
        <slot name="icon" />
    </button>
</template>

<script>
    export default {
        props: {
            variant: {
              type: String,
              default: 'sucess',  
            },
        },
        setup(props, {  emit}) {
            const sendData = () => {
                emit('update', true)
            }

            return {
                sendData
            }
        }
    }
</script>