<template>
    <div class="section-container">
        <h2 class="banner-title">메인 배너</h2>
        <div class="main-banner">
            <router-link to="/product">
                <img src="../assets/coffe-banner1.jpg" alt="coffee-banner">
            </router-link>
        </div>
        <div class="main-product">
            <div class="thum">
                <router-link to="/product">
                    <img src="../assets/new-s-1.jpg" alt="썸네일">
                </router-link>
            </div>
            <div class="thum">
                <router-link to="/product">
                    <img src="../assets/new-s-2.jpg" alt="썸네일">
                </router-link>
            </div>
            <div class="thum">
                <router-link to="/product">
                    <img src="../assets/new-s-3.jpg" alt="썸네일">
                </router-link>
            </div>
            <div class="thum">
                <router-link to="/product">
                    <img src="../assets/new-s-4.jpg" alt="썸네일">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default{

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
    .banner-title{
        width:200px;
        background:skyblue;
        margin:20px 0;
        padding:10px;
        border-radius:5px;
        color:black;

    }
    .main-banner{
        width:100%;
        border:1px solid black;
    }
    .main-banner img{
        width:100%;
    }
    .main-product{
        width:100%;
        max-width:1024px;
        margin:auto;
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
    }
    .thum{
        width:45%;
        margin:20px 0;

    }
    .main-product img{
        width:100%;
    }
</style>