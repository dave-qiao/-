// 防抖函数: 固定时间内只执行一次函数，重复调用会重置计时的开始时间，最后一个调用生效并执行

/**
 * 简单版本
 * @param {Function} fn 
 * @param {Number} timeout
 * @param {Bollean} immediate
 * @returns
 */

function debounce(fn, timeout, immediate = false) {
  // 参数校验
  if (typeof fn !== 'function' || typeof timeout !== 'number') {
    console.error('参数类型异常');
    return;
  }

  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    // 是否立即执行
    if (immediate) {
      !timer && fn.apply(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, timeout);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, timeout);
    }
  }
}


