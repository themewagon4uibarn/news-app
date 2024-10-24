<template lang="">
    <a class="nav-link" 
        :class="activeClasses"
        aria-current="page" 
        v-bind:href="page.link.url"
        :title="`this is daynamic ${page.link.text}`"
        
    >{{ page.link.text }}</a>
</template>
<script>
export default {
    props:[
        'page',
        'isActive'
    ],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphsize: this.isActive
            }
        }
    }
}
</script>
<style scoped>
    .emphsize{
        text-decoration: underline !important;
    }
</style>