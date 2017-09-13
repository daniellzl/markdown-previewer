const MarkdownInput = (props) => {

  const initialText = "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n";

  return (
    <div>
      <textarea
        rows="35"
        value={initialText}
        onChange={event => props.onInputChange(event.target.value)}>
      </textarea>
    </div>
  )
}

{/* <div className="output" dangerouslySetInnerHTML={this.getMarkdownText()}
></div>

// <textarea rows="35" value={props.markdown}
//   onChange={event => this.setState({markdown: event.target.value})}
// ></textarea> */}

// const MarkdownOutput = (props) => {
//
//   // turn user input into markdown text
//   const rawMarkup = { __html: marked(props.markdown, { sanitize: true }) };
//
//   // display markdown
//   return (
//     <div>
//       <div
//         className="output"
//         dangerouslySetInnerHTML={rawMarkup}
//       ></div>
//     </div>
//   )
// }

// main application
class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }
    this.saveInput = this.saveInput.bind(this);
  }

  // once component mounts initialize state variables
  // componentDidMount() {
  //   this.setState({ markdown: });
  // }

  saveInput(input) {
    this.setState({markdown: input});
  }

  render() {
    return (
      <div>
        <MarkdownInput
          onInputChange={this.saveInput}
        />
        {this.state.markdown}
      </div>
    );
  }
}


ReactDOM.render(<Application/>, document.querySelector(".Application"));
