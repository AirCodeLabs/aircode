# 用 JavaScript 创建飞书 ChatGPT 机器人

本文帮助你快速实现一个飞书对话机器人，并在其中接入 ChatGPT 的能力，可以直接问它问题，也可以在群聊天中 at 它，返回 ChatGPT 的回答。（以下为效果截图）

<p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/1-demo.png" width="580px" /></p>

## 全部源码

源码地址 [https://aircode.cool/q4y1msdim4](https://aircode.cool/q4y1msdim4)

## 学习路径

1. 创建飞书机器人，并配置事件和权限
2. 使用 AirCode 的「一键 Copy 代码」功能，实现机器人的聊天能力
3. 将机器人接入 ChatGPT 能力

## 第一步：创建飞书机器人

1. 在飞书开发者后台中创建一个应用，并且添加机器人能力。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/2-create-bot.png" width="800px" /></p>

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/3-create-bot.png" width="800px" /></p>

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/4-create-bot.png" width="800px" /></p>

2. 创建好的机器人就有 App ID 和 App Secret，可以复制备用。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/5-create-bot.png" width="800px" /></p>

## 第二步：创建 AirCode 应用

1. 通过 AirCode 源码链接中右上角的「Get a copy」按钮快速生成一个自己的 AirCode Node.js 应用。如果没有登录，需先登录 AirCode。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/6-get-copy.png" width="800px" /></p>

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/7-sigin-aircode.png" width="800px" /></p>

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/8-create-aircode-app.png" width="800px" /></p>

2. 将飞书开发者后台中刚创建应用的「凭证与基础信息」页面中的 App ID 和 App Secret，粘贴到刚创建的 AirCode 应用的环境变量（Environments）中，在 feishuAppId 和 feishuAppSecret 中分别填入粘贴过来的机器人 App ID 和 App Secret 的值。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/9-copy-env.png" width="800px" /></p>

3. 配置好环境变量（Environments）后，点击页面上方的「Deploy 按钮」部署整个应用，使所有配置生效。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/10-deploy-aircode.png" width="800px" /></p>

## 第三步：配置机器人的事件和权限
  
1. AirCode 应用部署成功后，你就能看到当前服务的调用 URL，将它复制，填到飞书开发者后台刚刚创建机器人的「事件订阅-请求地址」中。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/11-copy-webhook.png" width="800px" /></p>

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/12-bot-setting.png" width="800px" /></p>

2. 点击保存时，如果失败，可以将 AirCode 应用再次部署。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/13-bot-setting.png" width="800px" /></p>

3. 给机器人添加聊天相关的事件：
    - 获取用户在群组中@机器人的消息
    - 接收群聊中@机器人消息事件
    - 获取用户发给机器人的单聊消息

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/14-add-bot-event.png" width="800px" /></p>
  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/15-bot-permission.png" width="800px" /></p>
  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/16-bot-permission.png" width="800px" /></p>


4. 配置好了之后，需要发布机器人才能生效，并且能够搜索到。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/17-publish-bot.png" width="800px" /></p>

## 第四步：测试聊天机器人

1. 将机器人发布后，可在聊天窗口中与机器人私聊，或者将机器人加入到群中 at 机器人聊天，此时机器人可以对话。由于还没有配置 ChatGPT 能力，所以机器人会直接将你的消息返回，这时表示机器人已经配置成功。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/18-demo-chat-bot.png" width="580px" /></p>

2. 可以在 AirCode 中查看完整的请求数据，并且使用线上 request 调试代码。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/19-demo-debug.png" width="800px" /></p>

## 第五步：接入 ChatGPT 能力

1. 到 OpenAI 的控制台中，点「Create new secret key」生成并且复制这个新生成的 Key，粘贴到刚创建的 AirCode 应用的环境变量（Environments）中，粘贴到 OpenAISecret 的 value 中。如果没有 OpenAI 账号，可以到网络中搜索一下获取方式，提前购买准备好。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/20-openAI.png" width="800px" /></p>

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/21-copy-env.png" width="800px" /></p>

2. 再次部署服务，后测试。目前 ChatGPT 服务比较慢，尤其是模型版本越高级、问题越复杂，ChatGPT 服务的返回时间会越长。

  <p align="center"><img src="https://docs-cn.aircode.io/_images/tutorials/feishu-chatGPT/22-demo-chatGPT-bot.png" width="580px" /></p>

## 问题反馈
  1. 可以加入我们的[飞书用户群](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=6dem4ab3-d523-4562-9c63-9fb46d565b10)
  2. 来到我们的 [GitHub 仓库](https://github.com/aircodelabs/aircode)，可以提 issue 或者直接贡献代码
  3. 欢迎加入我们的 [Discord 讨论区](https://discord.com/invite/XrMVdYdEuY)

## 更多阅读
- [用 JavaScript 五分钟将 Siri 接入 ChatGPT ](https://aircode.cool/828668wg5a)

