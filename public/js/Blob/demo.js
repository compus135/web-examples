/**
 * 第一个参数array
 * 1. DomString: string
 * 2. ArrayBuffer: 二进制数据缓冲区
 * 3. Blob: 原始数据的类文件对象，通常表示二进制数据
 * 4. ArrayBufferView:
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/Blob
 *
 * 第二个参数 {type:string}
 * type: 默认是"", 数组内容的MIME类型
 *
 *
 * 应用
 * URL.createObjectURL(blob):string 创建一个URL对象表示指定的blob
 * URL.revokeObjectURL() 不需要URL对象时，需要释放
 *
 *
 * 参考
 * Content-Type https://tool.oschina.net/commons/, https://www.runoob.com/http/http-content-type.html
 *
 *
 *
 */
var blob = new Blob(["aaa"]);

var r = URL.createObjectURL(blob);

// const buffer = new ArrayBuffer(8);

console.log(r);
