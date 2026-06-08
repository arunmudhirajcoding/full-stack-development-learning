// src/Dashboard.js
import React from 'react';
import Chart from 'chart.js/auto';
import _ from 'lodash';

export default function Dashboard() {
  console.log(_.shuffle([1,2,3,4]));
  return <h1>Dashboard (Heavy)</h1>;
}