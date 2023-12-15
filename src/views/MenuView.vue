<template>
    <div class="section-container">
        <h2>Menu 본문 구역</h2>
        <div class="menu-banner">
            <img src="../assets/new-s-5.jpg" alt="menu">
        </div>
        <div class="menu-container">
            <div class="nav-menu">
                
                <button class="btn" @click="changeComponent('CoffeeView')">Coffee</button>
                <button class="btn" @click="changeComponent('DrinkView')">Drink</button>
                <button class="btn" @click="changeComponent('TeaView')">Tea</button>
                <button class="btn" @click="changeComponent('FoodView')">Food</button>
            </div>
            <div class="menu-content"> 
                <component v-bind:is="comp"></component>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import CoffeeView from './CoffeeView.vue';
import DrinkView from './DrinkView.vue';
import TeaView from './TeaView.vue';
import FoodView from './FoodView.vue';
$(function(){
    $(".nav-menu button").eq(0).addClass("active");
    $(".nav-menu button").click(function(){
        $(".nav-menu button").removeClass("active");
        $(this).addClass("active")
    })
})
export default{
    
    components:{
        CoffeeView,
        DrinkView,
        TeaView,
        FoodView
    },
    data(){
        return{ comp:'CoffeeView'}
    },
    methods:{
        changeComponent:function(componentName){
            this.comp=componentName;
            console.log(this.comp)
        }
    }
}
</script>

<style>
    .section-container{
        width:100%;
        max-width:1280px;
        border-top:1px dashed black;
        border-bottom:1px dashed black;
        padding:50px 0;
        margin:auto;

    }
    .menu-banner{
        width:100%;
        border:1px solid black;
    }
    .menu-banner img{
        width:100%;
    }
    .menu-container{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        border:1px solid black;
    }
    .nav-menu{
        width:20%;
        background-color:white;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .menu-content{
        width:80%;
        background-color:#ccc;
    }
    .nav-menu button{
        width:100%;
        padding:20px;
        background:skyblue;
        border:none;
        color:white;
        text-decoration: none;
    }
    .nav-menu button.active{
        background:#666;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }

</style>