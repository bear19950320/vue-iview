<template>
    <div>

    </div>
</template>
<script>
    export default {
    name: "layList",
    data() {
        return {
           
        }
    },
    methods: {
    
    },
    beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
        next();
    },  
    mounted: function() {
      const _that = this;
        if(_that.$store.scoreData){
            _that.scoreData = _that.$store.scoreData; 
        }
    },
};
</script>

<style lang="less" scoped>
    
</style>