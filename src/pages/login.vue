<template>
    <div class="mainLogin">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登入填报</el-button>
        </el-form-item>
      </el-form> 
    </div>
</template>

<script>
// var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
// //输出 true
// console.log(uPattern.test("iFat3"));
export default {
  name: "mainLogin",
  data() {
    var psdRule = function(rule, value, callback) {
      var regExpPsd = /^[0-9a-zA-Z]*$/g;
      if (regExpPsd.test(value) === false || value.length<6 || value.length>18) {
        callback(new Error('请输入6-18位数字或字母的组合'));
      }else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { validator: psdRule, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      var _that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message('登入填报成功');
          sessionStorage.token = true;
          setTimeout(function(){
            _that.$router.push("/recordEntry");
          });
        } else {
          this.$message('账号/密码错误');
          return false;
        }
      });
    },
    resetForm(formName) {
    
    },
    goNext: function() {
      
    }
  },
  mounted: function() {
    console.log(this.$router)
  }
};
</script>

<style lang="less" scoped>
.mainLogin {
  width: 400px;
  height: 240px;
  padding: 20px;
  padding-left: 0;
  margin:  0 auto;
  margin-top: 240px;
  box-shadow: 0 1px 1px 0 #a8a6a6;
  form{
    margin-top: 30px;
    .el-form-item__label{
      width: 60px;
    }
  }
  p {
    color: red;
  }
}
</style>


