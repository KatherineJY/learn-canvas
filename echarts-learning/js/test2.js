(function(){
    let myChart = echarts.init(document.getElementById("chart"));
    let options = {
        title:{
            text:'复杂的图表',
            subtext:'试一下'
        },
        legend:{
            data:['购买金额','销售金额']
        },
        xAxis:{
            data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
        },
        yAxis:{

        },
        tooltip:{
            show:true,
            formatter:'系列名:{a}<br/>类目:{b}<br/>数值:{c}'
        },
        series:[{
            name:'购买金额',
            type:'bar',
            data:[200,312,431,241,175,275,369],
            markPoint:{
                data:[
                    {type:'max',name:'最大值'},
                    {type:'min',name:'最小值'}
                ]
            },
            markLine:{
                data:[
                    {type:'average',name:"平均值",itemStyle:{
                        normal:{
                            color:'green'
                        }
                    }}
                ]
            }
        },{
            name:'销售金额',
            type:'line',
            data:[321,432,543,376,286,298,400],
			markPoint: {
	            data: [
	                {type: 'max', name: '最大值'},
	                {type: 'min', name: '最小值'}
	            ]
	        },
	        markLine:{
	            data:[
	            	{type:'average',name:'平均值',itemStyle:{
	        			normal:{
	        				color:'blue'
	        			}
                    }}
	            ]
	        }
        }]
    };
    myChart.setOption(options);
})();