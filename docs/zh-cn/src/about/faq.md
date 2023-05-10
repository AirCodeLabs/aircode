# 常见问题 {#faq}

[[toc]]

## AirCode 需要付费使用吗，价格方案是什么？ {#pricing}

我们会长期保持一个 Free 版本供试用，Free 版的用量限制可参考[资源限制 - 每月用量限制](/about/limits#monthly-usage)。针对专业使用者和商业场景，我们也提供了付费的 Professional 和 Team 版本，详情可参考[ AirCode 价格页面](https://aircode.io/pricing)。关于付费和套餐有任何问题，请通过 [support@aircode.io](mailto:support@aircode.io) 联系我们获取支持。

## 如何查看我的 AirCode 应用的 App ID？ {#app-id}

在 AirCode 应用的设置窗口中可以查看到该应用的 App ID。进入对应应用的页面后，点击应用名称，即可打开 App Settings 弹窗，并找到 App ID，点击该 ID 可以复制。

<ACImage src="/_images/1681195076163.png" mode="light" />
<ACImage src="/_images/1681195131773.png" mode="dark" />

## 如何在云函数中调用其他云函数？ {#invoke-other-functions}

如果是同一个应用下的函数，可以直接通过 `require` 引用，参考[函数间引用](/guide/functions/require)。如果想调用其他应用的云函数，可直接通过 HTTP 的形式访问，参考[调用云函数](/guide/functions/invoke)。

## 有数据存储和文件存储的能力吗？ {#database-and-file-storage}

是的，在 AirCode 的云函数中可以通过 `aircode.db` 直接访问数据库，通过 `aircode.files` 实现文件上传等。参考[数据库入门](/getting-started/database)和[文件存储入门](/getting-started/files)。

## 怎么和其他系统的 Webhook 连接起来？ {#how-to-connect-webhook}

每个部署后的云函数都会生成一个 URL 地址，该地址直接通过 HTTP 访问。你可以将该地址粘贴到对应系统的 Webhook 中，这样当有相关事件发生时，对应的系统即会向该地址发送 HTTP 请求。

## 可以通过定时任务调用云函数吗？ {#scheduled-tasks}

可以，AirCode 提供了一种简单的方式配置定时任务调用云函数，无需编写 Cronjob 表达式。参考[定时任务](/guide/functions/scheduled-tasks)。

## 函数运行时长是如何计算的？函数会一直运行吗？ {#how-to-calculate-execution-runtime}

云函数的运行时长是指函数从接收请求到返回结果的时间间隔。因为 AirCode 的云函数会根据请求自动扩缩容，所以仅在有请求时会实际运行，无请求时不会计算时长。

另外，单次请求有最大运行时长，超过该时长会被强制终止，这保证了不会因为代码错误而无法结束函数运行，参考[云函数运行时 - 超时时间](/reference/server/functions-runtime#execution-timeout)。

## AirCode 云函数的时区是什么，如何处理不同时区的问题？ {#timezone}

在 AirCode 中，云函数的时区是 UTC±0，即格林威治时间。如果需要处理不同时区的问题，可以使用 [dayjs](https://day.js.org/) 等库进行时区转换。

更多参考：
- 关于在云函数中处理时区问题，可参考[在线开发云函数 - 函数中的时区问题](/guide/functions/development#timezone)
- 关于使用时间区间查询数据库的问题，可参考[查询数据 - 按时间区间查询](/guide/database/find#date)
