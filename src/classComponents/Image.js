import React, { Component } from 'react';
import australia from '../assets/australia.jpeg';

export default class image extends Component {
  render() {
    return (
      <div className='row'>
        <div className='logo'>
          <img src={australia} width='100%' alt='Google Pic' />
        </div>
      </div>
    );
  }
}
