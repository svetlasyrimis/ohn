import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';


export default class ErrorMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }

  }



  hideAlert = () => {
    this.setState({
      visible: true
    });
  }

  render() {
    return (
      <div>
        <SweetAlert
          warning
          showCloseButton={true}
          showConfirm={false}
          closeOnClickOutside={true}
          timeout={4000}
          title="Oops!"
          onConfirm={this.hideAlert}
        >
          {this.props.errorMessage}
        </SweetAlert>
        );

    </div>
    )
  }
}



