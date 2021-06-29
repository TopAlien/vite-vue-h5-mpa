//判断是否android环境
export function isAndroid() {
  return /android/.test(navigator.userAgent.toLowerCase());
}

//判断是否IOS环境
export function isIOS() {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}