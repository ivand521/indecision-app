class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.handleClick}>{this.state.visible? 'Hide' : 'Show'}</button>
        {this.state.visible && <p>I am now visible!</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
