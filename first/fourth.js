//构造函数式继承

//声明父类
function SuperClass(id) {
	//引用类型共有属性
	this.books = ['JavaScript', 'html', 'css'];
	//值类型共有属性
	this.id = id;
}

//父类声明原型方法
SuperClass.prototype.showBooks = function() {
	console.log(this.books);
};

/**
 * 声明子类
 * @param {*} id
 */
function SubClass(id) {
	//继承父类
	SuperClass.call(this, id);
	//SuperClass.call(this, id)这条语句是构造函数式继承的精华
	//由于call这个方法可以更改函数的作用环境，因此在子类中，对superClass
	//调用这个方法就是将子类中的变量在父类中执行一遍，由于父类中是给this绑定属性的，
	//因此子类自然也就继承了父类的共有属性。由于这种类型继承没有涉及原型prototype，
	//所以父类的原型方法自然不会被子类继承，而如果想要被子类继承就必须要放在构造函数中，
	//这样创建出来的每个实例都会单独拥有一份而不能共有，这样就违背了代码复用的原则。为了
	//综合两种模式的优点，就有了组合式继承
}

//创建第一个子类实例
var instance1 = new SubClass(10);
//创建第二个子类实例
var instance2 = new SubClass(11);

instance1.books.push('设计模式');
console.log(instance1.books); // ['JavaScript','html','css','设计模式']
console.log(instance1.id); //10
console.log(instance2.books); //['JavaScript','html','css']
instance1.showBooks(); // TypeError

//=======================================================//

//组合继承
//声明父类
function SuperClass(name) {
	this.name = name;
	this.books = ['html', 'css', 'JavaScript'];
}

//父类原型共有方法
SuperClass.prototype.getName = function() {
	console.log(this.name);
};

//声明子类
function SubClass(name, time) {
	//构造函数式继承父类name属性
	SuperClass.call(this, name);
	//子类中新增共有属性
	this.time = time;
}

//类式继承 子类原型继承父类
SubClass.prototype = new SuperClass();
//子类原型方法
SubClass.prototype.getTime = function() {
	console.log(this.time);
};

var instance1 = new SubClass('js book', '2014');
instance1.books.push('设计模式');
console.log(instance1.books); //['html','css','JavaScript','设计模式']
instance1.getName(); //js book
instance1.getTime(); //2014

var instance2 = new SubClass('css book', '2013');
console.log(instance2.books); //['html','css','JavaScript']
instance1.getName(); //css book
instance1.getTime(); //2013

//=======================================================//

//2006年道格拉斯 克罗克福德发表一篇《Javascript 中原型式继承》的文章，
//他的观点，借助原型prototype可以根据已有的对象创建一个新的对象，
//同时不必创建新的自定义对象类型
//大佬的实现代码

/**
 * 原型是继承
 * @param {*} o
 */
function inheritObject(o) {
	//声明一个过渡函数对象
	function F() {}
	//过渡对象的原型继承父对象
	F.prototype = o;
	//返回过渡对象的一个实例,该实例的原型继承了父对象
	return new F();
}

var book = {
	name: 'js book',
	alikeBook: ['css book', 'html book']
};

var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');

var otherBook = inheritObject(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');

console.log(newBook.name); //ajax book
console.log(newBook.alikeBook); //['css book','html book','xml book','as book']
console.log(otherBook.name); //as book
console.log(otherBook.alikeBook); //['css book','html book','xml book','as book']
console.log(book); //js book
console.log(book.alikeBook); //['css book','html book','xml book','as book']

//和类式继承一样，父类对象book中的值类型的属性被复制，引用类型的属性被共有

//=======================================================//

//寄生式继承
//声明基对象
var book = {
	name: 'js book',
	alikeBook: ['css book', 'html book']
};

function createBook(obj) {
	//通过原型继承方式创建新对象
	var o = new inheritObject(obj);
	//拓展新对象
	o.getName = function() {
		console.log(name);
	};
	//返回拓展后的新对象
	return o;
}

//寄生组合式继承
//在构造函数中我们已经调用了父类的构造函数，因此我们需要的就是父类原型对象的一个副本，
//而这个副本我们通过原型继承便可得到，但是这么直接赋值给子类会有问题的，
//因为对父类原型对象复制得到的复制对象p中的constructor指向的不是subClass子类对象，
//因此在寄生式继承中要对复制对象p做一次增强，修复其constructor属性指向不正确的问题，
//最后将得到的复制对象p赋值给子类的原型，这样子类的原型就继承了父类的原型并且没有
//执行父类的构造函数

/**
 * 寄生式继承 继承原型
 * @param {*} subClass 子类
 * @param {*} superClass 父类
 */
function inheritPrototype(subClass, superClass) {
	//复制一份父类的原型副本保存在变量中
	var p = inheritObject(superClass.prototype);
	//修正因为重写子类原型导致子类的constructor属性被修改
	p.constructor = subClass;
	//设置子类的原型
	subClass.prototype = p;
}

//测试用例
//定义父类
function SuperClass(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'green'];
}

//定义父类原型方法
SuperClass.prototype.getName = function() {
	console.log(this.name);
};

//定义子类
function SubClass(name, time) {
	//构造函数式继承
	SuperClass.call(this, name);
	this.time = time; //子类新增属性
}

//寄生式继承父类原型
inheritPrototype(SubClass, SuperClass);
//子类新增原型方法
SubClass.prototype.getTime = function() {
	console.log(this.time);
};
//创建两个测试方法
var instance1 = new SubClass('js book', 2014);
var instance2 = new SubClass('css book', 2013);
instance1.colors.push('black');
console.log(instance1.colors); // ['red', 'blue', 'green','black']
console.log(instance2.colors); // ['red', 'blue', 'green']
instance2.getTime(); //2013
instance2.getName(); //css book
