<template>
    <div class="mainLogin">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
  name: "mainLogin",
  data() {
    return {
      msg: "录入成绩",
    };
  }
};
</script>

<style lang="less" scoped>
.mainLogin {
  p {
    color: #346464;
  }
}
</style>


