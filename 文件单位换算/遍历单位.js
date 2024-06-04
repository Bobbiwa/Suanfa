//本题来源于：https://juejin.cn/post/7360528073631318027
function handler(kb) {
  const unit = ["B","KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let index = 0;
  while (kb >= 1024) {
    kb /= 1024;
    index++;
  }
  return kb.toFixed(2) + unit[index];
}

handler(1024*1024+1)

/*
比较low的写法
function formatSizeUnits(kb) {
    var result = '';

    if (kb < 1024) {
        result = kb + ' KB';
    } else if (kb < 1024 * 1024) {
        result = (kb / 1024).toFixed(2) + ' MB';
    } else if (kb < 1024 * 1024 * 1024) {
        result = (kb / 1024 / 1024).toFixed(2) + ' GB';
    } else {
        result = (kb / 1024 / 1024 / 1024).toFixed(2) + ' TB';
    }

    return result;
}
*/

