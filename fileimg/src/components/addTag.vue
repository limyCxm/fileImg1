<template>
    <section v-show="hide">
        <transition name="fade">  
        <div class="bombBox" v-show="bombShow">
            <p>增加标签/ADDTAGS</p>
            <i class="iconfont icon-cuowu"  @click="showFalse"></i>
            <div class="bombContent">
                <label>标签名/NAME</label><br />
                <p><input type="text" name="" v-model="tagName"></p>
            </div>
           <span><button @click="showFalse">取消</button><button class="save" @click="save">保存</button></span> 
        </div>
        </transition>
        <div class="shade" @click="showFalse"></div>
    </section>
</template>
<script>
export default{
   props: {
      hide: {// display属性
        type: Boolean,
        default: false
      },
      bombShow: {// display属性
        type: Boolean,
        default: false
      }
    },
    data(){
        return {
            tagName: ''
        }
    },
    watch: {
        tagName:function(val){
            this.$emit('fortagName',val)
        }
    },
    methods:{
        showFalse(){
            this.tagName = '';
            this.$emit('show');
        },
        save(){
            this.tagName = '';
            this.$emit('saveTag');
        }
    }
}
</script>
<style scoped lang="less">
    .bombBox{
        width: 600px;min-height:220px;overflow: auto;position:absolute;left: 50%;margin-left: -300px;top: 200px;box-shadow: 0 0 10px #ccc;border-radius: 10px;z-index: 999;background: white;
        &>p{border-bottom: 1px solid #eee;padding: 10px;font-size: 24px;}
        &>i{position: absolute;right: 20px;top: 20px;cursor: pointer;}
        &>.bombContent{
            padding-bottom: 20px;border-bottom: 1px solid #eee;
            label{margin-left: 20px;line-height: 50px;}
            p{padding:0 20px;
                &>input{width: 100%;line-height: 30px;border-radius: 10px;border:1px solid #ccc;outline: none;text-indent: 2mm;
                    &:focus{border-color: red;box-shadow: 0 0 5px red;};
                }
             }
        }
        span{float: right;
             button{width: 54px;height: 34px;border:none;border-radius: 5px;outline: none;cursor: pointer;margin-right: 20px;margin-top: 15px;}
             .save{color: white;background: #06d996;}
        }
       
    }
    .shade{position: absolute;width: 100%;height: 100%;background: rgba(0,0,0,0.5);left: 0;top: 0;z-index: 1;}
    .fade-enter-active, .fade-leave-active {
      transition: all 0.5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0;
      transform: translateY(-200px);
    }
    @media screen  and (max-width:1024px){
        .bombBox{
        width: 80%;min-height:220px;overflow: auto;position:absolute;left: 10%;margin-left:0;top: 200px;box-shadow: 0 0 10px #ccc;border-radius: 10px;z-index: 999;background: white;
        
       
    }
    }
</style>