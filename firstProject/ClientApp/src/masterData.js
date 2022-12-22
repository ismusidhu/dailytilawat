export const qasaaid = [{
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

export const userConfig = {
    currentBait: 2,
    currentQasida: 'fulkul_husain',
    dailyTilaawats: [{
        qasida: 'fulkul_husain',
        dailyBaitCount: 1,
        showFehwa: true,
        repeatFirstBait: 1,
        repeatLastBait: 51
    }, {
        qasida: 'ya_sayyeda',
        dailyBaitCount: 1,
        showFehwa: true,
        repeatFirstBait: 1, // 0 or false if not to be repeated daily
        repeatLastBait: 52 // 0 or false if not to be repeated daily
    }]
}