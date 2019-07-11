class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onAddOne = this.onAddOne.bind(this);
    this.onMinusOne = this.onMinusOne.bind(this);
    this.onReset = this.onReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const count = +localStorage.getItem('count');
    if (!isNaN(count)) {
      this.setState(() => ({ count }))
    }
  }
  componentDidUpdate(prevProps,prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  onAddOne() {
    this.setState((prevState) => ( { count: prevState.count + 1}));
  }
  onMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      };
    })
  }
  onReset() {
    this.setState(() => {
      return {
        count: 0
      };
    })
  }
  render() {
    return (
      <div>
        <h1> Counter: { this.state.count } </h1>
        <button onClick = {this.onAddOne}>+1</button>
        <button onClick = {this.onMinusOne}>-1</button>
        <button onClick = {this.onReset}>Reset</button>
      </div >
    );
  }
}

ReactDOM.render( <Counter /> , document.getElementById('app'))
