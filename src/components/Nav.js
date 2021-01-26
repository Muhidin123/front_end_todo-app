import { Link } from "react-router-dom";

import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div className='ui secondary  menu'>
        <Link to='/todos' className='item'>
          HOME
        </Link>
        <Link to='/todos/new' className='item'>
          NEW TODO
        </Link>
        <Link to='' className='item'>
          THINK WHAT TO PUT
        </Link>

        <div className='right menu'>
          <div className='item'>
            <div className='ui icon input'>
              <input type='text' placeholder='Search...' />
              <i className='search link icon'></i>
            </div>
          </div>
          <Link to='/login' className='ui item'>
            LOGOUT
          </Link>
        </div>
      </div>
    );
  }
}
