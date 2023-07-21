## Gerador de Senha

O Gerador de Senha é um componente React que permite gerar senhas aleatórias com base no tamanho especificado pelo usuário. O componente apresenta uma interface simples, onde o usuário pode definir o tamanho da senha e, em seguida, clicar em um botão para gerar uma senha aleatória.

### Funcionalidades

- Escolher o tamanho da senha desejada, variando de 6 a 35 caracteres.
- Gerar senhas aleatórias com base no tamanho especificado.
- Copiar a senha gerada para a área de transferência com um único clique.
- A interface exibe a senha gerada e um botão de cópia para facilitar o acesso.

### Como usar

1. Instalação das dependências:
   Certifique-se de ter instalado o Chakra UI, React Icons e a função `gerarSenha` corretamente. Caso contrário, você precisará instalar essas dependências antes de utilizar o componente.

2. Importação do componente:
   Para usar o Gerador de Senha em sua aplicação React, importe o componente no arquivo onde você deseja utilizá-lo:

```javascript
import Gerador from './Gerador';
```

3. Utilização:
   Basta adicionar o componente `<Gerador />` ao local onde você deseja exibir o gerador de senhas em sua aplicação.

```javascript
function App() {
  return (
    <div>
      {/* Outros componentes */}
      <Gerador />
    </div>
  );
}

export default App;
```

### Personalização

O componente Gerador de Senha pode ser personalizado de acordo com as necessidades do projeto. As cores, tamanhos, estilos e funcionalidades podem ser ajustados utilizando o Chakra UI e as propriedades dos elementos React.

### Dependências

- React: [https://reactjs.org/](https://reactjs.org/)
- Chakra UI: [https://chakra-ui.com/](https://chakra-ui.com/)
- React Icons: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

### Licença

Este componente está disponível sob a [MIT License](LICENSE).
