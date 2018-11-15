//外观模式：为一组复杂的子系统接口提供一个更高级的统一接口,通过这个接口使得对子系统接口更容易访问

//外观模式实现事件绑定
function addEvent(dom, type, fn) {
	//对于支持DOM2级事件处理程序addEventListener方法的浏览器
	if (dom.addEventListener) {
		dom.addEventListener(type, fn, false);
	} else if (dom.attachEvent) {
		dom.attachEvent('on' + type, fn);
	} else {
		//对于不支持addEventListener 方法也不支持attachEvent方法
		dom['on' + type] = fn;
	}
}

//适配器模式

//数据适配
var arr = ['JavaScript', 'book', '前端编程语言', '8月1日'];

var obj = {
	name: '',
	type: '',
	title: '',
	time: ''
};

function arrToObjAdapter(arr) {
	return {
		name: arr[0],
		name: arr[1],
		name: arr[2],
		name: arr[3]
	};
}

var adapterData = arrToObjAdapter(arr);
console.log(adapterData); //[name:'JavaScript', ty[e:'book', title:'前端编程语言', time:'8月1日'];
