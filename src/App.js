import React, { useEffect } from 'react';
import './App.css';
import data from './data/index'

import {
  Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Bar, ComposedChart, ResponsiveContainer
} from 'recharts';

function App() {

  useEffect( () => {
    let lConfirmedCases
    let lDeathCases
    data.forEach(element => {
      if (lConfirmedCases > 0 && lDeathCases > 0) {
        element.PConfirmedCases = calc(lConfirmedCases, element.confirmedCases)
        element.PDeathCases = calc(lDeathCases, element.deathCases)
      }
      lConfirmedCases = element.confirmedCases
      lDeathCases = element.deathCases
    });
  }, [])

  function calc(lastValue, newValue) {
    const percentage = ''+(1-(lastValue / newValue)) * 100

    return percentage.substring(0,5)
  }

  return (
    <div className="App">
      <div>
        <p className="App-header">
          Covid-19 Brasil - Acompanhamento do Gráfico e simulações
        </p>
      </div>
      <div>
        <p className="MediumText">
          Os dados são coletados das fontes oficias sempre no final do dia
          <br/><br/>
          Projeto está sendo desativado ou será atualizado com menos frequência já que o Ministério da Saúde lançou um site que tem a mesma ideia de visualização de dados que existe nesse site.
          <br/><br/>
          Acesse <a href="http://covid.saude.gov.br/">http://covid.saude.gov.br/</a>
        </p>
        <p className="SmallText">
          Para atualizar os dados deste gráfico é necessário fazer um update no arquivo dentro da pasta <b>data</b> no repositório <a href="https://github.com/brunopenso/covid19brasilsrc" target="_blank" rel="noopener noreferrer">brunopenso/covid19brasilsrc</a>
        </p>
      </div>
      
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
        <div className="container">
          <ResponsiveContainer width='90%' aspect={1.6} minWidth={300}>
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
                <Legend layout="vertical" align="center" verticalAlign="bottom" iconSize="12"/>
                <Bar dataKey="PDeathCases" barSize={20} fill="#413ea0" name="% de casos em relação D-1"/>
                <Line type="monotone" dataKey="deathCases" stroke="#8884d8" activeDot={{ r: 8 }} name="Mortes"/>
              </ComposedChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default App