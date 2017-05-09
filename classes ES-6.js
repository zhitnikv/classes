'use strict';

class PaidService {
  constructor(id, name, costs) {
    this.id = id;
    this.name = name;
    this.costs = costs;
  }
  calculateAverageMonthlyCosts() {
    this.calculateAverageMonthlyCosts = this.costs;
  }
}

class FixedMonthlyCostPaidService extends PaidService {
  calculateAverageMonthlyCosts() {
    return (this.costs);
  }
}

class FixedHourlyCostPaidService extends PaidService {
  calculateAverageMonthlyCosts() {
    return +(30 * 24 * this.costs).toFixed(10);
  }
}

let arrayClasses = [];

arrayClasses[0] = new FixedHourlyCostPaidService('service1', 'Google Orkut', 11);
arrayClasses[1] = new FixedHourlyCostPaidService('service2', 'Google Voice', 9.4);
arrayClasses[2] = new FixedMonthlyCostPaidService('service5', 'YouTube', 8064);
arrayClasses[3] = new FixedHourlyCostPaidService('service3', 'Mandrill', 11.2);
arrayClasses[4] = new FixedHourlyCostPaidService('service4', 'Google Finance', 7.8);
arrayClasses[5] = new FixedMonthlyCostPaidService('service7', 'Google Building Maker', 5347);
arrayClasses[6] = new FixedMonthlyCostPaidService('service6', 'LinkedIn', 6863);

arrayClasses.sort(function(a, b) {
  if (a.calculateAverageMonthlyCosts() > b.calculateAverageMonthlyCosts()) {
    return -1;
  } else if (a.calculateAverageMonthlyCosts() < b.calculateAverageMonthlyCosts()) {
    return 1;
  } else if (a.name > b.name) {
  	return 1;
  } else if (a.name < b.name) {
  	return -1;
  } else {
  	return 0;
  }
});

for (let i = 0; i < arrayClasses.length; i++) {
  console.log(arrayClasses[i].id +' / '+ arrayClasses[i].name +' / '+
     arrayClasses[i].calculateAverageMonthlyCosts());
}

for (let i = 0; i < 5; i++) {
  console.log(arrayClasses[i].name);
}

for (let i = 3; i > 0; i--) {
  console.log(arrayClasses[arrayClasses.length - i].id);
}

if (arrayClasses[1].calculateAverageMonthlyCosts() > 
    arrayClasses[0].calculateAverageMonthlyCosts()) {
  console.log(arrayClasses[1].name);
  console.log(arrayClasses[0].name);
} else if (arrayClasses[1].calculateAverageMonthlyCosts() <
    arrayClasses[0].calculateAverageMonthlyCosts()) {
  console.log(arrayClasses[0].name);
  console.log(arrayClasses[1].name);
} else {
  console.log(arrayClasses[0].name + ' / ' + arrayClasses[1].name);
}