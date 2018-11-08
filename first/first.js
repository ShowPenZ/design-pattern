//1.收编变量 一切皆变量

/**
 * 构建对象
 */
var checkObject = {
	//检查名字
	checkName: function() {},
	//检查邮箱
	checkEmail: function() {}
};

//调用方式
var a = checkObject();
a.checkName();
a.checkEmail();

//=======================================================//

/**
 * 使用类来书写
 */
var checkObject1 = function() {
	//检查名字
	this.checkName = function() {};
	//检查邮箱
	this.checkEmail = function() {};
};

//调用方式
var b = new checkObject1();
b.checkEmail();
b.checkName();

//=======================================================//

/**
 * 使用函数原型构造
 * 这种创建对象实例，创造出来的对象所拥有的方法就是一个了，
 * 因为它们都需要依赖prototype原型依次寻找
 * 而找到的方法都是同一个，它们都绑定在checkObject2对象类的原型上
 */
var checkObject2 = function() {
	checkObject2.prototype = {
		checkName: function() {},
		checkEmail: function() {}
	};
};

//调用方式
var c = new checkObject2();
c.checkName();
c.checkEmail();

//=======================================================//

/**
 * 使用函数原型构造（使用链式调用）
 */

var checkObject3 = function() {
	checkObject3.prototype = {
		checkName: function() {
			//todo
			return this;
		},
		checkEmail: function() {
			//todo
			return this;
		}
	};
};

//调用方式(链式调用)
var d = new checkObject3();
d.checkName().checkEmail();

//=======================================================//

/**
 * 统一添加方法的功能方法
 */
Function.prototype.addMethods = function(name, fn) {
	this[name] = fn;
};

var methods = function() {}; //或者var methods = new Function() {};
methods.addMethods(checkName, function() {
	//验证姓名
});

methods.addMethods(checkEmail, function() {
	//验证邮箱
});
//调用方式
methods.checkEmail();
methods.checkName();

//=======================================================//

/**
 * 统一添加方法的功能方法(链式调用)
 */
Function.prototype.addMethods = function(name, fn) {
    this[name] = fn;
    return this;
};

var methods = function() {}; //或者var methods = new Function() {};
methods.addMethods(checkName, function() {
	//验证姓名
});

methods.addMethods(checkEmail, function() {
	//验证邮箱
});
//调用方式
methods.checkEmail().checkEmail();

//=======================================================//

/**
 * 统一添加方法的功能方法(类式调用方法)
 */
Function.prototype.addMethods = function(name, fn) {
    this.prototype[name] = fn;
};

var methods = function() {}; //或者var methods = new Function() {};
methods.addMethods(checkName, function() {
	//验证姓名
});

methods.addMethods(checkEmail, function() {
	//验证邮箱
});

//调用方式
var e = new methods();
e.checkEmail();
