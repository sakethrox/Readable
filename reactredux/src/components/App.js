import React, { Component } from 'react'
import { changeName } from '../actions'

class App extends Component{
    state = {
        students:null,
    }
    componentDidMount(){
        const {store} = this.props
        store.subscribe(() => {
            this.setState({
                students: store.getState()
            })
        })
    }
    submitStudent = () => {
        this.props.store.dispatch(changeName({
            id:this.input1.value, name:this.input.value}))
        this.input.value = '' ;
        this.input.value1 = '' ;
        }


    render(){
        return (
            <div>
                {JSON.stringify(this.state)}
                <br/>
                <input type="text"
                       ref={(input) => this.input1 = input}
                       placeholder="student's id"/>
                <br/>
                <input type="text"
                       ref={(input) => this.input = input}
                       placeholder="student's name"/>
                <br/>
                <button onClick={this.submitStudent}>Submit</button>
            </div>
        )
    }
}
export default App