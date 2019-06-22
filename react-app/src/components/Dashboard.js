import React, {Component} from 'react';
import Display1 from './Display';

class Dashboard extends React.Component {
constructor(props){
    super(props)
    this.state={
        strike: 0,
        ball: 0,
        foul: 0,
        hit: 0
    }
}

strikeH=() =>{
    {this.state.strike < 2? (
    this.setState(prevState => {
        return {
            strike: prevState.strike +1,
        }
    })) : (
        this.setState(prevState => {
            return {
                strike: 0,
                ball: 0
            }
        })) 
    }
    console.log('strike:', this.state.strike, 'ball:', this.state.ball, 'hit:', this.state.hit);
    
    }


ballH=() =>{
     {this.state.ball < 3? (
    this.setState(prevState => {
        return {
            ball: prevState.ball +1,
        }
    })) : (
        this.setState(prevState => {
            return {
                ball: 0,
                strike: 0
            }
        })) 
    }
    console.log('strike:', this.state.strike, 'ball:', this.state.ball, 'hit:', this.state.hit);
    
    }


    hitH=() =>{
        this.setState(prevState => {
            return {
                hit: prevState.hit +1,
                ball: 0,
                strike: 0
            }
        })
        console.log('strike:', this.state.strike, 'ball:', this.state.ball, 'hit:', this.state.hit);
    
    }



foulH=() =>{
    {this.state.strike < 2? (
        this.setState(prevState => {
            return {
                foul: prevState.foul +1,
                strike: prevState.strike +1
            }
        })) : (
            this.setState(prevState => {
                return {
                   foul: prevState.foul +1
                }
            })) 
        }
        console.log('strike:', this.state.strike, 'ball:', this.state.ball, 'hit:', this.state.hit);
    
        }

        reset=() =>{
            this.setState({
                strike: 0,
                ball: 0,
                foul: 0,
                hit: 0
            })
        }


 render() {

return(
<>
<button onClick={this.strikeH.bind(this)}>click-strike</button>
<button onClick={this.ballH.bind(this)}>click-ball</button>
<button onClick={this.foulH.bind(this)}>click-foul</button>
<button onClick={this.hitH.bind(this)}>click-hit</button>
<button onClick={this.reset.bind(this)}>click-reset</button>

 <Display1 strike={this.state.strike} ball={this.state.ball} foul={this.state.foul} hit={this.state.hit}/> 

</>

)
 }


}

export default Dashboard;