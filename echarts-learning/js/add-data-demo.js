var oneDay = 24*3600*1000;
var date = [];
var data = [Math.random()*150];
var base = +new Date(2014,9,3);
var now = new Date(base);

function addData(shift){
    now = [now.getFullYear(),now.getMonth()+1,now.getDate()].join('/');
    date.push(now);
    data.push( (Math.random()-0.4)*10 + data[data.length-1] );

    if(shift){
        date.shift();
        data.shift();
    }

    now = new Date(+new Date(now)+oneDay);
}

(function(){
    let dom = document.getElementById("container");
    let myChart = echarts.init(dom);

    for(let i=1;i<100;i++){
        addData();
    }

    let option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,//界限
            data: date
        },
        yAxis: {
            boundaryGap: [0, '50%'],//界限
            type: 'value'
        },
        series: [
            {
                name:'成交',
                type:'line',
                smooth:true,
                symbol: 'none',
                stack: 'try try',
                areaStyle: {
                    normal: {}
                },
                data: data
            }
        ]
    };

    setInterval(function () {
        addData(true);
        myChart.setOption({
            xAxis: {
                data: date
            },
            series: [{
                name:'成交',
                data: data
            }]
        });
    }, 500);

    myChart.setOption(option);

})();