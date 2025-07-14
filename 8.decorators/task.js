//Задача № 1
const md5 = require('./js-md5.js');

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    const objectFromCache = cache.find(object => object.hash === hash);
    if (objectFromCache){
      console.log("Из кеша: ", objectFromCache.value);
      return "Из кеша: " + objectFromCache.value;
    }

    const value = func(...args);
    cache.push({hash, value})
    if(cache.length > maxCacheValuesCount) {
      cache.shift();
    }

    console.log("Вычисляем: ", value);
    return "Вычисляем: " + value;
  };
}

module.exports = {
  cachingDecoratorNew
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++
      if (timeoutId){
        clearTimeout(timeoutId);
          } else {
          func(...args);
        wrapper.count++
          }
          timeoutId = setTimeout(() => {
func(...args); wrapper.count++ }, delay);
  }

  return wrapper;
}

module.exports = {
  debounceDecoratorNew, 
}
