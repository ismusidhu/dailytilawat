import React, { Component } from 'react';
//import { userConfig } from '../masterData';

export class Home extends Component {
    static displayName = Home.name;
  let userConfig = localStorage.getItem('userConfig');
userConfig.dailyTilaawat.forEach(f => {

})

  render() {
    return (
        <div>
            <img src="abyaat/{qasida}/{bait}.jpg" />
      </div>
    );
  }
}
