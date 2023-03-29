# 快速上手 {#intro}

这是一个为首次接触 AirCode 的开发者准备的 5 分钟上手教程。通过本教程，你将学会：
1. 创建 AirCode 应用，在线开发和调试云函数代码
2. 部署一个 Hello World 线上接口，可直接通过 HTTP 调用

我们准备了一个可直接运行的例子，点击 **Run** 按钮，即可查看本例中云函数的运行结果。

<script setup>
import { useData } from 'vitepress';

const { isDark } = useData();
</script>

<iframe
  :src="`https://codesandbox.io/embed/hungry-chatterjee-c2yyux?fontsize=14&hidenavigation=1&codemirror=1&hidenavigation=1&theme=${isDark ? 'dark' : 'light'}`"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="hungry-chatterjee-c2yyux"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 创建一个应用 {#create-an-app}

注册并登录 [AirCode Dashboard](https://aircode.io/dashboard) 后，点击 **+ New Node.js App**，在弹出的对话框中输入应用名称即可完成创建。

> 此处我们创建一个名为 `Hello World` 的应用作为示例。

<ACImage src="/_images/1668073287668.png" mode="light" />
<ACImage src="/_images/1671505257580.png" mode="dark" />

创建完成后，会自动跳转到创建的应用页面，在这个页面中可以完成代码的开发、调试和上线。

<ACImage src="/_images/1671505485031.png" mode="light" />
<ACImage src="/_images/1671505442147.png" mode="dark" />

## 创建第一个函数 {#create-a-function}

每一个新建的应用都会默认包含一个名为 `hello.js` 的云函数，你也可以创建自己的函数。点击 **+** 按钮，在输入框中输入函数名称，并点击 **✓** 完成创建。

> 此处我们创建一个名为 `myHelloWorld.js` 的云函数作为示例。

<ACImage src="/_images/1671505845666.png" mode="light" />
<ACImage src="/_images/1671505926961.png" mode="dark" />

创建完成后的函数将包含一段初始代码。

```js
const aircode = require('aircode');

module.exports = async function(params, context) {
  console.log('Received params:', params);
  return {
    message: 'Hi, AirCode.'
  };
}
```

## 在线调试函数 {#debug}

AirCode 提供了一个易用的在线调试函数功能，让你可以在开发时随时查看函数运行结果，及时调整。

首先将函数内容进行如下修改：

```js{7}
const aircode = require('aircode');

module.exports = async function(params, context) {
  console.log('Received params:', params);
  // Return the payload passing by params
  return {
    message: params.payload,
  };
}
```

在右侧功能区的 **Debug** 区域中，修改 **Params** 部分的内容为如下 JSON 字符串：

```json
{
  "payload": "Hello, Micheal!"
}
```

点击 **Debug** 按钮，发送请求到函数 `myHelloWorld.js`。这时， **Params** 部分的 JSON 字符串将作为参数传递给函数，并可以在函数中通过 `params` 字段获取到。

运行结束后，在 **Response** 区域可以看到函数运行的返回值：

```json
{
  "message": "Hello, Micheal!"
}
```

在 **Console** 区域，可以看到函数运行过程中通过 `console.log` 输出的日志：

```
18:24:30.237 Received params: { payload: 'Hello, Micheal!' }
```

<ACImage src="/_images/1671506066219.png" mode="light" />
<ACImage src="/_images/1671506114424.png" mode="dark" />

## 部署云函数 {#deploy}

当我们完成函数的开发后，只需将其部署到线上，就可以在真实环境中调用。

点击顶部栏中的 **Deploy** 按钮，保持弹出的对话框中的选项不变，确认开始部署。

<ACImage src="/_images/1671506272223.png" mode="light" />
<ACImage src="/_images/1671506314802.png" mode="dark" />

部署成功后，在函数名称下方会出现该函数的线上 URL，点击可以将其复制到剪切板。

<ACImage src="/_images/1671506405456.png" mode="light" />
<ACImage src="/_images/1671506377900.png" mode="dark" />

这个 URL 可以通过浏览器直接访问，若要传递参数，只需在 URL 添加 `?key=value` 的形式。例如：

```
https://sample.hk.aircode.run/myHelloWorld?payload=hello
```

或者直接查看我们的可运行示例：

<iframe
  :src="`https://codesandbox.io/embed/hungry-chatterjee-c2yyux?fontsize=14&hidenavigation=1&codemirror=1&hidenavigation=1&theme=${isDark ? 'dark' : 'light'}`"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="hungry-chatterjee-c2yyux"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 接下来 {#next}

恭喜你开发并部署了第一个云函数。针对在真实场景中通过 AirCode 创建机器人的方法，我们准备了一系列手把手的实践教程。

<ListBoxContainer>
<ListBox
  title="开发钉钉 ChatGPT 机器人"
  link="https://aircode.cool/xspb3by9fs"
  description="将钉钉接入 ChatGPT，支持在单聊和群聊中和 ChatGPT 对话"
  open-in-new-tab
/>
<ListBox
  title="开发飞书 ChatGPT 机器人"
  link="https://aircode.cool/q4y1msdim4"
  description="开发一个飞书机器人，不仅可以对话聊天，还可以接入 ChatGPT，变为一个智能助理"
  open-in-new-tab
/>
<ListBox
  title="将 Siri 接入 ChatGPT"
  link="https://aircode.cool/828668wg5a"
  description="将 Siri 接入 ChatGPT，直接语音唤醒，并且支持连续对话"
  open-in-new-tab
/>
<ListBox
  title="开发企业微信 ChatGPT 应用"
  link="https://aircode.cool/54fhemjpk2"
  description="开发一个企业微信聊天应用，接入 ChatGPT 支持智能聊天"
  open-in-new-tab
/>
</ListBoxContainer>

如果你想更详细地了解如何在 AirCode 中运用各项功能，可以参考以下功能指南。

<ListBoxContainer>
<ListBox
  title="云函数"
  link="/guide/functions/"
  description="使用 Node.js 编写代码，在线测试并极速发布为线上接口"
/>
<ListBox
  title="数据库"
  link="/guide/database/"
  description="直接在云函数中调用接口，完成增删改查或更高级的数据操作"
/>
<ListBox
  title="文件存储"
  link="/guide/files/"
  description="上传、下载、删除文件，都只需要一行代码，还有自带的 CDN 加速功能"
/>
<ListBox
  title="资源限制"
  link="/about/limits"
  description="查看不同套餐情况下资源数限制，以及如何更改或提高限额"
/>
</ListBoxContainer>
