import React from 'react';
import './App.css';
import data from './data/index'
/*
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, Scatter,
} from 'recharts';*/

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Covid-19 Brasil - Acompanhamento do Gráfico e simulações
        </p>
        <p className="SmallText">
          Para atualizar os dados deste gráfico é necessário fazer um update no arquivo dentro da pasta <b>data</b>
        </p>
      </header>
      <div className="rowContent">
        <div className="content">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="confirmedCases" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
        <div className="content">
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="deathCases" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
        
      </div>
    </div>
  );
}

export default App;
/*
<ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
        <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="deathCases" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="confirmedCases" stroke="#ff7300" />
        </ComposedChart>
*/
//<Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />