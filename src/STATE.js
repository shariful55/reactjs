import React, { Component } from 'react'

export default class STATE extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
     handleIncreement= () => {
        this.setState({
            count:this.state.count+1
        })
    }
     handleDecreement= () => {
        this.setState({
            count:this.state.count-1
        })
    }


    render() {
        const {count}=this.state;
        return (
            <div>
                <h2>Count: { count}</h2>
                <div>
                <button className="button" onClick={this.handleIncreement} >+</button>
                <button className="button" onClick={this.handleDecreement} >-</button>
                </div>
               
            </div>
        )
    }
}
