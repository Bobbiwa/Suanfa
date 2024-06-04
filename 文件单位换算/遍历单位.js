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
