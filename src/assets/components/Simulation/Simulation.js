import React, { useState } from 'react';
import SimulationForm from './SimulationForm';
import SimulationResult from './SimulationResult';

import api from '../../../services/api';

const Simulation = ({ estilo }) => {
  const classes = estilo;
  const [step, setStep] = useState(1);
  const [dddOrigem, setDddOrigem] = useState('');
  const [dddDestino, setDddDestino] = useState('');
  const [tempoLigacao, setTempoLigacao] = useState('');
  const [plano, setPlano] = useState('');
  const [comFaleMais, setComFaleMais] = useState(0);
  const [semFaleMais, setSemFaleMais] = useState(0);
  const [textoBotaoForm, setTextoBotaoForm] = useState('Simular');
  const [alerta, setAlerta] = useState(false);
  const [textAlerta, setTextAlerta] = useState('');

  const values = {dddOrigem, dddDestino, tempoLigacao, plano}

  const next = async () => {
    setTextoBotaoForm('Carregando...');
    await api.post('simulation', values).then((response) => {
      const [comFaleMais, semFaleMais] = response.data;
      setSemFaleMais(semFaleMais);
      setComFaleMais(comFaleMais);
    });
    if (dddOrigem === dddDestino) {
      setTextAlerta('Selecione um DDD de Destino diferente do DDD de Origem');
      setAlerta(true);
      return;
    }
    if (dddOrigem !== '11' && dddDestino !== '11') {
      setTextAlerta('Esse tipo de ligação não é permitido');
      setAlerta(true);
      return;
    }
    if (dddOrigem === '' || dddDestino === '' || tempoLigacao === '' || plano === '') {
      setTextAlerta('Não deixe nenhum campo em branco');
      setAlerta(true);
      return;
    }
    setStep(step + 1);
    setTextoBotaoForm('Simular');
  };
  const back = () => setStep(step - 1);

  const handleChange = (e, input) => {
    switch(input) {
      case 'origem': setDddOrigem(e.target.value); break
      case 'destino': setDddDestino(e.target.value); break
      case 'tempo': setTempoLigacao(e.target.value); break
      case 'plano': setPlano(e.target.value); break
      default: break
    }
  }
  switch(step) {
    case 1:
      return <SimulationForm
        next={next}
        getbtn={textoBotaoForm}
        change={handleChange}
        values={values}
        estilo={classes}
        alerta={alerta}
        textalerta={textAlerta}
        setalerta={setAlerta}
      />
    case 2:
      return <SimulationResult
        back={back}
        values={{...values, comFaleMais, semFaleMais}}
        estilo={classes}
      />
    default: break
  }
}

export default Simulation;