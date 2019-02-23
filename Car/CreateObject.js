//test
function Car(model, type){
  this.model = model;
  this.type = type;
  this.run = function(){
    console.log("Run");
  }
}
function createCar(m,t){
  return{model:m,
        type:t,
        run:function(){
          console.log("Run");
        }
  }
}
class Car1{
  constructor(type,model,speed,color){
    this.type = type;
    this.model = model;
    this.Speed = speed;
    this.Color = color;
  }
  run(){
    console.log("Run");
  }
}
/*let car = new Car("BMW", 7);
car.run();
console.log("Hello");
console.log(car);*/
let car1 = createCar("PAW","WOW");
console.log(car1);
car1.run();
let car = new Car1("Honda", "9","243 km/h","Black");
let carEgora = new Car1("Giga", "0", "20 km/h","Pink");
console.log(car);
console.log(carEgora);
