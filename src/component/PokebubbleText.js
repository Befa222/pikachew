import React, {Component} from 'react';

class PokeBubbleText extends Component {
    static defProps = {
        heading: '',
        textData: []
    }

    state = {
        text: '',
        deleting: false,
        loopNumber: 0,
        typerSpeed: 80
    }

    componentDidMount() {
        this.typerHandler();
    }

    typerHandler = () => {
        const {textData} = this.props
        const {deleting, loopNumber, text, typerSpeed} = this.state
        const index = loopNumber % textData.length
        const fullText = textData[index]

        this.setState({
            text: deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1), typerSpeed: deleting ? 20 : 80
        });

        if (!deleting && text === fullText) {
            let tO = setTimeout(() => this.setState({deleting: true}), 700)
        } else if (deleting && text === '') {
            this.setState({
                deleting:false,
                loopNumber: loopNumber +1
            });
        }

        setTimeout(this.typerHandler, typerSpeed);

    };

    render() {
        return(
            <div className="typerDiv">
                <h1>
                    {this.props.heading}
                    {this.state.text}
                </h1>
            </div>
        )
    }

}

export default PokeBubbleText;