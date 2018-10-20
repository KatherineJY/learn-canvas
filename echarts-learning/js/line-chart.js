(function(){
    echarts.init(document.getElementById("line-chart")).setOption({
        title:{text:'line chart'},
        tooltip:{},
        toolbox:{
            feature:{
                dataView:{},
                saveAsImage:{
                    piexelRatio:10 //保存图片的分辨率
                },
                restore:{}
            }
        },
        xAxis:{},
        yAxis:{},
        series:[{
            type:'line',
            smooth:true,
            data:[[12,5],[24,20],[36,36],[48,10],[60,10],[72,20]]
        }]
    });
})();