<template>
    <div id="home">
        <navHtml></navHtml>
        <div class="content"></div>
    </div>
</template>
<script>
import navHtml from '@/components/nav'
export default {
    data() {
        return{
           
    }
    },
    components:{
        navHtml
    }
    

}
</script>
<style scoped lang="less">
    #home{
        >.content{
            height: 100%;
           margin-left: 280px;
        }
    }

</style>

