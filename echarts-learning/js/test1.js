(function(){
    let myChart = echarts.init(document.getElementById("chart"));
    let options = {
        title:{
            text:'score'
        },
        legend:{
            data:['xiaoliang']
        },
        xAxis:{
            data:[60,70,80,90,100]
        },
        yAxis:{

        },
        series:[{
            name:'xiaoliang',
            type:'bar',
            data:['12','34','45','21','1']
        }]
    };
    myChart.setOption(options);
})();