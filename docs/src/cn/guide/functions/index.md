# 云函数概览 {#intro}

云函数是 AirCode 的基本组成单元。通过我们提供的 WebIDE，让你无需关心基础设施搭建、环境配置和线上运维等繁琐之事，打开网页即可在线编写 Node.js 代码，调试并上线为可直接访问的后端接口。这些接口可方便地用于为前端提供数据、用户校验、Slack 机器人、Webhook 等等业务。

云函数底层是 Serverless 的，可以跟随流量自动扩缩容，帮助你快速应对访问高峰，节约资源消耗。

::: details 第一次接触云函数？
如果你之前从未开发过云函数，建议先跟随我们的[五分钟快速上手](/cn/getting-started/)学习如何使用。
:::

## 基本使用 {#essentials}

<ListBoxContainer>
<ListBox
  link="/cn/guide/functions/development"
  title="在线开发云函数"
  description="使用 WebIDE 在线开发云函数代码，了解云函数的参数、返回、错误处理和时区等问题"
/>
<ListBox
  link="/cn/guide/functions/debug"
  title="在线调试云函数"
  description="了解如何在线调试接口代码，传递参数并查看运行结果，以及如何使用线上请求来提升调试效率"
/>
<ListBox
  link="/cn/guide/functions/deployment"
  title="部署云函数"
  description="将开发完成的函数部署到线上，生成可直接访问的 URL 地址，并了解如何查看和管理版本"
/>
<ListBox
  link="/cn/guide/functions/invoke"
  title="调用云函数"
  description="通过 SDK 或 HTTP 调用云函数，包含对超时时间和 CORS 等策略的说明"
/>
<ListBox
  link="/cn/guide/functions/logs"
  title="线上日志"
  description="实时获取函数运行过程中生成的日志，还可以通过时间、关键字等信息来过滤日志内容，方便问题排查"
/>
<ListBox
  link="/cn/guide/functions/npm"
  title="使用 NPM 安装依赖"
  description="了解如何使用 NPM 来在线查找、安装和管理应用的依赖"
/>
</ListBoxContainer>

## API 定义 {#api}

<ListBoxContainer>
<ListBox
  link="/cn/reference/server/functions-runtime"
  title="云函数运行时"
  description="关于云函数 Node.js 版本、超时时间、环境变量、自动扩缩容、冷启动等的说明"
/>
<ListBox
  link="/cn/reference/server/functions-api"
  title="云函数 API"
  description="关于函数模板、params 及 context 的定义"
/>
</ListBoxContainer>

## 更多使用技巧 {#advanced}

- [使用环境变量](/cn/guide/functions/env)
- [发送 HTTP 请求](/cn/guide/functions/http-request)
- [函数间引用](/cn/guide/functions/require)
- [获取 POST 参数](/cn/guide/functions/post-params)
- [获取 GET 参数](/cn/guide/functions/get-params)

## 相关限制 {#limits}

- [资源限制 - 云函数](/cn/about/limits#functions)
- [资源限制 - 线上日志](/cn/about/limits#logs)
