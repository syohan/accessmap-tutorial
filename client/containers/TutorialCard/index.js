import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer, DatePicker } from 'react-md';

import InclineTutorial from './InclineTutorial';
import RampTutorial from './RampTutorial';
import './style.scss';

export default class MainDialog extends PureComponent {
  static propTypes = {
    fixed: PropTypes.bool,
  };

  state = { visible: false, renderNode: null };

  componentDidMount() {
    this.setState({ renderNode: document.body }); // eslint-disable-line react/no-did-mount-set-state
  }

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, renderNode } = this.state;
    const { fixed } = this.props;

    return [
      <Button key="button" onClick={this.show} raised>Show Tutorial</Button>,
      <DialogContainer
        id="main-dialog"
        key="main-dialog"
        title="Let's Get Started!"
        onHide={this.hide}
        visible={visible}
	dialogClassName="main"
      >
        <InclineTutorial fixed={fixed} />
	<br/>
	<br/>
	<RampTutorial fixed={fixed} />
    
      </DialogContainer>,
    ];
  }
}
