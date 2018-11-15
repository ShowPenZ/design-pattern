//原型模式

//原型模式就是将可复用的，可共享的，耗时大的从基类中提出来然后放在原型中，
//然后子类通过组合继承或者寄生组合式继承而将方法和属性继承下来，对于子类
//中那些需要重写的方法进行重写，这样子类创建的对象既具有子类的属性和方法
//也共享了基类的原型方法

//图片轮播类
var LoopImages = function(imgArr, container) {
	this.imagesArray = imgArr; //轮播图片数组
	this.container = container; //轮播图片容器
};

LoopImages.prototype = {
	//创建轮播图片
	createImage: function() {
		console.log('LoopImages createImage function');
	},
	//切换下一张图片
	changeImage: function() {
		console.log('LoopImages changeImage function');
	}
};

//上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
	//构造函数继承图片轮播类
	LoopImages.call(this, imgArr, container);
};

SlideLoopImg.prototype = new LoopImages();
// 重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function() {
	console.log('SlideLoopImg changeImage function');
};

//渐隐切换类

var FadeLoopImg = function(imgArr, container, arrow) {
	//构造函数继承图片轮播类
	LoopImages.call(this, imgArr, container);
	//切换箭头私有变量
	this.arrow = arrow;
};

FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function() {
	console.log('FadeLoopImg changeImage function');
};

var fadeImg = new FadeLoopImg(['01.jpg', '01.jpg', '01.jpg', '04.jpg'], 'slide', [
	'left.jpg',
	'right.jpg'
]);

//测试用例
console.log(fadeImg.container); //slide
fadeImg.changeImage; // FadeLoopImg changeImage function

//原型对象是一个共享的对象,那么不论是父类的实例对象或者是子类的继承,都是对它的一个指向引用,
//所以原型对象才会被共享。既然被共享，那么对原型对象的拓展,不论是子类或者父类的实例对象都会继承下来

LoopImages.prototype.getImageLength = function() {
	return this.imagesArray.length;
};

FadeLoopImg.prototype.getContainer = function() {
	return this.container;
};

console.log(fadeImg.getImageLength()); //4
console.log(fadeImg.getContainer()); //slide
