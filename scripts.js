class App extends React.Component {
	// main application

    constructor(props) {
        super(props);
        this.state = {
            markdown: ""
        }
    }

    componentDidMount() {
		// once component mounts initialize state variables

        this.setState({markdown: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"});
    }

    getMarkdownText() {
		// turn user entered text into markdown text
		// https://stackoverflow.com/questions/34686523/using-marked-in-react

        const rawMarkup = marked(this.state.markdown, {sanitize: true});
        return {__html: rawMarkup};
    }

    render() {
        return (
            <div>
                <textarea
					rows="35"
					value={this.state.markdown}
					onChange={event => this.setState({markdown: event.target.value})}
				>
				</textarea>
                <div
					className="output"
					dangerouslySetInnerHTML={this.getMarkdownText()}
				>
				</div>
            </div>
        );
    }
}

ReactDOM.render( <App/>, document.querySelector("#App"));
