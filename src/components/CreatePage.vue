<template lang="">
    <div class="container">
        <!-- <h1>Create Page</h1> -->
        <form action="">
            <div class="form-group">
                <label for="page_header">Page Header</label>
                <input type="text" class="form-control"  
                placeholder="Enter page Header"
                v-model="pageHeader">
                <!-- <small id="emailHelp" class="form-text text-muted">Enter page title</small> -->
            </div>
            <br/>
            <div class="form-group">
                <label for="page_content">Content</label>
                <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
                <textarea class="form-control" 
                name="page-content" i
                v-model="content" rows="5"></textarea>
            </div>
            <div class="form-group">
                <label for="link_text">Link Text</label>
                <input type="text" class="form-control" 
                placeholder="Enter link text"
                v-model="linkText">
                <!-- <small id="emailHelp" class="form-text text-muted">Enter page title</small> -->
            </div>
            <br/>

            <div class="form-group">
                <label for="link_url">Link URL</label>
                <input type="text" class="form-control" 
                        placeholder="Enter link URL"
                        v-model="linkUrl">
                <!-- <small id="emailHelp" class="form-text text-muted">Enter page title</small> -->
            </div>
            <br/>
            
            <div class="form-group">
                <div class="form-check">
                <input type="checkbox" class="form-check-input"  placeholder="Enter link URL" v-model="published">
                        <label class="form-check-label" for="gridCheck1">Published</label>
                </div>
            </div>
            <br/>
           
            <button type="submit" class="btn btn-primary" @click.prevent="submitForm" 
            :disabled="isFormInvalid"
            >Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    props: ['pageCreated'],
    computed: {
        isFormInvalid(){
            return !this.pageHeader || !this.content || !this.linkText || !this.linkUrl;
        }
    },
    data (){
        return {
            pageHeader: '',
            content: '',
            linkText: '',
            linkUrl: '',
            published: false
        }
    },
    methods: {
        submitForm()
        {
            if(!this.pageHeader || !this.content || !this.linkText || !this.linkUrl)
            {
                alert('Please fill the form.');
                return;
            }

            this.pageCreated({
                pageHeader: this.pageHeader,
                content: this.content,
                link: {
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            });
            
            this.pageHeader= '';
            this.content = '';
            this.linkText = '';
            this.linkUrl = '';
            this.published = false;
            

        }
    }
}
</script>
<style lang="">
    
</style>