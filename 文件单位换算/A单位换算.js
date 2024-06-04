const unit = ['B','KB','MB','GB','TB','PB','EB','ZB','YB']
function fn(size) {
  let a = 0
  while (size / 1024 >= 1.2) {
    size = (size / 1024).toFixed(2)
    a++
  }
  return size + ' ' + unit[a]
}

console.log(fn(1024 * 1024 * 1255))