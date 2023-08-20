class Highway {
    constructor(vignetteCost) {
      this.vehicleList = [];
      this.vignetteCost = vignetteCost;
    }
  
    enterHighway(vehicle) {
      this.vehicleList.push(vehicle);
      if (!(vehicle instanceof Police)) {
        vehicle.increaseSpeed(10);
        vehicle.payVignette(this.vignetteCost);
      }
    }
  
    policeVerification(police) {
      for (let i = 0; i < this.vehicleList.length; i++) {
        const vehicle = this.vehicleList[i];
        police.checkVehicleSpeed(vehicle);
      }
    }
  }
  
  class Vehicle {
    constructor(name, runningSpeed, driver) {
      this.name = name;
      this.runningSpeed = runningSpeed;
      this.driver = driver;
    }
  
    increaseSpeed(speed) {
      this.runningSpeed += speed;
      console.log(`${this.name} increased speed by ${speed} km/h. New speed: ${this.runningSpeed} km/h`);
    }
  
    payVignette(cost) {
      this.driver.walletMoney -= cost;
      console.log(`${this.driver.name} paid vignette cost: ${cost}`);
    }
  }
  
  class Bus extends Vehicle {}
  
  class Car extends Vehicle {}
  
  class Truck extends Vehicle {}
  
  class Driver {
    constructor(name, walletMoney) {
      this.name = name;
      this.walletMoney = walletMoney;
    }
  }
  
  class Police extends Vehicle {
    static speedLimitsByVehicleType = {
      Bus: 90,
      Car: 120,
      Truck: 80,
    };
  
    static fineByVehicleType = {
      Bus: 200,
      Car: 100,
      Truck: 300,
    };
  
    checkVehicleSpeed(vehicle) {
      const speedLimit = Police.speedLimitsByVehicleType[vehicle.constructor.name];
      if (vehicle.runningSpeed > speedLimit) {
        const fine = Police.fineByVehicleType[vehicle.constructor.name];
        console.log(`${vehicle.name} exceeded the speed limit. Fine: ${fine}`);
      }
    }
  }
  
  function displayOutput(message) {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML += `<p>${message}</p>`;
  }
  
  function displayCars(cars) {
    const carsElement = document.getElementById('cars');
    carsElement.innerHTML = '<h2>Cars on the Highway:</h2>';
  
    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
      const carElement = document.createElement('div');
      carElement.classList.add('car');
      carElement.innerHTML = `<h3>${car.name}</h3><p>Speed: ${car.runningSpeed} km/h</p><p>Driver: ${car.driver.name}</p>`;
      carsElement.appendChild(carElement);
    }
  }
  
  const driver1 = new Driver("John", 500);
  const driver2 = new Driver("Alice", 300);
  const policeDriver = new Driver("Officer Smith", 1000);
  
  const car1 = new Car("Car", 100, driver1);
  const bus1 = new Bus("Bus", 80, driver2);
  const truck1 = new Truck("Truck", 70, driver1);
  const policeCar = new Police("Police Car", 150, policeDriver);
  
  const highway = new Highway(20);

  highway.enterHighway(car1);
  highway.enterHighway(bus1);
  highway.enterHighway(truck1);
  
  highway.enterHighway(policeCar);
  
  const police = new Police("Officer Johnson", 2000);
  highway.policeVerification(police);
  
  displayOutput("Please check the browser console for the detailed output.");
  
  const carsOnHighway = [car1, bus1, truck1, policeCar];
  displayCars(carsOnHighway);
  
  