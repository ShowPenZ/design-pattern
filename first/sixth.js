//多态 同一个方法多种调用方式

//类形式 的多态
function Add() {
	//无参数算法
	function zero() {
		return 10;
	}
	//一个参数算法
	function one(num) {
		return 10 + num;
	}
	//两个参数算法
	function two(num1, num2) {
		return num1 + num2;
	}
	//相加共有方法
	this.add = function() {
		var arg = arguments,
			len = arg.length;
		switch (len) {
			//没有参数
			case 0:
				return zero();
			case 1:
				return one(arg[0]);
			case 2:
				return two(arg[0], arg[1]);
		}
	};
}

var A = new Add();
console.log(A.add()); //10
console.log(A.add(5)); //15
console.log(A.add(6, 7)); //13
