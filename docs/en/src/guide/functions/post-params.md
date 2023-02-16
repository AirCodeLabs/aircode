# Retrieve POST Parameters {#intro}

When a cloud function is called using a POST request, the HTTP Request Body is converted into `params` variables in the corresponding function, making it easily accessible and usable by developers.

Depending on the request **Content Type**, `params` will also have different types.

## `application/json` {#application-json}

`application/json` is the most common request data type, where `params` is of type `Object` and represents the Request Body processed by [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/).

For example, for the following cloud function:

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

After deployment, send a POST request with data of type `application/json`:

```sh
curl -X POST -d '{"hello": "world"}' -H "Content-Type:application/json" \
https://sample.hk.aircode.run/postParams
```

Will get the following response:

```json
{ 
  "method": "POST",
  "paramsFromPost": {
    "hello": "world"
  }
}
```

## `multipart/form-data` {#multipart-form-data}

`multipart/form-data` is generally used for uploading files, where `params` is of type `Object` and represents the Request Body in the form of Key-Value pairs. 

Each file contains the following information:

```typescript
type UploadFile = {
  name: string;       // Name of the uploaded file
  type: string;       // Mime type of the file
  size: number;       // Size of the file in bytes
  buffer: Buffer;     // Content of the entire file
}
```

For example, for the following cloud function:

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

After deployment, send a POST request with data of type `multipart/form-data`:

```sh
# Please make sure you have hello.txt in your directory
curl -X POST -F "abc=123" -F xyz=@hello.txt \
https://sample.hk.aircode.run/postParams
```

Will get the following response:

```json
{
  "method": "POST",
  "paramsFromPost": {
    "abc": "123",
    "xyz": {
      "name": "hello.txt",
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

::: tip Tips
If you want to learn more about how to upload files from your browser and save them to AirCode's File Storage, you can refer to the guide: [Upload Files - Upload in a Browser](/guide/files/upload#browser-upload).
:::

## `application/x-www-form-urlencoded` {#application-x-www-form-urlencoded}

When the Content Type of the request is `application/x-www-form-urlencoded`, the type of `params` is `Object`, and its value represents the Request Body processed by [`querystring.parse`](https://nodejs.org/api/querystring#querystringparsestr-sep-eq-options).

::: tip Tips
When using `application/x-www-form-urlencoded`, all values are of type `string` or `Array<string>`, i.e., `params.a === '1'` when passed `a=1`.
:::

For example, for the following cloud function:

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

After deployment, send a POST request with data of type `application/x-www-form-urlencoded`:

```sh
curl -X POST -d 'hello=world&abc=xyz&abc=123' \
-H "Content-Type:application/x-www-form-urlencoded" \
https://sample.hk.aircode.run/postParams
```

Will get the following response:

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

`text/plain` is generally used to send plain text content, where `params` is of type `string`, representing the content of that text.

For example, for the following cloud function:

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

After deployment, send a POST request with data of type `text/plain`:

```sh
curl -X POST -d "Some Text..." -H "Content-Type:text/plain" \
https://sample.hk.aircode.run/postParams
```

will get the following response.

```json
{
  "method": "POST",
  "paramsFromPost": "Some Text..."
}
```

## Other Content Types {#other-types}

When using other content types (e.g. `application/octet-stream`), the type of `params` is `Buffer` and represents the raw binary data of the request.

For example, for the following cloud functions:

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromPost: params
  };
}
```

After deployment, send a POST request with data of type `application/octet-stream`:

```sh
curl -X POST -d "Hello World" -H "Content-Type:application/octet-stream" \
https://sample.hk.aircode.run/postParams
```

Will get the following response:

```json
{
  "method": "POST",
  "paramsFromPost": {
    "type": "Buffer",
    "data": [ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100 ]
  }
}
```
