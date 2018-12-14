<template>
    <div class='batchFill'>
        <el-steps :active="2" finish-status="success" simple style="margin-top: 20px">
            <el-step title="步骤 1" ></el-step>
            <el-step title="步骤 2" ></el-step>
            <el-step title="步骤 3" ></el-step>
        </el-steps>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="4"><h3>您的真实高考成绩</h3></el-col>
                    <el-col :span="16">
                        <ul class="scoreUl">
                            <li>
                                <label>科目:</label>
                                <div class="scoreLiDiv">{{scoreData.subject}}</div>
                            </li>
                            <li>
                                <label>总分:</label>
                                <div class="scoreLiDiv">{{scoreData.score}}</div>
                            </li>
                            <li>
                                <label>位次:</label>
                                <div class="scoreLiDiv">{{scoreData.position}}</div>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <ul class="batchUl">
                    <li v-for="(item, index) in batchData">
                        <div class="left-li">
                            <div>
                                <h2>{{item.text}}</h2>
                                <p class="introduce" v-show="item.fraction">
                                    {{item.introduce}}
                                    <span>
                                        {{item.subject}}【{{item.fraction}}】
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="right-li">
                            <el-button @click="selectDeclare(index)">{{item.btnText}}</el-button>
                        </div>
                    </li>
                </ul>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
  name: "batchFill",
  data() {
    return {
      scoreData:{},
      batchData: [
           {
              text: '前往批填报学院',
              btnText: '提前批',
              introduce: '',
              subject: '' ,
              fraction: 0
          },
          {
              text: '普通类第一批本科学院',
              btnText: '重点填报',
              introduce: '2017年控制线',
              subject: '文科' ,
              fraction: 543
          },
           {
              text: '普通类第二批本科学院',
              btnText: '重点填报',
              introduce: '2017年控制线',
              subject: '文科' ,
              fraction: 478
          },
           {
              text: '普通类专科一批学院',
              btnText: '重点填报',
              introduce: '2017年控制线',
              subject: '文科' ,
              fraction: 448
          },
          {
              text: '普通类专科二批学院',
              btnText: '重点填报',
              introduce: '2017年控制线',
              subject: '文科' ,
              fraction: 200
          }
      ]
    };
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
    //   {{$store.scoreData.score}}
    console.log(_that.$store.scoreData)
    if(_that.$store.scoreData){
        _that.scoreData = _that.$store.scoreData; 
    }else{
        _that.$router.push('/recordEntry');
    }
  },
  methods:{
        selectDeclare(index){
          var _that = this;
          if(index == 0){
                this.$alert('武警，军校，公安，司法，免费师范生，小语种，港校等特色院校及专业可以选择提前批！', '提前批', {
                    confirmButtonText: '立即填报',
                    callback: action => {
                        sessionStorage.token = true;
                        setTimeout(function(){
                            _that.$router.push("/AcademySelect");
                        },1500);
                    }
                })
          }else{
                this.$alert('仅限于购买圆梦卡用户使用', '标题名称', {
                    confirmButtonText: '免费试用',
                    cancelButtonText: '没有圆梦卡,购买',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `暂未开放`
                        });
                    },
                    callback: cancel => {
                        sessionStorage.token = true;
                        setTimeout(function(){
                            _that.$router.push("/AcademySelect");
                        },1500);
                    }
                })
          }
        }
    }
};
</script>

<style lang="less">
    .autoHeight{
        display: block;
        content: '';
        clear: both;
    }
    .batchFill{
        width: 80%;
        height: 100%;
        overflow-y: auto;
        margin: 0 auto;
        .el-steps{
            margin-top: 0!important;
        }
        .el-header{
            background: #f2f0f0;
            height: 50px!important;
            h3{
                min-width: 240px;
                padding: 10px 0;
                margin: 0;
                line-height: 30px;
            }
            .scoreUl{
                list-style: none;
                height: 30px;
                line-height: 30px;
                width: 100%;
                padding: 10px 0;
                margin: 0;
                li{
                    float: left;
                    width: 100px;
                    height: 30px;
                    line-height: 30px;
                    label{
                        width: 40px;
                        height: 30px;
                        line-height: 30px;
                        float: left;
                        font-size: 14px;
                    }
                    .scoreLiDiv{
                        text-align: left;
                        color: #FC8505;
                        font-weight: 600;
                        margin-left: 44px;
                        font-size: 15px;
                        height: 30px;
                        line-height: 30px;
                    }
                }
            }
        }
        .el-main{
            margin-top: 10px;
            background: #fff;
            padding: 10px 0;
            .batchUl{
                width: 100%;
                list-style: none;
                padding: 0;
                li{
                    list-style: none;
                    width: 100%;
                    height: 120px;
                    background: #f2f0f0;
                    margin: 10px 0;
                    .left-li{
                        text-align: left;
                        width: calc(100% - 160px);
                        height: 120px;
                        padding: 0;
                        float: left;
                        div{
                            height: calc(100% - 20px);
                            padding-left: 20px;
                            p.introduce{
                                font-size: 14px;
                                span{
                                    color:rgb(190, 123, 35);
                                }
                            }
                        }
                    }
                    .right-li{
                        width: 160px;
                        height: 120px;
                        padding: 0;
                        line-height: 120px;
                        float: left;
                        .el-button{
                            height: 30px;
                            line-height: 30px;
                            padding: 0;
                            padding: 0 20px;
                            color: #fff;
                            background: #0a7fd3;
                            text-align: center;
                        }
                    }
                }
            }
            
        }
    }
   
</style>
