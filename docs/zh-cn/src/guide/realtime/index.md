---
title: 实时通信概览 | AirCode 文档
description: AirCode 结合 [Pusher](https://pusher.com/) 提供了一套极简单易用的实时通信服务。
---

# 实时通信概览 {#intro}

AirCode 结合 [Pusher](https://pusher.com/) 提供了一套极简单易用的实时通信服务。

首先按装依赖包，引入 `aircode-pusher`:

<img src="https://aircode-yvo.b-cdn.net/resource/1691045457929-7rhky4e0aws.jpg" alt="aircode-pusher" width="200">

然后即可以用简单的几行代码通过云函数部署一个通信服务：

```js
const {Pusher} = require('aircode-pusher');
const pusher = new Pusher(Pusher.DEBUG_CONFIG);

// 创建一个频道
const channel = pusher.channel('my-channel');

channel.subscribe('test-event', async ({event, data, channel}) => {
  // 监听客户端test-event事件，并发送响应数据给客户端
  await channel.trigger(event, {
    message: 'welcome', 
    from: channel.name
  });
});

module.exports = pusher.listen();
```

客户端浏览器引入客户端JS：

```html
<script src="https://unpkg.com/aircode-pusher"></script>
```

然后通过云函数URL建立连接：

```js
const pusher = new Pusher('https://qzwyiigked.us.aircode.run/hello');
(async () => {
  // 建立到服务的连接，并获取服务端订阅的所有频道
  const channels = await pusher.connect();
  // 通过 bind 监听数据
  channels[0].bind('test-event', (data) => {
    console.log(data);
  });
  // 通过 send 发送数据
  channels[0].send('test-event', 'hello');
})();
```

## 快速上手 {#quickstart}

如果你从未使用过 AirCode 创建实时通信应用，建议先跟随实时通信入门快速上手。

<ListBoxContainer>
  <ListBox
    title="实时通信入门"
    link="https://github.com/AirCodeLabs/aircode/blob/main/extensions/aircode-pusher/docs/cn-getting-started.md"
    description="快速上手 AirCode 实时通信，发送、接收消息"
    single
  />
</ListBoxContainer>

## API定义 {#api}

<ListBoxContainer>
  <ListBox
    title="实时通信 API"
    link="https://github.com/AirCodeLabs/aircode/blob/main/extensions/aircode-pusher/docs/cn-pusher-api.md"
    description="关于 Pusher 的所有接口定义"
    single
  />
</ListBoxContainer>