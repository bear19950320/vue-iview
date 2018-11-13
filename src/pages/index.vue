<template>
    <div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
export default {
  name: "mainLogin",
  data() {
    return {
        msg: ''
    };
  },
  methods:{

  },
  mounted: function(){
    // console.log(this.$route.meta.keepAlive,'keepAlive-----');
  }
};
</script>


