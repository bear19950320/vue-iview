<template>
  <div class="recodeEntry">
      <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
        <el-step title="步骤 1" ></el-step>
        <el-step title="步骤 2" ></el-step>
        <el-step title="步骤 3" ></el-step>
      </el-steps>
      <div class="mainLogin">
        <div class="recordTitle"> <span class="flag"> 1 </span>输入您的真实高考成绩 </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="高考成绩" prop="score">
              <el-input v-model="ruleForm.score"></el-input>
            </el-form-item>
            <el-form-item label="您的科目" class="radio-group">
              <el-radio-group v-model="ruleForm.subject">
                <el-radio label="文科"></el-radio>
                <el-radio label="理科"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="您的位次">
              <el-input v-model="ruleForm.position"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
            </el-form-item>
          </el-form> 
        </div>
  </div>
</template>

<script>
export default {
  name: "recodeEntry",
  data() {
    var psdRule = function(rule, value, callback) {
      var regExpPsd = /^[0-9]*$/g;
      if (regExpPsd.test(value) === false || value.length>8) {
        callback(new Error('请输入正确的分数'));
      }else {
        callback();
      }
    };
    return {
      ruleForm: {
        score: 0,
        subject: '文科',
        position: 0
      },
      rules: {
        score: [
          { required: true, message: '请输入分数', trigger: 'change' },
          { validator: psdRule, trigger: 'blur' }
        ]
      }
    };
  },
  // beforeDestroy() {
  //   this.$root.Bus.$off('MainLogin')
  // },
  methods: {
    submitForm(formName) {
      var _that = this;
      this.$refs[formName].validate((valid) => {
        _that.$store.scoreData = _that.ruleForm;
        _that.$router.push('/batchFill');
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
.recodeEntry{
  width: 80%;
  margin: 0 auto;
}
.mainLogin {
  width: 400px;
  height: 300px;
  padding: 20px;
  padding-left: 0;
  padding-top: 0;
  margin:  0 auto;
  margin-top: 240px;
  box-shadow: 0 1px 1px 0 #a8a6a6;
  .recordTitle{
    text-align: left;
    width: 100%;
    height: 30px;
    padding: 10px;
    line-height: 30px;
    font-size: 18px;
    border-bottom: 1px solid #a8a6a6;
    .flag{
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0 10px;
      border-radius: 50%;
      border: 1px solid #084ff7;
      line-height: 20px;
      text-align: center;
    }
  }
  form{
    margin-top: 30px;
    .el-form-item__label{
      width: 60px;
    }
    .radio-group{
      text-align: left;
    }
  }
  p {
    color: red;
  }
}
</style>



