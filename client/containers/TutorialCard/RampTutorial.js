import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer } from 'react-md';
import {Media, MediaOverlay} from 'react-md';

export default class RampTutorial extends PureComponent {
  static propTypes = {
    fixed: PropTypes.bool,
  };

  state = { visible: false };
  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };


  render() {
    const { visible } = this.state;
    const { fixed } = this.props;

    return [
      <Button key="button" raised secondary onClick={this.show} className="tutorialButton">Curb Ramp Tutorial</Button>,
      <DialogContainer
        id="inner-dialog"
        key="inner-dialog"
        title="Curb Ramp"
        onHide={this.hide}
        visible={visible}
        portal={fixed}
        lastChild={fixed}
        disableScrollLocking={fixed}
        renderNode={document.body}
        actions={[{
          id: 'dialog-confirm',
          children: 'Got It!',
          onClick: this.hide,
        }]}
	dialogClassName="inner"
      >
	<table>
	   <tr>
		<td>
		    <center><div className="inclinegif">
		   	<Media>
				<iframe src="https://image.ibb.co/kXKZf7/ramp.gif" />
			</Media>
		   </div></center>
		</td>
	   </tr>
	   <tr>
		<td>
		   <br/><p className="tutorialText">AccessMap provides features that allow you to check whether road crossings have curb ramps or not. You can simply zoom the map and click on a crossing you would like to cross. AccessMap should show you whether a curbramp is available as well as its steepness. Steepness indicator is located on the bottom left of AccessMap.</p>
		</td>
	   </tr>
	</table>
	<p></p>
	
      </DialogContainer>,
    ];
  }
}

