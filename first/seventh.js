//工厂模式
//简单工厂模式就是创建对象

//篮球基类
var Basketball = function() {
	this.intro = '篮球盛行于美国';
};

Basketball.prototype = {
	getMember: function() {
		console.log('每个队伍需要五个人');
	},
	getBallSize: function() {
		console.log('篮球很大');
	}
};

//足球基类
var Football = function() {
	this.intro = '足球在世界范围内很流行';
};

Football.prototype = {
	getMember: function() {
		console.log('每个队伍需要11个人');
	},
	getBallSize: function() {
		console.log('足球很大');
	}
};

//运动工厂
var SportsFactory = function(name) {
	switch (name) {
		case 'NBA':
			return new Basketball();
		case 'wordCup':
			return new Football();
	}
};

var football = SportsFactory('wordCup');
console.log(football);
console.log(football.intro);
football.getMember();

//工厂模式
function createBook(name, time, type) {
	//创建一个对象并对对象拓展属性和方法
	var o = new Object();
	o.name = name;
	o.time = time;
	o.type = type;
	o.getName = function() {
		console.log(this.name);
	};
	//将对象返回
	return o;
}

var book1 = createBook('js book', 2014, 'js');
var book2 = createBook('css book', 2013, 'css');
book1.getName(); //js book
book2.getName(); //css book

//=======================================================//

//安全工厂方法
//安全模式创建的工厂类
var Factory = function(type, content) {
	if (this instanceof Factory) {
		var s = new this[type](content);
		return s;
	} else {
		return new Factory(type, content);
	}
};

//工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
	Java: function(content) {
		//...
	},
	JavaScript: function() {
		//...
	},
	UI: function() {
		this.content = content;
		(function(content) {
			var div = document.createElement('div');
			div.innerHTML = content;
			div.style.border = '1px solid red';
			document.getElementById('container').appendChild('div');
		})(content);
	},
	PHP: function() {
		//...
	}
};

var data = [
	{ type: 'JavaScript', content: 'JavaScript哪家强' },
	{ type: 'JavaScript', content: 'JavaScript哪家强' },
	{ type: 'JavaScript', content: 'JavaScript哪家强' },
	{ type: 'UI', content: 'UI哪家强' },
	{ type: 'UI', content: 'UI哪家强' },
	{ type: 'UI', content: 'UI哪家强' }
];

for (var i = 6; i >= 0; i--) {
	Factory(s[i].type, s[i].content);
}
