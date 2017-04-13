import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// stateless
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

// stateful
class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
