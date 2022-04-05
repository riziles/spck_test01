import React from 'react';
import ReactDOM from 'react-dom';


class Paragraph extends React.Component {
  render() {
    return (
      <p className="">
      {this.props.text}
      </p>
    )
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}



class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="">
          <Square />
          <Paragraph text={this.props.text} />
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="React" text="Caution: do not look into laser with remaining eye."></Main>,
  document.getElementById('react-app')
);
