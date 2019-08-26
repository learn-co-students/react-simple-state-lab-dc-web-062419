import React, { Component } from 'react';


export default class Cell extends Component{

    constructor(props){
        super(props);
        // debugger
    this.state = { 
        color: this.props.value
    }
    
    }


    changeColor = () => {
        debugger
        this.setState({ color: '#333' })
    }


    render(){
        // debugger

        return(
            <div onClick={this.changeColor} className='cell' style={{backgroundColor: this.state.color}} >
            
            </div>
        )

    }

}
// style={{this.state.color}}
// onClick={this.props.changeColor} 