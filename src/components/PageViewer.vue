<template lang="">
    <div id="content" class="container">
        <!-- <h1 class="emphsize">{{ page.pageHeader }}</h1>
        <p>{{  page.content }}</p> -->
        <h1 class="emphsize">Page Header</h1>
        <p>Content</p>
        <p>{{ $route.params.index }}</p>
    </div>
</template>
<script>
export default {
    // props: ['page']
}
</script>
<style scoped>
    .emphsize{
        color: blue;
    }
</style>