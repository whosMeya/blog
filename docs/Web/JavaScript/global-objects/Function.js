
/**
 * Function
 * Function 构造函数 创建一个新的Function对象。 在 JavaScript 中, 每个函数实际上都是一个Function对象。
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function
 * 
 * Function构造器生成的函数，在全局作用域中被创建
 */


/**
 * 属性和方法
 * 全局的Function对象没有自己的属性和方法, 但是, 因为它本身也是函数，所以它也会通过原型链从Function.prototype上继承部分属性和方法。
 */

// new Function([arg1[, arg2[, ...argN]],]functionBody)

/**
 * 原型对象
 */

/** 属性 */
Function.arguments
// 以数组形式获取传入函数的所有参数。此属性已被arguments替代。
Function.caller
// 获取调用函数的具体对象。
Function.length
// 获取函数的接收参数个数。
Function.name
// 获取函数的名称。
Function.displayName
// 获取函数的display name。
Function.prototype.constructor
// 声明函数的原型构造方法，详细请参考 Object.constructor。

/** 方法 */
Function.prototype.apply()
// 在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入。
Function.prototype.bind()
// bind()方法会创建一个新函数, 称为绑定函数.当调用这个绑定函数时, 绑定函数会以创建它时传入 bind()方法的第一个参数作为 this, 传入 bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.
Function.prototype.call()
// 在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。
Function.prototype.toString()
// 获取函数的实现源码的字符串。覆盖了 Object.prototype.toString 方法。
Function.prototype.isGenerator()  // 非标准
// 若函数对象为generator，返回true，反之返回 false。
Function.prototype.toSource()  // 非标准
// 获取函数的实现源码的字符串。 覆盖了 Object.prototype.toSource 方法。



/** 
 * apply bind call
 * apply 和 call 类似，  区别是第二个参数不同
 * apply, call 执行函数   bind返回新函数
 * if (thisArg == undefined | null) this = window，
 * if (thisArg == number | boolean | string) this = new Number() | new Boolean() | new String()
 */
// func.apply(thisArg, [argsArray])
// func.bind(thisArg[, arg1[, arg2[, ...]]])
// func.call(thisArg, arg1, arg2, ...)

var o1 = {
  a: 1,
  b: function (x, y) {
    console.log(this.a, x, y);
  }
}
var o2 = {
  a: 2,
}
var f = o1.b;
f(7, 8); // undefined 7 8
var f1 = f.bind(o2);
var f2 = f.bind(o2, 4);
f1(7, 8) // 2 7 8
f2(5, 6) // 2 4 5

o1.b(7, 8); // 1 7 8
o1.b.apply(o2, [7, 8]);  // 2 7 8
o1.b.call(o2, 7, 8);  // 2 7 8



/**
 * 继承
 * 每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）。
   该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。
   根据定义，null 没有原型，并作为这个原型链中的最后一个环节。
 * 几乎所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。
 * 特例：new Object(null) 没有__proto__。
 * 在 ES2015/ES6 中引入了 class 关键字，但那只是语法糖，JavaScript 仍然是基于原型的
 */


