import url from 'url';
const myUrl = new URL('https://bcaquestionpaper.netlify.app/html/mathematics_i');
console.log(myUrl.hostname)
console.log(myUrl.href)
console.log(myUrl.origin)
myUrl.pathname = "/a/b/c";
myUrl.search = "?d=e";
myUrl.hash = "#fgh"
console.log(myUrl.href)
