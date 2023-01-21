const qasaaid = [{
    id: 'ya_sayyeda',
    name: 'Ya Sayyeda',
    totalBaitCount: 52,
    hasFehwa: true
}, {
    id: 'fulkul_husain',
    name: 'Fulkul Husain',
    totalBaitCount: 52,
    hasFehwa: true
}, {
    id: 'zikrul_husain',
    name: 'Zikrul Husain',
    totalBaitCount: 33,
    hasFehwa: true
}, {
    id: 'munajaat_sms_1443',
    name: 'Munajaat SMS 1443',
    totalBaitCount: 52,
    hasFehwa: true
}];


const userConfig = {
    currentIndex: 0,
    dailyTilaawats: [{
        qasida: 'fulkul_husain',
        dailyBaitCount: 2,
        currentBait: 4,
        showFehwa: true,
        repeatFirstBait: 1,
        repeatLastBait: 51
    }, {
        qasida: 'ya_sayyeda',
        dailyBaitCount: 3,
        currentBait: 4,
        showFehwa: true,
        repeatFirstBait: 1, // 0 or false if not to be repeated daily
        repeatLastBait: 52 // 0 or false if not to be repeated daily
    }]
}

const generateOrder = (qasaidMaster, userConfig) => {
    let orderBaits = [];
    let iterationIndex = 0;
    let totalIterations = 30;
    let { currentBait, currentQasida, dailyTilaawats } = userConfig;
    let currentQasidaIndex = dailyTilaawats.indexOf(f => f.id === currentQasida);

    // let totalBaitOfCurrentQasida = qasaidMaster.find(f => f.id === currentQasida)?.totalBaitCount;
    do {
      let dailyBaitCountOfCurrentQasida = dailyTilaawats.find(f => f.id === currentQasida)?.dailyBaitCount;
      let todaysBaitUpto =  (~~(currentBait/dailyBaitCountOfCurrentQasida) * dailyBaitCountOfCurrentQasida) + dailyBaitCountOfCurrentQasida;
        console.log(currentQasidaIndex);
      for (let baitIndex = currentBait; baitIndex <= todaysBaitUpto; baitIndex++) {
        let a = {
            qasida: currentQasida,
            baitNumber: baitIndex
          };
        orderBaits.push(a);
        console.log(a);
        iterationIndex++;
      }
      if (currentQasidaIndex < dailyTilaawats.length - 1) {
          currentQasidaIndex++;
      } else {
        currentQasidaIndex = 0;
      }
      currentQasida = dailyTilaawats[currentQasidaIndex].qasida;
    } while(iterationIndex <= totalIterations)
    return orderBaits;
  }

  console.log(generateOrder(qasaaid, userConfig));