<template lang="">
  
  <Navbar :pages="pages"
          :active-page="activePage"
          :nav-link-click="(index) => activePage = index" />

  <!-- <PageViewer v-if='pages.length>0' :page="pages[activePage]" ></PageViewer> -->


  <router-view></router-view>
  <!-- <CreatePage
  :page-created="pageCreated"></CreatePage>
<br/> -->
  <Footers></Footers>
</template>
<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import Footers from './components/Footer.vue';
import CreatePage from './components/CreatePage.vue';

export default {
  components: {
    PageViewer,
    Navbar,
    Footers,
    CreatePage
  },
  created () {
      this.getPages();
  },
   
  data(){
    return {
      activePage: 0,
      pages: []
            
    };
  },
  methods: {
      async getPages()
      {
           let result = await fetch('./pages.json');

           let pageData = await result.json();

           this.pages = pageData;
      },
      pageCreated(pageObj){
          // console.log(pageObj);
          this.pages.push(pageObj);
          
      }
      
  }
}
</script>
<style lang="">
  
</style>