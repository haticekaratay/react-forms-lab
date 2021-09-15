import React from "react";

class TwitterMessage extends React.Component {
  state = {
    text: ""
  };

  handleCount = (event) =>{
    this.setState({
      text: event.target.value,
    })
  }

  
  render() {
    return (
      <div>
        <p>{this.props.maxChars - this.state.text.length} characters remaining</p>
        <strong>Your message:</strong>
        <input onChange={this.handleCount} type="text" name="message" id="message" value={this.state.text}/>
      </div>
    );
  }
}

export default TwitterMessage;
