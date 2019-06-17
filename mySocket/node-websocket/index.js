var ws = require("nodejs-websocket");
console.log("开始建立连接...")

var server = ws.createServer(function(conn){
    conn.on("text", function (data) {
        console.log("收到的信息为:"+ data)
        // let str = ''
        setTimeout(()=>{  
            let str = '{"001","0101",[{"name": "jwbffbw", "age": '+ 2 + ', "height": 160}]}';
                conn.sendText(str)
        }, 1000)
        setTimeout(()=>{  
            let str = '{"001","0101",[{"name": "nf", "age": '+ 4 + ', "height": 160}]}';
                conn.sendText(str)
        }, 2000)
        setTimeout(()=>{  
            let str = '{"001","0101",[]}';
                conn.sendText(str)
        }, 3000)
        setTimeout(()=>{  
            let str = '{"001","0101",[{"name": "sss", "age": '+ 7 + ', "height": 160}]}';
                conn.sendText(str)
        }, 4000)
        setTimeout(()=>{  
            let str = '{"001","0101",[{"name": "ttg", "age": '+ 8 + ', "height": 160}]}';
                conn.sendText(str)
        }, 5000)
        setTimeout(()=>{  
            let str = '{"001","0101",[{"name": "ck", "age": '+ 9 + ', "height": 160}]}';
                conn.sendText(str)
        }, 6000)
        setTimeout(()=>{  
            let str = '{"001","0101",[{"name": "ack", "age": '+ 20 + ', "height": 160}]}';
                conn.sendText(str)
        }, 7000)
        setTimeout(()=>{  
            let str = '{"001","0101",[{"name": "jack", "age": '+ 30 + ', "height": 160}]}';
                conn.sendText(str)
        }, 9000)

 
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(3300)
console.log("WebSocket建立完毕")