# 获取 GET 参数 {#intro}

我们推荐使用 POST 方法来调用云函数，因为这样能传递多样的数据类型和更大的数据量。

当然，有些情况下（例如作为 Webhook 接口时），需要通过 GET 调用。此时，`params` 类型为 `Object`，代表附带在 URL 中的参数（即 Query String）。

::: tip 提示
GET 请求中所有参数对应的值均为 `string` 或 `Array<string>` 类型，即传递 `a=1` 时 `params.a === '1'`。
:::

例如，对于如下云函数：

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromGet: params
  };
}
```

部署后，发送 GET 请求：

```sh
curl -X GET \
"https://sample.hk.aircode.run/postParams?hello=world&abc=xyz&abc=123"
```

会得到如下结果：

```json
{
  "method": "GET",
  "paramsFromPost": {
    "hello": "world",
    "abc": [ "xyz", "123" ]
  }
}
```
