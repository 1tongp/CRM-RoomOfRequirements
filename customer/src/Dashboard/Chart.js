import React from 'react';
import { Line } from '@ant-design/charts';
import { Bar } from '@ant-design/charts';

export function Chart() {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };
  return <Line {...config} />;
};


export function DemoBar() {
  var data = [
    {
      year: '1951',
      value: 38,
    },
    {
      year: '1952',
      value: 52,
    },
    {
      year: '1956',
      value: 61,
    },
    {
      year: '1957',
      value: 145,
    },
    {
      year: '1958',
      value: 48,
    },
  ];
  var config = {
    data: data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};