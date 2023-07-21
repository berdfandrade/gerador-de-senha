
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import GeradorDeSenha from './Componentes/Gerador';

function App() {
  return (
      <ChakraProvider>
        <GeradorDeSenha />
      </ChakraProvider>
  );
}

export default App;
