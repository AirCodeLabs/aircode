# Retrieve GET parameters {#intro}

We recommend using the POST method to call cloud functions because of the more types and the more significant amount of data that can be passed this way.

Of course, there are cases (e.g., when acting as a Webhook interface) where a GET call is required. In these cases, the `params` type is `Object`, representing the parameters attached to the URL (i.e. Query String).

::: tip Tips
All values in a GET request are of type `string` or `Array<string>`, i.e., `params.a === '1'` when passed `a=1`.
:::

For example, for the following cloud function:

```js
module.exports = async function(params, context) {
  return {
    method: context.method,
    paramsFromGet: params
  };
}
```

After deployment, send a GET request:

```sh
curl -X GET \
"https://sample.hk.aircode.run/postParams?hello=world&abc=xyz&abc=123"
```

Will get the following result.

```json
{
  "method": "GET",
  "paramsFromPost": {
    "hello": "world",
    "abc": [ "xyz", "123" ]
  }
}
```
