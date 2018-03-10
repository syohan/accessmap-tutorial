import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer } from 'react-md';
import {Media, MediaOverlay} from 'react-md';

export default class InclineTutorial extends PureComponent {
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
      <Button key="button" raised secondary onClick={this.show} className="tutorialButton">Path Incline Tutorial</Button>,
      <DialogContainer
        id="inner-dialog"
        key="inner-dialog"
        title="Path Incline"
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
				<iframe src="https://image.ibb.co/nKVRSn/pathincline.gif" />
			</Media>
		   </div></center>
		</td>
	   </tr>
	   <tr>
		<td>
		   <br/><p className="tutorialText">On the bottom left of AccessMap, there is an incline indicator with incline percentage. Simply zoom through the map and click on the path you want to check the incline. AccessMap should show you the sidewalk steepness of the path.</p>
		</td>
	   </tr>
	</table>
	<p></p>
	
      </DialogContainer>,
    ];
  }
}

