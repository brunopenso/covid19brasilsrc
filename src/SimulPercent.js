import React, { useEffect, useState } from 'react';
import './App.css';

import {
  Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Bar, ComposedChart, ResponsiveContainer
} from 'recharts';

function SimulPercent(props) {

  const [data, setData] = useState([])
  const [percentage, setPercentage] = useState(0)

  useEffect( () => {
    setData(props.data)
    setPercentage(props.percentage)

    data.forEach(element => {
      console.log(element.confirmedCases)
      element.confirmedCases = calc(element.confirmedCases, percentage)
      console.log(element.confirmedCases)
      element.deathCases = calc(element.deathCases, percentage)
    });
  }, [props.data, props.percentage])

  function calc(value, percentage) {
    return Math.round(value + (value * (percentage/100)))
  }

  return (
    <div className="flex-container">
      <div className="container">
        <ResponsiveContainer width='90%' aspect={1.6} minWidth={300}>
          <ComposedChart
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend layout="vertical" align="center" verticalAlign="bottom" iconSize="12"/>
            <Bar dataKey="PConfirmedCases" barSize={20} fill="#413ea0" name="% de casos em relação D-1"/>
            <Line type="monotone" dataKey="confirmedCases" stroke="#8884d8" activeDot={{ r: 2 }} name="casos confirmados"/>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SimulPercent;