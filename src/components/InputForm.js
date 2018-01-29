import React from "react";

export class InputForm extends React.Component {
  updatePreview() {
    const preview = document.querySelector('#application-preview');
    const text = document.querySelector('#application-text').value;
    preview.textContent = text;
  }
  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    document.querySelector("#application-preview").textContent = "";
    document.getElementById("message").textContent = "Your application was submitted!"
  }
  render() {
    return (
      <form id="application-input" onSubmit={this.handleSubmit}>
        <label>Apply Here: </label>
        <textarea id="application-text" rows="8" cols="100" onKeyUp={this.updatePreview}></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
    )
  }
}
