'use strict';

import React, {Component} from 'react';
import {removeSearch} from '../actions/SearchActions';
import SearchBox from './SearchBox';

class Top extends Component {

  constructor(props) {
      super(props);
  }

  _handleClose() {
    removeSearch();
  }

  render() {
    return <div className='top'>
                <div className='title'><span><b>Magic</b>Playlist /</span></div>
                <div className='search'><SearchBox value={this.props.search}/></div>
            </div>
  }
}

export default Top;
