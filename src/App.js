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
  Bar, ComposedChart
} from 'recharts';

function App() {
  let lConfirmedCases
  let lDeathCases
  data.forEach(element => {
    if (lConfirmedCases > 0 && lDeathCases > 0) {
      element.PConfirmedCases = (1-(lConfirmedCases / element.confirmedCases)) * 100
      element.PDeathCases = (1-(lDeathCases / element.deathCases)) * 100
    }
    lConfirmedCases = element.confirmedCases
    lDeathCases = element.deathCases
  });

  return (
    <div className="App">
        <p className="App-header">
          Covid-19 Brasil - Acompanhamento do Gráfico e simulações
        </p>
      <div>
        <p className="SmallText">
          Para atualizar os dados deste gráfico é necessário fazer um update no arquivo dentro da pasta <b>data</b>
        </p>
        <p className="MediumText">
          Os dados são coletados das fontes oficias sempre no final do dia
        </p>
      </div>
      
      <div className="flex-container">
        <div>
          <ComposedChart
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
            <Bar dataKey="PConfirmedCases" barSize={20} fill="#413ea0" name="% de casos em relação D-1"/>
            <Line type="monotone" dataKey="confirmedCases" stroke="#8884d8" activeDot={{ r: 2 }} name="casos confirmados"/>
          </ComposedChart>
        </div>
        <div>
        <ComposedChart
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
            <Bar dataKey="PDeathCases" barSize={20} fill="#413ea0" name="% de casos em relação D-1"/>
            <Line type="monotone" dataKey="deathCases" stroke="#8884d8" activeDot={{ r: 8 }} name="Mortes"/>
          </ComposedChart>
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