import React from "react";

class ClockComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      value: 100 * 60,
      time: null
    };
    this.minutesRemaining = this.state.value;
  }

  tick() {
    if (this.props.formatType === "mins") {
      var min = Math.floor(this.minutesRemaining / 60);
      this.setState({
        time: min
      });
    }
    if (this.props.formatType === "secs") {
      this.setState({
        time: this.minutesRemaining
      });
    }
    this.minutesRemaining--;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick.bind(this), 1000);
    if (this.props.formatType === "mins") {
      this.setState({
        time: Math.floor(this.state.value / 60)
      });
    }

    if (this.props.formatType === "secs") {
      this.setState({
        time: Math.floor(this.state.value)
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleResetButton = event => {
    if (this.props.formatType === "mins") {
      this.setState({
        time: Math.floor(this.state.value / 60)
      });
    }

    if (this.props.formatType === "secs") {
      this.setState({
        time: Math.floor(this.state.value)
      });
    }

    this.minutesRemaining = this.state.value
  }


  render() {
    return (
      <div>
        <div>Counts down for 100 minutes</div>
        <div>
          {this.state.time} {this.props.formatType}
        </div>
        <div>
          <button onClick={(event) => this.handleResetButton(event) }>Reset Timer</button>
        </div>
      </div>
    );
  }
}

export default ClockComponent;
