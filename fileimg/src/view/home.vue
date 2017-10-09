<template>
    <div id="home">
        <v-navHtml v-on:showshade="showShade"></v-navHtml>
        <div class="content"></div>
        <v-addtag v-on:fortagName="getTagName"  :bombShow="bombShow" :hide="hide" v-on:show="show" v-on:saveTag="saveTag"></v-addtag>
    </div>
</template>
<script>
import navHtml from '@/components/nav'
import addTag from '@/components/addTag'
export default {
    data() {
        return {
            tagName: '',
            hide: false,
            bombShow: false
        }
    },
    components: {
        'v-navHtml': navHtml,
       'v-addtag': addTag
    },
    methods: {
        getTagName(val) {
            this.tagName = val;
        },
        show() {
            this.hide = false;
            this.bombShow = false;
        },
        saveTag() {
           
        },
        showShade() {
            this.hide = true;
            this. bombShow = true;
        }
    }


}
</script>
<style scoped lang="less">
#home {
    overflow: auto;
    position: absolute;
    width: 100%;
    height: 100%;
    >.content {
        height: 100%;
        margin-left: 280px;
    }
}
</style>

