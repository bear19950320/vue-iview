<template>
  <div class="batchFill">
    <el-steps :active="3" finish-status="success" simple style="margin-top: 20px">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            <h3>您的真实高考成绩</h3>
          </el-col>
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
        <div class="selectHead">
          <ul class="autoHeight">
            <li></li>
            <li>
              学校
              <span>
                <i class="el-icon-question"></i> 志愿知识
              </span>
            </li>
            <li>
              专业
              <span>
                <i class="el-icon-question"></i> 志愿知识
              </span>
            </li>
          </ul>
        </div>
        <div class="selectBody">
          <div class="selectItem">
            <ul class="autoHeight" v-for="(item, index) in selectList">
              <li>
                <p class="vertical">{{item.title}}</p>
              </li>
              <li>
                <div class="selectNot2Body">
                  <div class="Not2Body">
                    <div class="Not2BodyBtn">
                      <el-input type="text" v-model="item.campus" placeholder="请选择学院" readonly></el-input>
                      <el-button @click="choiceSubject(item)">选择{{item.title}}</el-button>
                    </div>
                  </div>
                  <div class="Not2Bottom">
                    <div class="Not2BottomLeft">是否从专业调配</div>
                    <div class="Not2BottomRight">
                      <el-radio v-model="radio" label="1">是</el-radio>
                      <el-radio v-model="radio" label="2">否</el-radio>
                    </div>
                  </div>
                </div>
              </li>
              <li class="itemLi">
                <!-- <div class="lastDiv" v-if="item.data" v-for="(items , index) in item.data">
                  <span class="lastNum">{{index + 1}}</span>
                  <el-input type="text" :placeholder="'请选择专业'+ (index + 1)"></el-input>
                  <el-button @click="changeSubject(item,items)">选择</el-button>
                </div> -->
                <div class="lastDiv" v-for="(items , key) in 6">
                  <span class="lastNum">{{key + 1}}</span>
                  <el-input type="text" readonly="readonly" v-model="item.subject['ject'+(key+1)]" :placeholder="'请选择专业'+ (key + 1)"></el-input>
                  <el-button @click="changeSubject(item,(key + 1))">选择</el-button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-dialog
      title="以下学校适合作为志愿填报，请手动选择："
      :visible.sync="dialogVisible"
      width="80%"
      class="dialogClass"
      :before-close="handleClose"
    >
      <el-table :data="subjectData" v-show="subject" style="width: 100%" min-height="250" max-height="640">
        <el-table-column fixed prop="name" label="学校名称" min-width="25%" align="center"></el-table-column>
        <!-- <el-table-column :prop="scope.$index" label="全国排名" width="120"></el-table-column> -->
        <el-table-column prop="major" label="科目" min-width="25%" align="center"></el-table-column>
        <el-table-column prop="score" label="分数线" min-width="25%" align="center"></el-table-column>
        <el-table-column label="操作" min-width="25%" align="center">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="changeDialog(scope.$index, subjectData)"
              type="text"
              size="small"
              :disabled="scope.row.disabled"
            >选择院校</el-button>
          </template>
        </el-table-column>
      </el-table>

       <el-table :data="subjectData" v-show="!subject" style="width: 100%" min-height="250" max-height="640">
        <el-table-column fixed prop="name" label="专业名称" min-width="60%" align="center"></el-table-column>
        <!-- <el-table-column :prop="scope.$index" label="全国排名" width="120"></el-table-column> -->
        <el-table-column label="操作" min-width="40%" align="center">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="saveSubject(scope.$index, subjectData, scope.row.id)"
              type="text"
              size="small"
            >选择专业</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>-->
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "academySelect",
  data() {
    return {
      scoreData: {},
      radio: "1",
      selectList: [
        {
          title: "A志愿",
          campus: "",
          data: [],
          subject:{
            "ject1": "",
            "ject2": "",
            "ject3": "",
            "ject4": "",
            "ject5": "",
            "ject6": "",
          }
        },
        {
          title: "B志愿",
          campus: "",
          data: [],
          subject:{
            "ject1": "",
            "ject2": "",
            "ject3": "",
            "ject4": "",
            "ject5": "",
            "ject6": "",
          }
        },
        {
          title: "C志愿",
          campus: "",
          data: [],
          subject:{
            "ject1": "",
            "ject2": "",
            "ject3": "",
            "ject4": "",
            "ject5": "",
            "ject6": "",
          }
        },
        {
          title: "D志愿",
          campus: "",
          data: [],
          subject:{
            "ject1": "",
            "ject2": "",
            "ject3": "",
            "ject4": "",
            "ject5": "",
            "ject6": "",
          }
        },
        {
          title: "E志愿",
          campus: "",
          data: [],
          subject:{
            "ject1": "",
            "ject2": "",
            "ject3": "",
            "ject4": "",
            "ject5": "",
            "ject6": "",
          }
        }
      ],
      selectTitle: "",
      campus:'',
      artsData: [],
      scienceData: [],
      dialogVisible: false,
      subjectData: [],
      subject: true,
      subjectItem: [],
      subjectIndxe: '',
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getListData() {
      var _that = this;
      this.axios({
        method: "get",
        url: "/static/list.json",
        dataType: "json",
        crossDomain: true,
        cache: false
      }).then(resolve => {
        console.log("请求成功", resolve);
        if (resolve.status == "200") {
          const data = resolve.data;
          _that.artsData = data.arts;
          _that.scienceData = data.science;
        }
      }),
        reject => {
          console.log("请求失败", reject);
        };
    }, // 专业选择
    changeSubject(item,index){
        const _that = this;
        _that.subject = false;
        _that.subjectIndxe = 'ject' + index;
        _that.subjectData = [];
        _that.dialogVisible = true;
        _that.subjectItem = item;
        _that.subjectData = item.data;
    },
    saveSubject($index, data , id){
        const _that = this;
        _that.subjectItem.subject[_that.subjectIndxe] = data[$index].name
        _that.dialogVisible = false;
    },// 学院选择
    choiceSubject(item) {
      const _that = this;
      _that.subject = true;
      _that.selectTitle = item.title;
      _that.campus = item.campus;
      _that.subjectData = [];
      _that.dialogVisible = true;
      if (_that.scoreData.subject == "理科") {
        for (const i in _that.artsData) {
          if (_that.artsData[i].score <= _that.scoreData.score) {
            _that.subjectData.push(_that.artsData[i]);
          }
        }
      } else {
        for (const i in _that.scienceData) {
          if (_that.scienceData[i].score <= _that.scoreData.score) {
            _that.subjectData.push(_that.scienceData[i]);
          }
        }
      }
      //disabled    //   对比禁止再次点击
      for(const i in _that.subjectData){
          _that.subjectData[i].disabled = false;
          for(const j in _that.selectList){
              if(_that.subjectData[i].name == _that.selectList[j].campus){
                  _that.subjectData[i].disabled = true;
                  break;
              }
          }
      }
    },
    changeDialog($index, data) {
      const _that = this;
      for (const i in _that.selectList) {
        if (_that.selectTitle == _that.selectList[i].title) {
          _that.selectList[i].campus = data[$index].name;
          _that.selectList[i].data = data[$index].specialities;
          break;
        }
      }
      _that.dialogVisible = false;
    }
  },
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由的 meta
    to.meta.keepAlive = true; // B 跳转到 A 时，让 A 缓存，即不刷新
    next();
  },
  mounted: function() {
    const _that = this;
    _that.getListData();
    if (_that.$store.scoreData) {
      _that.scoreData = _that.$store.scoreData;
    }
    // else{
    //     _that.$router.push('/recordEntry');
    // }
  }
};
</script>

