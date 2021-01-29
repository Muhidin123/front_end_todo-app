import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

import React, { Component } from "react";
import { sortNotesSuccess } from "../actions/sort";
import { searchNotesSuccess } from "../actions/search";

class Nav extends Component {
  handleChange = e => {
    this.props.search(e.target.value.toLowerCase());
  };

  render() {
    return (
      <div className='ui secondary menu'>
        <Link to='/todos' className='item'>
          HOME
        </Link>
        <Link to='/todos/new' className='item'>
          NEW NOTE
        </Link>
        {/* <Link to='' className='item'>
          THINK WHAT TO PUT
        </Link> */}
        <Dropdown text='Sort by' className='item'>
          <Dropdown.Menu>
            <Dropdown.Item
              text='A - Z'
              onClick={() => {
                this.props.sort("title");
              }}
            />
            <Dropdown.Item
              text='Z - A'
              onClick={() => {
                this.props.sort("title", "desc");
              }}
            />
          </Dropdown.Menu>
        </Dropdown>
        <div className='right menu'>
          <div className='item'>
            <div className='ui icon input'>
              <input
                type='text'
                placeholder='Search...'
                onChange={this.handleChange}
              />
              <i className='search link icon'></i>
            </div>
          </div>

          <Link
            to='/login'
            className='ui item'
            onClick={() => {
              localStorage.removeItem("jwt");
            }}
          >
            LOGOUT
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sort: sortNotesSuccess,
  search: searchNotesSuccess,
};

export default connect(null, mapDispatchToProps)(Nav);
