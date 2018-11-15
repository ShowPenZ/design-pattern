//多继承

//单继承 属性复制(浅复制)
var extend = function(target, source) {
	//遍历源对象中的属性
	for (var property in source) {
		// 将源对象中的属性复制到目标对象中
		target[property] = source[property];
	}
	//返回目标对象
	return target;
};

//测试用例
var book = {
	name: 'js book',
	alike: ['css', 'html', 'js']
};

var anotherBook = {
	color: 'blue'
};

extend(anotherBook, book);
console.log(anotherBook.name); //js book
console.log(anotherBook.alike); //['css', 'html', 'js']
anotherBook.alike.push('ajax');
anotherBook.name = '设计模式';
console.log(anotherBook.name); //设计模式
console.log(anotherBook.alike); //['css','html','js','ajax']
console.log(book.name); //js
console.log(book.alike); //['css','html','js','ajax']

//多继承 属性复制
var mix = function() {
	var i = 1, //从第二个参数起为被继承的对象
		len = arguments.length, //获取参数长度
		target = arguments[0], //第一个对象为目标对象
		arg; //缓存参数对象
	//遍历被继承对象
	for (; i < len; i++) {
		//缓存当前对象
		arg = arguments[i];
		//遍历被继承对象中的属性
		for (var property in arg) {
			target[property] = arg[property];
		}
	}
	return target;
};

//可以将 mix 方法绑定到原生对象上Object上,这样所有的对象就可以拥有这个方法
Object.prototype.mix = function() {
	var i = 1, //从第二个参数起为被继承的对象
		len = arguments.length, //获取参数长度
		target = arguments[0], //第一个对象为目标对象
		arg; //缓存参数对象
	//遍历被继承对象
	for (; i < len; i++) {
		//缓存当前对象
		arg = arguments[i];
		//遍历被继承对象中的属性
		for (var property in arg) {
			target[property] = arg[property];
		}
	}
};

otherBook.mix(book1, book2);
console.log(otherBook); //Object {color :'blue',name:'js 设计模式'，mix:function,about:'一本js书'}
