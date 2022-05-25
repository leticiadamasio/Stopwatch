import React, {Component} from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Cogsworth from './img/Cogsworth.png'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`
const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  margin-top: 12vh;
  margin-left: 45%;
  font-size: 8vh;
`
const Number = styled.h2`
  font-size: 8vh;
  margin-top: 10%;
  margin-bottom: 2%;
  margin-left: 52.5%;
`
const Buttons = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: flex;
  justify-content: space-around;
  width: 20vw;
  margin-top: 2vh;
  margin-left: 43%;

  button{ 
    border: solid 2px black;
    cursor: pointer;
    background-color:#A0522D;
    font-size: 3vh;
    width: 5vw;
    height: 5vh;
  }
`
const Image = styled.img`
  height: 50vh;
  position:fixed;
  left: 25vw;
  bottom: 15vh;
`

export default class App extends Component {
  state = { 
    num: 0
  }

  start = () => {
    const Iniciar = setInterval (() => {
      this.setState({ num: this.state.num + 1 });
    }, 1000)

    this.stop = () => {
      clearInterval(Iniciar);
    }
  }
  resetar = () => {
    this.setState({ num: 0 });
  }

  render(){
    return(
      <>
      <GlobalStyle/>
      <div>
      <Title>Cronômetro</Title>
      </div>
      <div>
      <Number>{this.state.num}</Number>
      </div>
      <Buttons>
      <button onClick={() => {this.start()}}>Start</button>
      <button onClick={() => {this.stop()}}>Stop</button>
      <button onClick={() => {this.resetar()}}>Restart</button>
      </Buttons>
      <Image src={Cogsworth} />
      </>
    )
  }
}