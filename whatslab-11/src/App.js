import React from 'react';
import {ComponenteDaMensagem} from './components/mensagem/ComponenteDaMensagem.js'
import styled from 'styled-components'

/*Estilização com styled-components*/
const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Quadradao = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 99vh;
  display: flex;
  align-items: flex-end;
`
const DivMsg = styled.div`
  width: 100%;
  height: 30px;
`

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Quadradao = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 99vh;
  display: flex;
  align-items: flex-end;
`
const DivMsg = styled.div`
  width: 100%;
  height: 30px;
`
/*Estilização com styled-components*/

/*Início do componente App*/
function App() {
  return (
    <Container>

      <Quadradao>  
        <DivMsg> 
          
          {/*Chamada do componente correspondente à lista de usuários*/}
          {/*<ComponenteDoUsuario/>*/}
          {/*Chamada do componente correspondente à lista de usuários*/}

          {/*Chamada do componente correspondente ao input de mensagens*/}
          <ComponenteDaMensagem/>  
          {/*Chamada do componente correspondente ao input de mensagens*/}

          {/*Chamada do componente correspondente ao botão de enviar*/}
          {/*<ComponenteDoBotao/>*/}  
          {/*Chamada do componente correspondente ao botão de enviar*/}

        </DivMsg> 
      </Quadradao>
    </Container> 
  );
}
/*Início do componente App*/

/*Exportação do componente App*/
export default App;
/*Exportação do componente App*/