<style lang="less">
.autoHeight {
  display: block;
  content: "";
  clear: both;
}
.batchFill {
  width: 80%;
  height: 100%;
  overflow-y: auto;
  margin: 0 auto;
  section {
    height: calc(100% - 50px);
  }
  .el-steps {
    margin-top: 0 !important;
  }
  .el-header {
    background: #f2f0f0;
    height: 50px !important;
    h3 {
      min-width: 240px;
      padding: 10px 0;
      margin: 0;
      line-height: 30px;
    }
    .scoreUl {
      list-style: none;
      height: 30px;
      line-height: 30px;
      width: 100%;
      padding: 10px 0;
      margin: 0;
      li {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        label {
          width: 40px;
          height: 30px;
          line-height: 30px;
          float: left;
          font-size: 14px;
        }
        .scoreLiDiv {
          text-align: left;
          color: #fc8505;
          font-weight: 600;
          margin-left: 44px;
          font-size: 15px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
  .el-main {
    margin-top: 10px;
    background: #fff;
    height: calc(100% - 60px);
    padding: 10px 0;
    .selectHead {
      width: 100%;
      height: 30px;
      ul {
        list-style: none;
        padding: 0;
        li {
          float: left;
          line-height: 30px;
          font-weight: 600;
          span {
            cursor: pointer;
            margin-left: 10px;
            font-size: 12px;
            font-weight: 200;
            i {
              color: #67bacf;
            }
          }
        }
        > li:first-child {
          width: calc(10% - 2px);
          border: 1px solid #ececec;
          border-right: 0;
          height: 30px;
        }
        > li:nth-child(2) {
          width: calc(60% - 1px);
          border: 1px solid #ececec;
          border-right: 0;
          height: 30px;
        }
        > li:last-child {
          width: calc(30% - 1px);
          border: 1px solid #ececec;
          height: 30px;
        }
      }
    }
    .selectBody {
      width: 100%;
      height: 50px;
      .selectItem {
        width: 100%;
        height: 180px;
        ul {
          list-style: none;
          width: 100%;
          padding: 0;
          margin: 0;
          li {
            float: left;
            font-weight: 600;
            overflow-y: auto;
            p.vertical {
              margin: 0 auto;
              height: calc(100% - 60px);
              padding-top: 60px;
              line-height: 20px;
              width: 14px;
            }
            span {
              cursor: pointer;
              margin-left: 10px;
              font-size: 12px;
              font-weight: 200;
              i {
                color: #67bacf;
              }
            }
          }
          > li:first-child {
            width: calc(10% - 2px);
            border: 1px solid #ececec;
            border-right: 0;
            border-bottom: 0;
            height: 180px;
          }
          > li:nth-child(2) {
            width: calc(60% - 1px);
            border: 1px solid #ececec;
            border-right: 0;
            border-bottom: 0;
            height: 180px;
            .selectNot2Body {
              width: 100%;
              height: 180px;
              .Not2Body {
                width: 100%;
                height: 139px;
                .Not2BodyBtn {
                  width: 80%;
                  height: 60px;
                  line-height: 60px;
                  margin: 0 auto;
                  .el-input {
                    width: calc(100% - 160px);
                    height: 60px;
                    float: left;
                  }
                  .el-button {
                    padding: 0;
                    margin-left: 10px;
                    margin-top: 12px;
                    line-height: 36px;
                    width: 90px;
                    float: left;
                  }
                }
              }
              .Not2Bottom {
                width: 100%;
                height: 40px;
                border-top: 1px solid #ececec;
                .Not2BottomLeft {
                  width: 70px;
                  float: left;
                  height: 40px;
                  border-right: 1px solid #ececec;
                }
                .Not2BottomRight {
                  width: calc(100% - 71px);
                  line-height: 40px;
                  float: left;
                  height: 40px;
                }
              }
            }
          }
          > li:last-child {
            width: calc(30% - 1px);
            border: 1px solid #ececec;
            height: 180px;
            border-bottom: 0;
            .lastDiv {
              width: 100%;
              height: 30px;
              line-height: 30px;
              span.lastNum {
                width: 30px;
                line-height: 30px;
                text-align: center;
                float: left;
              }
              .el-input {
                width: calc(100% - 140px);
                line-height: 30px;
                height: 30px;
                float: left;
                .el-input__inner {
                  line-height: 24px;
                  height: 24px;
                }
              }
              .el-button {
                width: 60px;
                padding: 0;
                margin-left: 10px;
                margin-top: 2px;
                line-height: 22px;
                text-align: center;
                float: left;
              }
            }
          }
        }
        > ul:first-child > li {
          border-top: 0;
        }
        > ul:last-child > li {
          border-bottom: 1px solid #ececec;
        }
      }
      .dialogClass {
        text-align: left;
      }
      // ul{
      //     list-style: none;
      //     li{
      //         float: left;
      //         line-height: 30px;
      //         font-weight: 600;
      //         span{
      //             cursor: pointer;
      //             margin-left: 10px;
      //             font-size: 12px;
      //             font-weight: 200;
      //             i{
      //                 color: #67BACF;
      //             }
      //         }
      //     }
      //     >li:first-child{
      //         width: calc(10% - 2px);
      //         border:1px solid #ececec;
      //         border-right: 0;
      //         height: 30px;
      //     }
      //     >li:nth-child(2){
      //         width: calc(60% - 1px);
      //         border:1px solid #ececec;
      //         border-right: 0;
      //         height: 30px;
      //     }
      //     >li:last-child{
      //         width: calc(30% - 1px);
      //         border:1px solid #ececec;
      //         height: 30px;
      //     }
      // }
    }
  }
}
</style>
