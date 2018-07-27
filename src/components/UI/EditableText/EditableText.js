import React, { Component, Fragment } from "react";
import "./EditableText.css";
import Tooltip from "../../UI/Tooltip/Tooltip";
import PropTypes from "prop-types";

// Provides and input field to change the value of a text field.
// props:
// this.props.content: what text should be displayed
// this.props.changed: a handler for when the text is changed.
class EditableText extends Component {
  state = {
    editEnabled: false
  };

  toggleEditEnabledHandler = () => {
    this.setState({ editEnabled: !this.state.editEnabled });
  };

  handleOnKeyPress = event => {
    if (event.key === "Enter") {
      this.toggleEditEnabledHandler(event);
    }
  };

  render() {
    const textEdit = (
      <div styleName="textFieldText">
        <input
          onChange={this.props.changed}
          autoFocus
          onKeyPress={this.handleOnKeyPress}
          onBlur={this.toggleEditEnabledHandler}
          value={this.props.content}
          type="text"
        />
      </div>
    );

    const textValue = (
      <Tooltip message="Click to edit">
        <div
          styleName="textFieldText"
          onClick={this.toggleEditEnabledHandler}
          onBlur={this.toggleEditEnabledHandler}
        >
          {this.props.content}
        </div>
      </Tooltip>
    );

    return <Fragment>{this.state.editEnabled ? textEdit : textValue}</Fragment>;
  }
}

EditableText.propTypes = {
  changed: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default EditableText;
