/**
 * Created by devds on 05.01.16.
 */
import React, { Component, PropTypes } from 'react';
import s from './ContactPage.scss';
import withStyles from '../../decorators/withStyles';
const title = 'Firebase Login';
@withStyles(s)
class FirebaseLogin extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
        <div>
          <h1>{title}</h1>
          <p>FirebaseLogin</p>
        </div>
    )
  }
}