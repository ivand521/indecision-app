const quotes =
[
  '"Quality is not an act, it is a habit." --Aristotle',
  '"Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you." --George Whitefield',
  '"Decide what you want, decide what you are willing to exchange for it. Establish your priorities and go to work."  --H. L. Hunt',
];

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange =this.handleChange.bind(this);
    this.state = {
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    };
  }
  handleChange() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.setState(() => {
      return {
        quote: quotes[randomIndex]
      };
    })
  }
  render() {
    return (
      <div>
        <h1>Motivational Quotes</h1>
        <h2>{this.state.quote}</h2>
        <button onClick={this.handleChange}>Change Quote</button>
      </div>
    );
  }
}

ReactDOM.render(<Quotes />, document.getElementById('app'));
