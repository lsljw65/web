<template>
    <div class="section-container">
        <h2>Menu 본문 구역</h2>
        <div class="menu-banner">
            <img src="../assets/new-s-5.jpg" alt="menu">
        </div>
        <div class="menu-container">
            <div class="nav-menu">
                <router-link to="/menu/coffee">Coffee</router-link>
                <router-link to="/menu/drink">Drink</router-link>
                <router-link to="/menu/tea">Tea</router-link>
                <router-link to="/menu/food">Food</router-link>
            </div>
            <div class="menu-content">
                <router-view></router-view>
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
    .nav-menu a{
        width:100%;
        padding:20px;
        background:skyblue;
        color:white;
        text-decoration: none;
    }
    .nav-menu a.router-link-exact-active{
        background:#666;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }

</style>