//单例模式

var Ming = {
	g: function(id) {
		return document.getElementById(id);
	},
	css: function(id, key, value) {
		g(id).style[key] = value;
	}
	//...
};

//修改版
var Ming = {
	g: function(id) {
		return document.getElementById(id);
	},
	css: function(id, key, value) {
		this.g(id).style[key] = value;
	}
	//...
};

var Conf = (function() {
	// 私有变量
	var conf = {
		MAX_NUM: 100,
		MIN_NUM: 1,
		COUNT: 1000
	};
	//返回取值器对象
	return {
		//取值器方法
		get: function() {
			return conf[name] ? conf[name] : null;
		}
	};
})();

var count = Conf.get('COUNT');
console.log(count); //1000
