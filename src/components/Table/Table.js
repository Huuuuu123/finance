import { Component } from "react";
import data from "./data"
import { Table } from 'antd';
const columns = [
    {
      title: '序号',
      dataIndex: 'order',
    },
    {
      title: '代码',
      dataIndex: 'code',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '现价',
      dataIndex: 'current_price',
      sorter: (a, b) => a.current_price - b.current_price,
    },
    {
      title: '涨跌幅（%）',
      dataIndex: 'fluctuation_range',
      sorter: (a, b) => a.fluctuation_range - b.fluctuation_range,
    },
    {
      title: '涨跌',
      dataIndex: 'chg',
      sorter: (a, b) => a.chg - b.chg,
    },
    {
      title: '涨速（%）',
      dataIndex: 'rising_speed',
      sorter: (a, b) => a.rising_speed - b.rising_speed,
    },
    {
      title: '换手（%）',
      dataIndex: 'turnover_rate',
      sorter: (a, b) => a.turnover_rate - b.turnover_rate,
    },
    {
      title: '量比',
      dataIndex: 'lmr',
      sorter: (a, b) => a.lmr - b.lmr,
    },
    {
      title: '振幅（%）',
      dataIndex: 'amplitude',
      sorter: (a, b) => a.amplitude - b.amplitude,
    },
    {
      title: '成交额',
      dataIndex: 'turnover',
      sorter: (a, b) => a.turnover.slice(0,-1) - b.turnover.slice(0,-1),
    },
    {
      title: '流通股',
      dataIndex: 'floating_stock',
      sorter: (a, b) => a.floating_stock.slice(0,-1) - b.floating_stock.slice(0,-1),
    },
    {
      title: '流通市值',
      dataIndex: 'CMV',
      sorter: (a, b) => a.CMV.slice(0,-1) - b.CMV.slice(0,-1),
    },
    {
      title: '市盈率',
      dataIndex: 'PER',
      sorter: (a, b) => a.PER - b.PER,
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
      },
  ];
const Table1=()=>{
    return (
        <>
    <Table columns={columns} dataSource={data} />
        </>
    )

}
export default Table1;