import {Tabs} from 'antd';
import React from 'react';
import ReactECharts from 'echarts-for-react';
const Page1 = () => {
    const option = {
     toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
      
            type: 'category',
            // prettier-ignore
            data: ['跌停', '-7%', '-5%', '-3%', '-1%', '1%', '3%', '5%', '7', '涨停']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            stack:"1",
            itemStyle:{
              color:"rgb(215,84,68)",
              borderRadius: [10, 10, 0, 0]
            },
            name: '涨',
            type: 'bar',
                  label: {
              show: true,
              position: 'top'
            },
            barWidth:20,
            data: [
              '-', '-', '-','-', '-', 1073, 333, 166, 72, 103,
            ],
      
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: '跌',
            type: 'bar',
            stack:"1",
            label: {
              show: true,
              position: 'top'
            },
            itemStyle:{
              color:"rgb(94,181,133)",
              borderRadius: [10, 10, 0, 0]
            },
            data: [
              18, 39, 154, 698, 1814, '-', '-', '','', '', 
            ],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          }
        ]
      };
  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};
const Page2=()=>{
  const option = {
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: {
      type: 'category',
      data: ['10.20', '10.21', '10.22', '10.23', '10.24', '10.25', '10.26']
    },
    yAxis: {
      type: 'value'
    },
    tooltip:{
      trigger:"axis"
    },
    series: [
      {
        name:"五日平均涨停",
        data: [8, 15, 23, 25, 27, 30, 35],
        type: 'line'
      },
      {
        name:"涨停",
        data: [5, 7, 12, 14, 15, 16, 23],
        type: 'line'
      },
      {
        name:"跌停",
        data: [3, 4, 7, 8, 9, 14, 17],
        type: 'line'
      }
    ]
  };
  return <ReactECharts option={option} style={{ height:400}} />
};
const Page3=()=>{
  const option = {
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
  xAxis: {
    type: 'category',
    data: ['10:20', '10:21', '10:22', '10:23', '10:24', '10:25', '10:26']
  },
  yAxis: {
    type: 'value'
  },
  tooltip:{
    trigger:"axis"
  },
  series: [
    {
      name:"今日收益",
      data: [0.01, 0.02, 0.03, 0.05, 0.07, 0.04, 0.05],
      type: 'line'
    }
  ]
};
  return <ReactECharts option={option} style={{ height:400}} />
};

const {TabPane}=Tabs
function ShiChangTabs(){
    return (
        <div>
        <Tabs defaultActiveKey="1" tabPosition="left" style ={{height:400}}>
            <TabPane tab = "涨跌分布" key ={1} >
                <Page1 />
            </TabPane>
            <TabPane tab = "涨跌停" key ={2} >
                <Page2 />
            </TabPane>
            <TabPane tab = "昨日涨停今日收益" key ={3} >
                <Page3 />
            </TabPane>
        </Tabs>
    </div>
    )
    
}
export default ShiChangTabs