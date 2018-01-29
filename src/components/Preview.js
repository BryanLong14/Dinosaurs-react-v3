import React from 'react';

export class Preview extends React.Component {
  clickHandler() {
    document.querySelector(
      "#application-preview"
    ).textContent = document.querySelector("#application-text").value;
    document.querySelector("#application-preview").classList.toggle("hidden");
  }
  render() {
    return (
      <div>
        <p id="message">&nbsp;</p>
        <button id="preview-toggle" onClick={this.clickHandler}>
          Show Preview
        </button>
        <section id="application-preview" className="hidden" />
      </div>
    );
  }
}
