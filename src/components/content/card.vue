<template>
    <Card style="width:320px" :padding="0" class="no-select">
        <div style="display: flex;height: 100px">
            <div class="flex a-center j-center" style="width:92px" :style="{'backgroundColor':bgcolor}">
                <i class="iconfont" v-html="icon"></i>
            </div>
            <div class="flex flex-col a-center j-center flex-1">
                <span class="card-num" :style="{'color':fontcolor}">{{mycount}}</span>
                <h3>{{title}}</h3>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "card",
        props:["icon","bgcolor","count","fontcolor","title"],
        data(){
            return{
                mycount:0
            }
        },
        mounted(){
            var timer = window.setInterval(()=>{
                if(this.mycount<this.count) this.mycount++;
                else window.clearInterval(timer)
            },1)
        }

    }
</script>

<style scoped>
    .iconfont{
        color: #fff;
        font-size: 30px;
    }

    .card-num{
        font-size: 40px;
    }

</style>