// Add your functions here
function map(src, cb) {
    let r = []

    for (let i = 0; i < src.length; i++) {
      let elem = src[i]
      r.push(cb(elem))
    }

    return r;
  }

  function reduce(src, cb, counter){
    let r = (!!counter) ? counter : src[0]
    let i = (!!counter) ? 0 : 1

    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }

    return r;
  }
