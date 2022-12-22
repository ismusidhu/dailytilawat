import React, { Component } from 'react';
import { userConfig, qasaaid } from '../masterData';

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);

    let dailyTilaawats = (localStorage.getItem('config') || userConfig).dailyTilaawats
    let { name: qasida, baitCount, showFehwa, currentBait, repeatFirstBait } = dailyTilaawats[0];
    this.state = {
      qasida,
      bait: currentBait
    };
  }

  // Do mod(%) using total bait, daily bait, current bait to find out how many bait are left in current iteration for the current qasida.
  // then keep moving next and/or previous.
  // below logic is not correct/optimized. Can be discarded or kept for records.


  // generateOrder(qasaidMaster, dailyTilaawats) {
  //   let loop = true;
  //   let orderedTilaawat = [];
  //   let baitCounters = dailyTilaawats.map(m => 0);
  //   while (loop) {
  //     for (let qasidaIndex = 0; qasidaIndex < dailyTilaawats.length; qasidaIndex++) {
  //       for (let baitIndex = baitCounters[qasidaIndex]+1; baitIndex <= baitCounters[qasidaIndex] + dailyTilaawats[qasidaIndex].dailyBaitCount; baitIndex++) {
  //         orderedTilaawat.push({
  //           qasida: dailyTilaawats[qasidaIndex].qasida,
  //           bait: baitIndex
  //         });
  //       }
  //     }
  //     loop = false;
  //   }
  // }


  getNextBaitNumber(bait, qasida) {
    let objQasida = qasaaid.find(f => f.name === qasida);
    if(objQasida.baitCount <= bait) {
      return 1;
    } else {
      return bait + 1;
    }
  }
  onNext() {
    // let dailyTilaawats = (localStorage.getItem('config') || userConfig).dailyTilaawats
    // let currentIndex = dailyTilaawats.findIndex(f => f.currentBait === this.state.bait && f.qasida === this.state.qasida)
    // dailyTilaawats[currentIndex].currentBait = this.getNextBaitNumber(this.state.bait, this.state.qasida);
    // let nextTilawatIndex = 
    // if ()


  }
  render() {
      let { qasida, bait } = this.state;
      qasida = qasida.toLowerCase().replace(' ', '_');
      let src = `/abyaat/${qasida}/${qasida}-${bait}.png`;
    return (
        <div>
            <img alt="band" src={src} />
            <button onClick={this.onNext()}>Next</button>
      </div>
    );
  }
}
