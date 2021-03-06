
/**
 * String
 * String 全局对象是一个用于字符串或一个字符序列的构造函数。
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
 */


/**
 * 属性
 */
String.prototype
// 可以为 String 对象增加新的属性。

/**
 * 方法
 */
String.fromCharCode()
// 通过一串 Unicode 创建字符串。
String.fromCodePoint()
// 通过一串 码点 创建字符串。
String.raw()
// 通过模板字符串创建字符串。


/**
* String 实例
*/

/** 属性 */
String.prototype.constructor
// 用于创造对象的原型对象的特定的函数。
String.prototype.length
// 返回了字符串的长度。

/** 跟HTML无关的方法 */

// 29
// 字符 3
// 判断 3
// 找下标 2
// 扩充 4
// 截取 3
// 数组 1
// 大小写 4
// 前后去空格 5
// 没有意义 4


/** 字符 */
String.prototype.charAt()
// 返回特定位置的字符。
String.prototype.charCodeAt()
// 返回表示给定索引的字符的Unicode的值。
String.prototype.codePointAt()
// 返回使用UTF-16编码的给定位置的值的非负整数。

/** 是否满足 */
String.prototype.startsWith()
// 判断字符串的起始位置是否匹配其他字符串中的字符。
String.prototype.endsWith()
// 判断一个字符串的是否以给定字符串结尾，结果返回布尔值。
String.prototype.includes()
// 判断一个字符串里是否包含其他字符串。

/** 找下标 */
String.prototype.indexOf()
// 从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回 - 1。
String.prototype.lastIndexOf()
// 从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回 - 1。

/** 正则 */
String.prototype.search()
// 对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。
String.prototype.match()
// 使用正则表达式与字符串相比较。
String.prototype.replace()
// 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。

/** 扩充 */
String.prototype.padEnd()
// 在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。
String.prototype.padStart()
// 在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。
String.prototype.repeat()
// 返回指定重复次数的由元素组成的字符串对象。
String.prototype.concat()
// 连接两个字符串文本，并返回一个新的字符串。

/** 截取 */
String.prototype.slice()
// 摘取一个字符串区域，返回一个新的字符串。
String.prototype.substr()
// 通过指定字符数返回在指定位置开始的字符串中的字符。
String.prototype.substring()
// 返回在字符串中指定两个下标之间的字符。

/** 数组 */
String.prototype.split()
// 通过分离字符串成字串，将字符串对象分割成字符串数组。

/** 大小写转换 */
String.prototype.toLocaleLowerCase()
// 根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，toLowerCase的返回值是一致的。
String.prototype.toLocaleUpperCase()
// 根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，toUpperCase的返回值是一致的。
String.prototype.toLowerCase()
// 将字符串转换成小写并返回。
String.prototype.toUpperCase()
// 将字符串转换成大写并返回。

/** 去空格 */
String.prototype.trim()
// 从字符串的开始和结尾去除空格。参照部分 ECMAScript 5 标准。
String.prototype.trimStart()
String.prototype.trimLeft()  // This API has not been standardized.
// 从字符串的左侧去除空格。
String.prototype.trimEnd()
String.prototype.trimRight()  // This API has not been standardized.
// 从字符串的右侧去除空格。

String.prototype.toString()
// 返回用字符串表示的特定对象。重写 Object.prototype.toString 方法。
String.prototype.valueOf()
// 返回特定对象的原始值。重写 Object.prototype.valueOf 方法。
String.prototype.localeCompare()
// 返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同。
String.prototype.normalize()
// 返回调用字符串值的Unicode标准化形式。

// String.prototype[@@iterator]()
// 返回一个新的迭代器对象，该对象遍历字符串值的索引位置，将每个索引值作为字符串值返回。
String.prototype.quote()  // This is an obsolete API and is no longer guaranteed to work.
// 设置嵌入引用的引号类型。
String.prototype.toSource()  // This API has not been standardized.
// 返回一个对象文字代表着特定的对象。你可以使用这个返回值来创建新的对象。重写 Object.prototype.toSource 方法。



/** HTML wrapper methods */
/** 下面的方法被限制使用，因为只对可用的HTML标签和属性提供部分支持。 */
String.prototype.anchor()
// <a name="name"> (hypertext target)
String.prototype.big()
// <big>
String.prototype.blink()
// <blink>
String.prototype.bold()
// <b >
String.prototype.fixed()
// <tt>
String.prototype.fontcolor()
// <font color = "color">
String.prototype.fontsize()
// < font size = "size" >
String.prototype.italics()
// < i >
String.prototype.link()
// < a href = "url" > (link to URL)
String.prototype.small()
// < small >
String.prototype.strike()
// < strike >
String.prototype.sub()
// < sub >
String.prototype.sup()
// <sup>