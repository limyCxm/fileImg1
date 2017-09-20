<template>
    <div class="nav">
        <p>图片管理平台</p>
        <div class="search">
            <input type="text">
            <button>搜索</button>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item,index) in items" :key="index" @click="handleClick(item.id)">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="addTag">
            <button>+</button>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { name: '1', id: 1 },
                { name: '2', id: 2 },
                { name: '3', id: 3 },
                { name: '4', id: 4 },
                { name: '5', id: 5 },
                { name: '6', id: 6 },
                { name: '7', id: 7 },
                { name: '8', id: 8 },
                { name: '9', id: 9 },
                { name: '10', id: 10 },
                { name: '11', id: 11 },
                { name: '12', id: 12 },
                { name: '13', id: 13 },
                { name: '14', id: 14 },
                { name: '15', id: 15 },
                { name: '16', id: 16 },
                { name: '17', id: 17 },
                { name: '18', id: 18 }

            ]
        }
    },
    methods: {
        handleClick(id) {
            alert(id);
        }
    }
}
</script>

<style lang="less" scoped>
.nav {
    position: fixed;
    width: 280px;
    height: 100%;
    left: 0;
    top: 0;
    background: #2e3353;
    overflow: hidden;
    >p {
        line-height: 40px;
        text-align: center;
        background: #40baf9;
        color: white;
    }
    >.search {
        width: 70%;
        margin:0 auto;
        padding: 15px 0px;
        overflow: auto;
        input,
        button {
            line-height: 24px;
            border-radius: 5px;
            border: none;
            outline: none;
        }
        button {
            width: 25%;
            // margin-left: 10px;
            background: #40baf9;
            color: white;
            float: left;
            border-radius: 0px 5px 5px 0px;
            
        }
        input{
            width: 75%;
            float: left;
            border-radius: 5px 0px 0px 5px;
        }
    }
    >.list {
        width: 300px;
        height: 800px;
        overflow-y: scroll;
        >ul {
            width: 280px;
            overflow: auto;
            >li {
                line-height: 50px;
                text-align: center;
                color: white;
                font-size: 22px;
                &:hover {
                    background: #262626;
                    cursor: pointer;
                    color: #40baf9;
                }
            }
        }
    }
    >.addTag {
        width: 200px;
        height: 30px;
        margin: 0 auto;
        margin-top: 20px;
        >button {
            width: 100%;
            height: 100%;
            line-height: 100%;
            text-align: center;
            font-size: 24px;
            border-radius: 5px;
            border: none;
            outline: none;
            cursor: pointer;
            color: white;
            background: #f26b89;
        }
    }
}

@media screen  and (max-width:1024px){
    .nav{
        width: 100%;
        height: auto;
        overflow: auto;
        >.search{
            margin-left:15%;
            input,button{
                line-height: 24px;
                font-size: 16px;
            border: none;
            outline: none;
            }
            >input{
                width: 75%;
                float: left;
            }
            >button{
                width: 25%;
                float: left;
            }
        }
        >.list {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top:0;
        background:rgba(0,0,0,0.5);
        display: none;
        z-index: 99;
         >ul {
            width: 100%;
            overflow: auto;
            >li {
                line-height: 50px;
                text-align: center;
                color: white;
                font-size: 22px;
                &:hover {
                    background: initial;
                    cursor: pointer;
                    color: white;
                }
            }
        }
        
    }
     >.addTag {
        width: 50px;
        height: 30px;
        margin: 0 auto;
        // margin-top: 20px;
        position: absolute;
        left: 5px;
        top: 5px;
        z-index: 1;
    }
    }
}
</style>

