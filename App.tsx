import { NativeBaseProvider, StatusBar } from 'native-base';
import { useEffect } from 'react';

import Rotas from './src/Rotas';
import api from './src/servicos/api';
import { TEMAS } from './src/estilos/temas'

export default function App() {

  useEffect(() => {
    async function pegarDados(){
      const resultado = await api.get('/paciente')
      console.log(resultado.data)
    }
    pegarDados()
  })

  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas/>
    </NativeBaseProvider>
  );
}