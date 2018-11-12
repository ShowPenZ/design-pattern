/**
 * 创建一个书本的类
 * 在函数(类)的内部通过对this(函数内部自带的一个变量，用于指向当前这个对象)
 * 变量添加属性挥着方法来实现对类添加属性或者方法
 * @param {*} id
 * @param {*} name
 * @param {*} price
 */
var Book = function(id, name, price) {
	this.id = id;
	this.name = name;
	this.price = price;
};

//=======================================================//

/**
 * 也可以通过在类的原型上添加属性方法
 */
Book.prototype.display = function() {
	//展示这本书
};

/**
 * 或者
 */
Book.prototype = {
	display: function() {
		//展示这本书
	}
};

//=======================================================//

/**
 * 调用方法
 * 不能直接使用这个Book类需要通过关键字new来实例化
 */

var book = new Book(10, '金瓶梅', 50);
console.log(book.name); //金瓶梅

//=======================================================//

/**
 * 私有属性与私有方法，特权方法，对象公有属性和对象共有方法，构造器
 * 在函数内部通过this创建的属性和方法，在类创建对象时
 * 每个对象自身都拥有一份并且可以在外部访问到，因此通过this创建的属性可以看作是对象共有属性和对象共有方法
 * 而通过this创建的方法不但可以访问这些对象的共有属性与共有方法，
 * 而且还能访问到类(创建时)或对象自身的私有属性和私有方法
 * 由于这些方法权利比较大，所以我们又将它看作特权方法。
 * 在对象创建时通过使用这些特权方法我们可以初始化实例对象的一些属性，
 * 因此这些在创建对象时调用的特权方法还可以看作是类的构造器
 * @param {*} id
 * @param {*} name
 * @param {*} price
 */
var Book = function(id, name, price) {
	//私有属性
	var num = 1;
	//私有方法
	function checkId() {}
	//特权方法
	this.getName = function() {};
	this.getPrice = function() {};
	this.setName = function() {};
	this.setPrice = function() {};
	//对象公有属性
	this.id = id;
	//对象公有方法
	this.copy = function() {};
	//构造器
	this.setName(name);
	this.setPrice(price);
};

//类静态公有属性(对象不能访问)
Book.isChinese = true;
//类静态公有方法(对象不能访问)
Book.resetTime = function() {
	console.log('new time');
};
Book.prototype = {
	//公有属性
	isJSBook: false,
	//公有方法
	display: function() {}
};

//通过new关键字创建的对象实质是对新对象this的不断赋值,并将prototype指向类
//的prototype所指向的对象,而类的构造函数外面通过点语法定义的属性方法是不会添加
//到新创建的对象上去的。因此要想在新创建的对象中使用isChinese 就得通过Book类
//使用而不能通过this,如Book.isChinese,而类的原型prototype上定义的属性在新对象里
//就可以直接使用，这是因为新对象的prototype和类的prototype指向的时同一个对象

//=======================================================//

/**
 * 图书安全类
 * @param {*} title 
 * @param {*} tie 
 * @param {*} type 
 */
var Book = function(title, tie, type) {
	//判断执行过程中this是否是当前这个对象(如果是说明使用new创建的)
	if (this instanceof Book) {
		this.title = title;
		this.time = time;
		this.type = type;
		//否则重新创建这个对象
	} else {
		return new Book(title, time, type);
	}
};

var book = Book('JavaScript', '2014', 'js');
