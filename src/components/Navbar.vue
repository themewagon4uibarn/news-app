<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`,'navbar', 'navbar-expand-lg']">
    <!-- <nav class="navbar navbar-expand-lg" :class="navbarClasses"> -->
    <!-- :class="{'navbar-light bg-light': !useDarkNavbar, 'navbar-dark bg-dark': useDarkNavbar}" -->
        <div class="container-fluid">
            <a class="navbar-brand"  @click.prevent="">Navbar</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- <li v-for="(page, index) in pages" class="nav-item" :key="index"> -->
                <li v-for="(page, index) in publishedPages" class="nav-item" :key="index">
                    <NavbarLink
                    :page="page"
                    :isActive="activePage == index"
                    @click.prevent="navLinkClick(index)"></NavbarLink>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" 
                @click.prevent="changeTheme">
                    Toggle Nav
                </button>
            </form>
        </div>
    </nav>
</template>
<script>
import NavbarLink from './NavbarLink.vue';
export default {
    components: {
        NavbarLink
    },
    props: [
            'pages',
            'activePage',
            'navLinkClick'
           ],
    
    created () {
        this.getThemeSettings();
    },
    computed: {
        publishedPages() 
        {
          return this.pages.filter( p => p.published); 
        }
    },
    data(){
        return {
            theme: 'dark',
            
        };
    },
    methods:{
        changeTheme(){
            let theme = 'dark';

            if(this.theme == 'dark')
            {
                theme = 'light';
            }
            this.theme = theme;
            this.storeThemeSettings();
        },
        storeThemeSettings () {
            localStorage.setItem('theme', this.theme);
        },
        getThemeSettings () {
            let theme = localStorage.getItem('theme');

            if(theme)
            {
                return this.theme = theme;
            }
        }
    }
}
</script>
<style lang="">
    
</style>