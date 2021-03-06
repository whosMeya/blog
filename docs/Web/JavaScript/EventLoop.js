/**
 * 并发模型与事件循环
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop
 */


/**
 * 并发模型
 * JavaScript 的并发模型基于“事件循环”。
 */

/**
 * 栈
 * 函数调用形成了一个栈帧。
 */

function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7)); // 返回 42

// 当调用 bar 时，创建了第一个帧 ，帧中包含了 bar 的参数和局部变量。
// 当 bar 调用 foo 时，第二个帧就被创建，并被压到第一个帧之上，帧中包含了 foo 的参数和局部变量。
// 当 foo 返回时，最上层的帧就被弹出栈（剩下 bar 函数的调用帧 ）。
// 当 bar 返回的时候，栈就空了。


/**
 * 堆
 * 对象被分配在一个堆中，即用以表示一大块非结构化的内存区域。
 */


/**
 * 队列
 * 一个 JavaScript 运行时包含了一个待处理的消息队列。每一个消息都关联着一个用以处理这个消息的函数。
 * 在事件循环期间的某个时刻，运行时从最先进入队列的消息开始处理队列中的消息。
 *  为此，这个消息会被移出队列，并作为输入参数调用与之关联的函数。
 *  正如前面所提到的，调用一个函数总是会为其创造一个新的栈帧。
 * 函数的处理会一直进行到执行栈再次为空为止；然后事件循环将会处理队列中的下一个消息（如果还有的话）。
 */


/**********************************************************************************************/


/**     事件循环    */

while (queue.waitForMessage()) {
  queue.processNextMessage();
}

/**
 * 执行至完成
 */
// 每一个消息完整地执行后，其它消息才会被执行。
// 这为程序的分析提供了一些优秀的特性，包括：一个函数执行时，它永远不会被抢占，并且在其他代码运行之前完全运行（且可以修改此函数操作的数据）。

// 这个模型的一个缺点在于当一个消息需要太长时间才能处理完毕时，Web应用就无法处理用户的交互，例如点击或滚动。
// 浏览器用“程序需要过长时间运行”的对话框来缓解这个问题。
// 一个很好的做法是缩短消息处理，并在可能的情况下将一个消息裁剪成多个消息。


/**
 * 添加消息
 */
// 在浏览器里，当一个事件发生且有一个事件监听器绑定在该事件上时，消息会被随时添加进队列。
// 如果没有事件监听器，事件会丢失。
// 所以点击一个附带点击事件处理函数的元素会添加一个消息，其它事件类似。



// 函数 setTimeout 接受两个参数：待加入队列的消息和一个延迟（可选，默认为 0）。
// 这个延迟代表了消息被实际加入到队列的最小延迟时间。
// 如果队列中没有其它消息，在这段延迟时间过去之后，消息会被马上处理。
// 但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。
// 因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间。

// 下面的例子演示了这个概念（setTimeout 并不会在计时器到期之后直接执行）：

async function a() {
  console.log('fetch')
  await fetch('https://test.duliday.com/api/common/meta');
  console.log('两秒后打印 fetch')
}
a();
setTimeout(function () {
  // 两秒后执行 执行两秒
  const s1 = new Date().getSeconds();
  while (true) {
    if (new Date().getSeconds() - s1 >= 2) {
      console.log("又阻塞2秒");
      break;
    }
  }
}, 500);

const s = new Date().getSeconds();

setTimeout(function () {
  // 输出 "4"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("阻塞" + (new Date().getSeconds() - s) + "秒");
    break;
  }
}


/**
 * 零延迟
 */


/**
 * 多个运行时互相通信
 */
// 一个 web worker 或者一个跨域的 iframe 都有自己的栈，堆和消息队列。
// 两个不同的运行时只能通过 postMessage 方法进行通信。
// 如果另一个运行时侦听 message 事件，则此方法会向该运行时添加消息。




/******************************************/

/**
 * 永不阻塞
 */

// 事件循环模型的一个非常有趣的特性是，与许多其他语言不同，JavaScript 永不阻塞。
// 处理 I / O 通常通过事件和回调来执行，所以当一个应用正等待一个 IndexedDB 查询返回或者一个 XHR 请求返回时，它仍然可以处理其它事情，比如用户输入。




async function c() {
  console.log(1)
}

async function d() {
  await Promise.resolve('');
  console.log(2)
}

async function e() {
  console.log(3)
}

setTimeout(function () {
  console.log(4)
}, 0)

c();
d();
e();
console.log(5)

// 1
// 3
// 5
// 2
// 4