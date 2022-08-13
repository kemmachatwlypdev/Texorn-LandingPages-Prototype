<template>
    <div id="blogs" >
        <navigation :color="color" :flat="flat" />
    </div>
</template>

<script setup>
import navigation from "./NavigationBlogs.vue";

export default{
    components: {
        navigation
    }
}
</script>

<style lang="scss" scoped>

</style>
