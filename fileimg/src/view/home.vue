<template>
    <div id="home">
        <div class="home_Content">
            <div class="left">
                <span>图片管理平台</span>
                <div class="search">
                    <input type="text" />
                    <button>搜素</button>
                </div>
                <div class="list">
                    <list />
                </div>
                <button>+</button>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>
<script>
import list from '@/components/list'
export default {
    data() {
        return {
            data: [{
                label: '一级 1'

            }, {
                label: '一级 2'

            }, {
                label: '一级 3',

            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    components: {
        list
    },
    methods: {
        handleNodeClick(data) {
            console.log(data.label);
        }
    }
}
</script>
<style scoped>
.home_Content {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
}

.home_Content>.left {
    width: 300px;
    flex: none;
    -webkit-flex: none;
    background: #2e3353;
    border: 1px solid #d1dbe5;
    overflow: hidden;
}

.home_Content>.left>span {
    width: 100%;
    line-height: 60px;
    color: white;
    background: #5bc3f6;
    display: inline-block;
    text-align: center;
}

.home_Content>.left>.search {
    margin: 15px 39px;
}

.home_Content>.left>.list {
    height: 800px;
    width: 318px;
    overflow-y: scroll;
}

.search>input {
    height: 25px;
    border-radius: 5px;
    border: none;
    outline: none
}
.search>button{
    height: 30px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    background: #5bc3f6;
}

.home_Content>.right {
    flex: 1;
    -webkit-flex: 1;
    /* background:yellow; */
}
</style>

