import React from 'react';
import {ComponenteDaMensagem} from './components/mensagem/ComponenteDaMensagem.js'
import styled from 'styled-components'


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


function App() {
  return (
    <Container>

      <Quadradao>{/*DIV do quadradão*/}   
        <DivMsg> {/*DIV dos inputs e botao*/}
          {/* <componenteUsuario> </componenteUsuario> */}
          <ComponenteDaMensagem />  
          <button></button>

        </DivMsg> {/*DIV dos inputs e botao*/}
      </Quadradao>

    </Container> 
  );
}

export default App;