<template>
     <!-- Todo items -->
    <div class="space-y-2">
       <TodoItem/>
       <TodoItem/>
 
    </div>
</template>

<script>
import TodoItem from '@components/TodoItem';    
export default {
    components: { TodoItem }
}
</script>