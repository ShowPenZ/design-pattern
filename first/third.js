/**
 * 类式继承
 * 声明父类
 */
function SuperClass() {
	this.superValue = true;
}

/**
 * 为父类添加共有方法
 */
SuperClass.prototype.getSuperValue = function() {
	return this.superValue;
};

/**
 * 声明子类
 */
function SubClass() {
	this.subValue = false;
}

/**
 * 子类prototype继承父类prototype
 */
SubClass.prototype = new SuperClass();

/**
 * 为子类添加共有方法
 */
SubClass.prototype.getSubValue = function() {
	return this.subValue;
};

//类的原型对象的作用就是为类的原型添加共有方法，但类不能直接访问这些属性和方法，
//必须通过原型prototype来访问。而我们实例化一个父类的时候，新创建的对象复制了
//父类的构造函数内的属性与方法并且将原型_proto_指向了父类的原型对象，这样就
//拥有了父类的原型对象上的属性与方法，并且这个新创建的对象可直接访问到父类原型
//对象上的属性与方法。如果我们将这个新创建的对象赋值给子类的原型，那么子类的原型
//就可以访问到父类的原型和方法

var instance = new SubClass();
console.log(instance.getSubValue()); //true
console.log(instance.getSuperValue()); //true

//通过instanceof来检测某个对象是否是某个类的实例,但instanceof不表示两者的继承
console.log(instance instanceof SuperClass); //true
console.log(instance instanceof SubClass); //true
console.log(SubClass instanceof SuperClass); //false
console.log(SubClass.prototype instanceof SuperClass); //true


//=======================================================//


//类式继承两个缺点
function SuperClass() {
	this.books = ['JavaScript', 'html', 'css'];
}
function SubClass() {}
SubClass.prototype = new SuperClass();
var instance1 = new SubClass();
var instance2 = new SubClass();
console.log(instance2.books); //['JavaScript', 'html', 'css']
instance1.books.push('设计模式');
console.log(instance2.books); //['JavaScript', 'html', 'css','设计模式']

//instance1的修改同时也修改了instance2的book属性，在编程中容易埋藏陷阱

//第二个缺点
//由于子类实现的继承是靠其原型prototype对父类的实例化实现的，因此在创建父类的时候
//是无法向父类传递参数的，因而在实例化父类的时候也无法对父类构造函数内的属性进行初始化