<template>
    <header>
        <h1>
            <router-link to="/">
                <img src="../assets/SC-logo.png" alt="coffee">
            </router-link>
        </h1>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">about</router-link>
            <router-link to="/menu">Menu</router-link>
            <router-link to="/product">Product</router-link>
        </nav>
    </header>
</template>

<script>
export default{

}
</script>
<style>
header{
  width:100%;
  height:100px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 20px;
}
header h1{
  width:100px;
}
header h1 img{
  width:100%;
}
nav {
  width:80%;
  padding:0;
  display:flex;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin:0 20px;
}
</style>