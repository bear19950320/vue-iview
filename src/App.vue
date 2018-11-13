<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return { 
    }
  },
  mounted: function(){
    const _that = this;
    if(!sessionStorage.token){
      _that.$router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  text-align: center;
  color: #2c3e50;
}
</style>
