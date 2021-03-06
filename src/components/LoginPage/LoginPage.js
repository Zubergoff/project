/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './LoginPage.scss';
import withStyles from '../../decorators/withStyles';

const title = 'Log In';

@withStyles(s)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <form>
            <label htmlFor="mail"><p>Please enter your email</p></label>
            <input type="email" name="mail" id="mail"/>
            <label htmlFor="passwd"><p>Please enter your name</p></label>
            <input type="password" name="passwd" id="passwd"/>
            <button className="success button">{title}</button>
          </form>
        </div>
      </div>
    );
  }

}

export default LoginPage;
