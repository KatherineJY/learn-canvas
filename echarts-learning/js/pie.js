(function(){
    echarts.init(document.getElementById('pie')).setOption({
        backgroundColor: '#2c343c',
        visualMap: {
            show: false,
            //映射的最小值
            min: 300,
            //映射的最大值
            max: 1800,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series:[{
            type:'pie',
            radius:'55%', //饼图的半径
            roseType: 'angle',//玫瑰图
            data:[
                {name:'A',value:1213},
                {name:'B',value:1523},
                {name:'C',value:633},
            ],
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 0, 1)'
                    }
                }
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 1)'
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                emphasis: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 1)'
                }
            }
        }]
    })
})();