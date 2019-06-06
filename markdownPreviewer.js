const MarkdownInput = (props) => {
  return (
    <div className="markdown-input">
      <textarea
        rows="35"
        value={props.markdown}
        onChange={event => props.saveInput(event.target.value)}>
      </textarea>
    </div>
  );
};


const MarkdownOutput = (props) => {
  
  // turn user input into arkdown
  const rawMarkup = {__html: marked(props.markdown, { sanititze: true })};

  return (
    <div className="markdown-output">
      <div
        dangerouslySetInnerHTML={rawMarkup}
      ></div>
    </div>
  );
};


class MarkdownPreviewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }
    this.saveInput = this.saveInput.bind(this);
  };

  componentDidMount() {
    this.setState({ 
      markdown: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n"
    });
  };

  saveInput(input) {
    this.setState({
      markdown: input
    });
  };

  render() {
    return (
      <div>
        <MarkdownInput
          markdown={this.state.markdown}
          saveInput={this.saveInput}
        />
        <MarkdownOutput
          markdown={this.state.markdown}
        />
      </div>
    );
  };
};


ReactDOM.render(
  <MarkdownPreviewer/>, 
  document.querySelector("#markdown-previewer")
);