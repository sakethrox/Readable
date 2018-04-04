import React, { Component } from 'react'
import { changeName } from '../actions'
import {connect} from 'react-redux'

class App extends Component{

    handleSubmit = () => {
        //console.log(input+' '+input1)
        this.props.dispatch(changeName({
        id:this.input.value,name:this.input1.value,
    }))
    }
    render(){
        console.log(this.props);

        return (
            <div>
                <input type="text"  ref = {(input) => {this.input = input;}}></input>
                <br/>
                <input type="text" ref = {(input) => {this.input1 = input;}}></input>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }
}
function mapStateToProps(students){
    const studentId = [1,2];
    return {
        students: studentId.map((id) => ({
            id,
            details: Object.keys(students[id]).reduce((details, detail) => {
                details[detail] = students[id][detail]
                ? students[id][detail]
                    :null

                return details
            },{})
        })),
    }

}

export default connect(mapStateToProps)(App)