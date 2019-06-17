<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <div>{{ raw }}</div> -->
    <button @click="getData">点击获取</button>

    <table class="table">  
        <thead>
            <tr>
                <th class="col1">姓名</th>
                <th class="col1">年纪</th>
                <th class="col1">身高</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="(item, index) in datas" :key="index">
                <td class="col2">{{item.name}}</td>
                <td class="col2">{{item.age}}</td>
                <td class="col2">{{item.height}}</td>
            </tr>
        </tbody>
    </table>

    <!-- <table>
      <thead>
        <th>
          <tr>姓名</tr>
          <tr>年纪</tr>
          <tr>身高</tr>
        </th>
      </thead>
      <tbody>
        <td v-for="(item, index) in datas" :key="index">
          <tr>{{item.name}}</tr>
          <tr>{{item.age}}</tr>
          <tr>{{item.height}}</tr>
        </td>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '测试socket',
      raw: '',
      datas: [],
    }
  },
  methods: {
    getData() {
            var ws = new WebSocket('ws://localhost:3300');

          ws.onopen = function(e){
              console.log("连接服务器成功");
              ws.send("game1");
          }
          ws.onclose = function(e){
              console.log("服务器关闭");
          }
          ws.onerror = function(){
              console.log("连接出错");
          }

          ws.onmessage = (e)=>{
            console.log(this.msg)
            this.raw = e.data;
            // ws.send('123')
            
            let index = e.data.indexOf(',', 10) + 1;
            console.log(e.data, e.data.indexOf(',', 10), e.data.slice(index, -1))
            let data = JSON.parse(e.data.slice(index, -1));
            if (data.length>0){
              this.datas = data;
            }

               console.log(this.datas, this.datas instanceof Array );
             this.datas.map(v => {
             })
          }
      
    },
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.table{
    margin:20px auto;
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: #515a6e;
    font-size: 12px;
    background-color: #f8f8f9; 
    border: 1px solid #dcdee2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.table .col1{ padding:10px 0;border-right: 1px solid #dcdee2;width: 25%; text-align:center;}
.table .col1:last-child {border: 0;}
.table .col2{ padding:10px 0;border-right: 1px solid #dcdee2; background-color: #fff;text-align:center;}
.table .col2:last-child {border: 0;}
</style>
