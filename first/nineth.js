//建造者模式
//建造者模式注重的是建造的细节

//创建一个人类
var Human = function(param) {
	// 技能
	this.skill = (param && param.skill) || '保密';
	// 兴趣爱好
	this.skill = (param && param.skill) || '保密';
};

//类人原型
Human.prototype = {
	getSkill: function() {
		return this.skill;
	},
	getHobby: function() {
		return this.hobby;
	}
};

//实例化姓名类
var Named = function(name) {
	var that = this;
	//构造器
	//构造函数解析姓名的姓与名
	(function(name, that) {
		that.wholeName = name;
		if (name.indexOf(' ') > -1) {
			that.FirstName = name.slice(0, name, indexOf(' '));
			that.secondName = name.slice(name.indexOf(' '));
		}
	})(name, that);
};

//实例化职位类
var Work = function(work) {
	var that = this;
	//构造器
	//构造函数中通过传入的职位特征来设置相应职位以及描述
	(function(work, that) {
		switch (work) {
			case 'code':
				that.work = '工程师';
				that.workDescript = '每天沉醉于编程';
				break;
			case 'UI':
			case 'UE':
				that.work = '设计师';
				that.workDescript = '设计似乎是一种技术';
				break;
		}
	});
};

//更换期望的职位
Work.prototype.changeWork = function(work) {
	this.work = work;
};

/**
 * 应聘者建造者
 * @param {*} name wholeName
 * @param {*} work
 */
var Person = function(name, work) {
	//创建应聘者缓存对象
	var _person = new Human();
	//创建应聘者姓名解析对象
	_person.name = new Named(name);
	//创建应聘者期望职位
	_person.work = new Work(work);
	//将创建的应聘者对象返回
	return _person;
};

var person = new Person('xiao ming', 'code');
console.log(person.skill); //保密
console.log(person.name.FirstName); //xiao
console.log(person.work.work); //工程师
console.log(person.work.workDescript); //每天沉醉于编程
