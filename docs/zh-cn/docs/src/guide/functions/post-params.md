# 获取 POST 参数 {#intro}

当使用 POST 请求调用云函数时，HTTP Request Body 会被转化为对应云函数中的 `params` 变量，方便开发者获取和使用。

根据请求 Content Type 的不同，`params` 也会有不同的类型。

## `application/json` {#application-json}

`application/json` 为最常用的请求数据类型，此时 `params` 的类型为 `Object`，其值是对 Request Body 使用 [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) 得到的。

例如，对于如下云函数：

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

部署后，携带 `application/json` 类型的数据发送 POST 请求：

```sh
curl -X POST -d '{"hello":"world"}' -H "Content-Type:application/json" \
https://sample.hk.aircode.run/postParams
```

会得到如下结果：

```json
{ 
  "method": "POST",
  "paramsFromPost": {
    "hello": "world"
  }
}
```

## `multipart/form-data` {#multipart-form-data}

`multipart/form-data` 一般用于上传文件，此时 `params` 的类型为 `Object`，并以 Key-Value 的形式直接对应请求数据。对于文件，其数据结构如下：

```typescript
type UploadFile = {
  name: string;       // Name of the uploaded file
  encoding: string;   // Encoding type of the file
  type: string;       // Mime type of the file
  size: number;       // Size of the file in bytes
  buffer: Buffer;     // Content of the entire file
}
```

例如，对于如下云函数：

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

部署后，携带 `multipart/form-data` 类型的数据发送 POST 请求：

```sh
# Please make sure you have hello.txt in your directory
curl -X POST -F "abc=123" -F xyz=@hello.txt \
https://sample.hk.aircode.run/postParams
```

会得到如下结果：

```json
{
  "method": "POST",
  "paramsFromPost": {
    "abc": "123",
    "xyz": {
      "name": "hello.txt",
      "encoding": "utf-8",
      "type": "text/plain",
      "size": 11,
      "buffer": {
        "type": "Buffer",
        "data": [ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100 ]
      }
    }
  }
}
```

::: tip 提示
如果想详细了解如何从浏览器上传文件，并保存到 AirCode 的文件存储中，可参考教程：[上传文件 - 在浏览器中上传](/guide/files/upload.html#browser-upload)。
:::

## `application/x-www-form-urlencoded` {#application-x-www-form-urlencoded}

当请求的 Content Type 为 `application/x-www-form-urlencoded` 时，`params` 的类型为 `Object`，其值是对 Request Body 使用 [`querystring.parse`](https://nodejs.org/api/querystring.html#querystringparsestr-sep-eq-options) 得到的。

::: tip 提示
当使用 `application/x-www-form-urlencoded` 时，所有参数对应的值均为 `string` 或 `Array<string>` 类型，即传递 `a=1` 时 `params.a === '1'`。
:::

例如，对于如下云函数：

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

部署后，携带 `application/x-www-form-urlencoded` 类型的数据发送 POST 请求：

```sh
curl -X POST -d 'hello=world&abc=xyz&abc=123' \
-H "Content-Type:application/x-www-form-urlencoded" \
https://sample.hk.aircode.run/postParams
```

会得到如下结果：

```json
{
  "method": "POST",
  "paramsFromPost": {
    "hello": "world",
    "abc": [ "xyz", "123" ]
  }
}
```

## `text/plain` {#text-plain}

`text/plain` 一般用于发送纯文本内容，此时 `params` 的类型为 `string`，代表该文本的内容。

例如，对于如下云函数：

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

部署后，携带 `text/plain` 类型的数据发送 POST 请求：

```sh
curl -X POST -d "Some Text..." -H "Content-Type:text/plain" \
https://sample.hk.aircode.run/postParams
```

会得到如下结果：

```json
{
  "method": "POST",
  "paramsFromPost": "Some Text..."
}
```

## 其他类型 {#other-types}

当使用其他类型（例如 `application/octet-stream`）时，`params` 的类型为 `Buffer`，代表请求的原始二进制数据。

例如，对于如下云函数：

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

部署后，携带 `application/octet-stream` 类型的数据发送 POST 请求：

```sh
curl -X POST -d "Hello World" -H "Content-Type:application/octet-stream" \
https://sample.hk.aircode.run/postParams
```

会得到如下结果：

```json
{
  "method": "POST",
  "paramsFromPost": {
    "type": "Buffer",
    "data": [ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100 ]
  }
}
```
