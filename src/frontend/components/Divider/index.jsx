import React from 'react';
import styles from './stylesheet.scss';
import { classes } from '/common/util';

class Divider extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(e) {
    this.target = e.target;
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(e) {
    const { onResize } = this.props;
    onResize(this.target, e.clientX, e.clientY);
  }

  handleMouseUp(e) {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    const { className, horizontal } = this.props;

    return (
      <div
        className={classes(styles.divider, horizontal ? styles.horizontal : styles.vertical, className)}
        onMouseDown={this.handleMouseDown} />
    );
  }
}

export default Divider;

