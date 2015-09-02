import React from 'react';

const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
};

class Accordion extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div>
        <a>{this.props.summary}</a>
        <p>{this.props.details}</p>
      </div>
    );
  }

  // working code below, but waiting to get tests passing with basic elements first ^

  // render() {
  //   return (
  //     <div>
  //       <a onClick={this.toggle}>
  //         {this.props.summary}
  //       </a>
  //       <p style={(this.state.active) ? styles.active : styles.inactive}>
  //         {this.props.details}
  //       </p>
  //     </div>
  //   );
  // }
}

Accordion.propTypes = {
  summary: React.PropTypes.string.isRequired,
  details: React.PropTypes.string.isRequired
};

export default Accordion;
