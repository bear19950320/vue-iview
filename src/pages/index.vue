<template>
    <div>
        <router-view></router-view>
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
    this.$router.push('/login')
  }
};
</script>


