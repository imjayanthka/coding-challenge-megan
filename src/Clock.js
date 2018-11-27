import React from "react";
import ClockComponent from "./ClockComponent";

class Clock extends React.Component {
    constructor(){
        super()
        this.state = {
            formatType: "mins"
        }
    }

    handleFormatChange = event => {
        if(event.target.id === "mins"){
            this.setState({
                formatType: "mins"
            })
        }

        if(event.target.id === "secs"){
            this.setState({
                formatType: "secs"
            })
        }
        
    }

    render(){
        return (<div>
        <ClockComponent formatType={this.state.formatType}/>
        <div>
            <button id="secs" onClick={e => this.handleFormatChange(e)}>In Seconds</button>
            <button id="mins" onClick={e => this.handleFormatChange(e)}>In Minutes</button>
        </div>
        </div>)
    }
}

export default Clock;