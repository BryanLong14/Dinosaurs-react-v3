import React from 'react';

export class Jobdetails extends React.Component {
  render() {
    return ( <section id="job-details">
      <h2>Job Details</h2>
      <h4>{this.props.listing.title}</h4>
      <p>{this.props.listing.description}</p>
    </section>
  );
}
}
