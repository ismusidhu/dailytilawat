import React, { Component } from 'react';
import { userConfig, qasaaid } from '../masterData';

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);

    let config = (localStorage.getItem('config') || userConfig);
    let {dailyTilaawats, currentQasidaIndex} = config;

    // let { qasidaName: qasida, dailyBaitCount, currentBait, showFehwa, repeatFirstBait, repeatLastBait} = dailyTilaawats[currentQasidaIndex];
    let dailyTilaawat = dailyTilaawats[currentQasidaIndex];
    
    this.state = {
      qasida: dailyTilaawat.qasida,
      bait: dailyTilaawat.currentBait,
      showFehwa: dailyTilaawat.showFehwa
    };

    // let qasida = qasaaid.find(q => q.id === dailyTilaawat.qasidaName);

    // qasida.totalBaitCount % dailyTilaawat.currentBait
    // config.currentQasidaIndex = (dailyTilaawats.length - 1 < currentQasidaIndex) ? config.currentQasidaIndex + 1: 0;

  }

  // Do mod(%) using total bait, daily bait, current bait to find out how many bait are left in current iteration for the current qasida.
  // then keep moving next and/or previous.
  // generateOrder(qasaidMaster, userConfig) {
  //   let orderBaits = [];
  //   let iterationIndex = 0;
  //   let totalIterations = 30;
  //   let { currentBait, currentQasida, dailyTilaawats } = userConfig;
  //   let currentQasidaIndex = dailyTilaawats.indexOf(f => f.id === currentQasida);

  //   // let totalBaitOfCurrentQasida = qasaidMaster.find(f => f.id === currentQasida)?.totalBaitCount;
  //   do {
  //     let dailyBaitCountOfCurrentQasida = dailyTilaawats.find(f => f.id === currentQasida)?.dailyBaitCount;
  //     let todaysBaitUpto =  (~~(currentBait/dailyBaitCountOfCurrentQasida) * dailyBaitCountOfCurrentQasida) + dailyBaitCountOfCurrentQasida;

  //     for (let baitIndex = currentBait; baitIndex <= todaysBaitUpto; baitIndex++) {
  //       orderBaits.push({
  //         qasida: currentQasida,
  //         baitNumber: baitIndex
  //       });
  //       iterationIndex++;
  //     }
  //     currentQasidaIndex++;
  //     currentQasida = dailyTilaawats[currentQasidaIndex].qasida;
  //   } while(iterationIndex <= totalIterations)
  // }

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


  // getNextBaitNumber(bait, qasida) {
  //   let objQasida = qasaaid.find(f => f.name === qasida);
  //   if (objQasida.baitCount <= bait) {
  //     return 1;
  //   } else {
  //     return bait + 1;
  //   }
  // }

  onNext() {
    // let dailyTilaawats = (localStorage.getItem('config') || userConfig).dailyTilaawats
    // let currentIndex = dailyTilaawats.findIndex(f => f.currentBait === this.state.bait && f.qasida === this.state.qasida)
    // dailyTilaawats[currentIndex].currentBait = this.getNextBaitNumber(this.state.bait, this.state.qasida);
    // let nextTilawatIndex = 
    // if ()

  }
  render() {
    let { qasida, bait, showFehwa } = this.state;
    qasida = qasida.toLowerCase().replace(' ', '_');
    let src = `/abyaat/${qasida}/${qasida}-${bait}.png`;
    let fehvaSrc = `/abyaat/${qasida}/${qasida}-${bait}-fehva.png`;
    return (
      <div>
        <img alt="band" src={src} />
        {showFehwa && <img alt="band-fehva" src={fehvaSrc} />}
        <button onClick={this.onNext()}>Next</button>
      </div>
    );
  }
}
