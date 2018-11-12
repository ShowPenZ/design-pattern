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
