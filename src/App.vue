<template>
  <div id="header">
    <router-link :to="{ name: 'Home' }">HOME</router-link>
    <router-link :to="{ name: 'Contact' }">CONTACT</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
a {
  background: black;
  color: #ffffff;
  display: block;
  font: bold 12px/20px sans-serif;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
a:hover {
  background: #2c3e50;
}
#app {
  font-family: Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #0D0208;
  

}
body {
  margin: 0;
  background-color: #0D0208;
}
#header {
  border-bottom: #008F11 solid;
  background-color: #0D0208;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
</style>
