import React,{Component} from 'react';

class SampleProg extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    incrementHandler = () => {
        // this.setState({
        //    count: this.state.count + 1
        // })
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    render(){
        return (
            <div>
            <div> Count: {this.state.count} </div>
            <button onClick={this.incrementHandler}>Increment Count</button>
            </div>
    )
        }
}

export default SampleProg