//幽灵工厂 -- 抽象工厂模式
//抽象方法其实是一个实现子类继承父类的方法,在这个方法中我们需要通过传递
//子类以及要继承父类(抽象类)的名称,并且在抽象工厂方法中又增加了一次对
//抽象类存在一次判断,如果存在,则将子类继承父类的方法,然后子类通过寄生式继承

//抽象工厂方法
var VehicleFactory = function(subType, superType) {
	//判断改抽象工厂是否有该抽象类
	if (typeof VehicleFactory[superType] === 'function') {
		//缓存类
		function F() {}
		//继承父类属性和方法
		F.prototype = new VehicleFactory[superType]();
		//将子类constructor指向子类
		subType.constructor = subType;
		//子类原型继承'父类'
		subType.prototype = new F();
	} else {
		//不存在该抽象类抛出错误
		throw new Error('未创建该抽象类');
	}
};

//小汽车抽象类
VehicleFactory.Car = function() {
	this.type = 'car';
};

VehicleFactory.Car.prototype = {
	getPrice: function() {
		return new Error('抽象方法不能调用');
	},
	getSpeed: function() {
		return new Error('抽象方法不能调用');
	}
};

//公交车抽象类
VehicleFactory.Bus = function() {
	this.type = 'bus';
};

VehicleFactory.Bus.prototype = {
	getPrice: function() {
		return new Error('抽象方法不能调用');
	},
	getPassengerNum: function() {
		return new Error('抽象方法不能调用');
	}
};

//货车抽象类
VehicleFactory.Truck = function() {
	this.type = 'truck';
};

VehicleFactory.Truck.prototype = {
	getPrice: function() {
		return new Error('抽象方法不能调用');
	},
	getTrainload: function() {
		return new Error('抽象方法不能调用');
	}
};

//使用方法

//宝马汽车子类
var BMW = function(price, speed) {
	this.price = price;
	this.speed = speed;
};

//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function() {
	return this.price;
};

BMW.prototype.getSpeed = function() {
	return this.speed;
};

//兰博基尼汽车子类
var Lamborghini = function(price, speed) {
	this.price = price;
	this.speed = speed;
};

//抽象工厂实现对Car抽象类的继承
VehicleFactory(Lamborghini, 'Car');
Lamborghini.prototype.getPrice = function() {
	return this.price;
};

Lamborghini.prototype.getSpeed = function() {
	return this.speed;
};

//宇通客车子类
var YUTONG = function(price, passenger) {
	this.price = price;
	this.passenger = passenger;
};

//抽象工厂实现对Car抽象类的继承
VehicleFactory(YUTONG, 'Bus');
YUTONG.prototype.getPrice = function() {
	return this.price;
};

YUTONG.prototype.getPassengerNum = function() {
	return this.passenger;
};

//奔驰卡车子类
var BenzTruck = function(price, trainLoad) {
	this.price = price;
	this.trainLoad = trainLoad;
};
//抽象工厂实现对Truck抽象类的继承
BenzTruck.prototype.getTrainload = function() {
	return this.trainLoad;
};
BenzTruck.prototype.getPrice = function() {
	return this.price;
};

var truck = new BenzTruck(1000000, 1000);
console.log(truck.getPrice()); //1000000
console.log(truck.type); //truck
