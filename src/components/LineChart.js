import ReactECharts from 'echarts-for-react';
import React, { useState, useEffect,useRef } from 'react';
import { Layout,Row,Col } from 'antd';
let ShangzhengData={
  xaxis:[],
  data:[],
};
let ShenzhengData={
  xaxis:[],
  data:[],
};
let ChuangyeData={
  xaxis:[],
  data:[],
};
const fetchNewDate=(a)=>{
  let now = new Date(2021,10,31,9,30);
  let tmp = 3278.36;
  
  return ()=>{
    a.xaxis.push([now.getHours(),now.getMinutes()].join(":"))
    now = new Date(+now + 60*1000)
    let j = Math.round(Math.random());
    if (j === 1) {tmp+=Math.round(Math.random()*100)/100+1};
    if( j === 0){tmp-=Math.round(Math.random()*100)/100}
    a.data.push(tmp);
  }
}
const Shangzheng = () => {
  const instance = useRef(null);
  let n1 = fetchNewDate(ShangzhengData)
  useEffect(() => {
    const timer = setInterval(() => {
      n1();
      instance.current.getEchartsInstance().setOption(option)
    }, 1000);

    return () => clearInterval(timer);
  });
    const option = {
        title:{
            text:"上证指数"
        },
        xAxis: [
          {
      
            type: 'category',
            // prettier-ignore
            data:ShangzhengData.xaxis 
          }
        ],
        yAxis: [
          {
              scale:"false",
            type: 'value'
          }
        ],
        tooltip: {},
        series: [
          {
            name: '上证指数',
            type: 'line',
            data:ShangzhengData.data,
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
        ]
      };
  return <ReactECharts
    option={option}
    style={{ height: 300 }}
    ref={instance}
  />;
};
const Shenzheng = () => {
  const instance = useRef(null);
  let n1 = fetchNewDate(ShenzhengData)
  useEffect(() => {
    const timer = setInterval(() => {
      n1();
      instance.current.getEchartsInstance().setOption(option)

    }, 1000);

    return () => clearInterval(timer);
  });
    const option = {
        title:{
            text:"深证指数"
        },
        xAxis: [
          {
      
            type: 'category',
            // prettier-ignore
            data:ShenzhengData.xaxis 
          }
        ],
        yAxis: [
          {
              scale:"false",
            type: 'value'
          }
        ],
        tooltip: {},
        series: [
          {
            name: '深证指数',
            type: 'line',
            data:ShenzhengData.data,
             markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
        ]
      };
  return <ReactECharts
    option={option}
    style={{ height: 300 }}
    ref={instance}
  />;
};
const Chuangye = () => {
  const instance = useRef(null);
  let n1 = fetchNewDate(ChuangyeData)
  useEffect(() => {
    const timer = setInterval(() => {
      n1();
      instance.current.getEchartsInstance().setOption(option)

    }, 1000);

    return () => clearInterval(timer);
  });
    const option = {
        title:{
            text:"创业扳指"
        },
        xAxis: [
          {
      
            type: 'category',
            // prettier-ignore
            data:ChuangyeData.xaxis
          }
        ],
        yAxis: [
          {
              scale:"false",
            type: 'value'
          }
        ],
        tooltip: {},
        series: [
          {
            name: '创业扳指',
            type: 'line',
            data:ChuangyeData.data,
             markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
        ]
      };
  return <ReactECharts
    option={option}
    style={{ height: 300 }
  }
  ref={instance}

  />;
};

const LineChart=()=>{
    return (
        <Row gutter={16}>
          <Col span="8">
          <Shangzheng />
          </Col>
          <Col span="8">
          <Shenzheng />
          </Col>
          <Col span="8">
          <Chuangye />
          </Col>
          </Row>
    )
}
export default LineChart;