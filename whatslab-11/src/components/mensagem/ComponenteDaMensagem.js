import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
    width: 70%;
    height: 100%;
    border: 1px solid red;
`

export class ComponenteDaMensagem extends React.Component 
{
    /*Definição do estado do input que recebe a mensagem. Começa com string vazia pois o estado inicial
        é vazio.*/
    State = 
    {
        valorInputMensagem: " "
    }

    /*Mas o que queremos mesmo é que o usuário insira algum valor no input e que este seja alterado por 
      este valor, então precisamos jogar um onChange<nome-da-função> pra fazer essa alteração.*/
    onChangeValorInputMensagem = (event) => 
    {
        this.setState({valorInputMensagem: event.target.value})
    }

    render () {
    return (

            <div>
                <InputStyle placeholder={"mensagem"} onChange={this.onChangeValorInputMensagem} value={this.state.valorInputMensagem}/>
            </div>
        
            )

    }
}
