# One-Click Deployment

Easily get a copy and launch your app on [AirCode](https://aircode.io/) by clicking the button below.

[![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=AirCodeLabs&repo=aircode&branch=main&path=examples%2Fslack-chatgpt-app&appname=Slack-ChatGPT)

------
# Build a Slack ChatGPT App with JavaScript, including full source code, free hosting, and step-by-step tutorial.

This article helps you quickly implement a Slack chatbot and integrate ChatGPT capabilities into it. You can ask it questions directly or mention it in a group chat to get ChatGPT's answers. (The following are screenshots of the effect)

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/1-slack-demo.png" width="800px" />
</p>

## What you will learn from this article

1. Create a Slack bot and configure the events and permissions required for the bot
2. Use AirCode to implement the chat capabilities of the bot
3. Integrate the bot with ChatGPT capabilities

## Step 1: Create a Slack bot

1. Go to the [Slack API platform](https://api.slack.com/) and create a Slack App.

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/2-create-slack-app.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/3-create-slack-app.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/4-create-slack-app.png" width="800px" />
</p>

2. Configure the permissions of the Slack App and set the corresponding permission scopes (Scopes)
  - app_mentions:read
  - chat:write
  - im:history

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/5-permissions.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/6-add-scope.png" width="800px" />
</p>

3. Install the Slack App and obtain the Token for the bot

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/7-install-slack-app.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/8-add-slack-app.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/9-copy-bot-token.png" width="800px" />
</p>

## Step 2: Create an AirCode application

1. Quickly generate your own AirCode Node.js application using the "Deploy to AirCode" button. **Note: Do not directly copy the code. If you paste the code directly, you need to manually install NPM dependencies.** If you haven't logged in to AirCode, you need to log in first.

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/10-get-copy.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/11-login.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/12-create-app.png" width="800px" />
</p>

2. Paste the bot token obtained earlier from the [Slack API platform](https://api.slack.com/apps) into the environment variables (Environments) of the newly created AirCode application. Fill in the Bot User OAuth Token value in SlackBotToken.

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/13-env.png" width="800px" />
</p>

3. After setting the environment variables (Environments), click the "Deploy" button at the top of the page to deploy the entire application and make all configurations effective.

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/14-deploy.png" width="800px" />
</p>

## Step 3: Configure Slack Bot events
  
1. After the AirCode application is deployed successfully, select the chat.js file to call, and you can see the calling URL of the current service. Copy it and paste it into the Request URL of the corresponding App event in the [Slack API platform](https://api.slack.com/apps).

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/15-copy-url.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/16-bot-event.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/17-bot-event.png" width="800px" />
</p>

2. Add events to the Slack bot
  - app_mention
  - message.im

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/18-bot-event.png" width="800px" />
</p>

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/19-bot-reinstall.png" width="800px" />
</p>

3. Configure support for sending messages directly to the Slack bot

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/20-bot-setting.png" width="800px" />
</p>

## Step 4: Test the chatbot

1. You can chat privately with the bot in the chat window, or add the bot to a group and chat by mentioning the bot. At this time, the bot can chat. Since the ChatGPT capability has not been configured yet, the bot will directly return your message, which means the bot has been configured successfully.

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/21-slack-bot-demo.png" width="800px" />
</p>  

2. You can view the complete request data in AirCode and use the "Mock by online requests" feature to debug the code directly with online data.

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/22-debug.png" width="800px" />
</p>  

## Step 5: Integrate ChatGPT capabilities

1. Go to [OpenAI's console](https://platform.openai.com/account/api-keys), click "Create new secret key" to generate and copy this newly generated key, and paste it into the environment variables (Environments) of the newly created AirCode application. Paste it into the value of OpenAISecret. If you don't have an OpenAI account, you can search the web for ways to get one and prepare in advance.

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/23-openAI.png" width="800px" />
</p>  

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/24-env.png" width="800px" />
</p>  

2. After clicking Deploy again to deploy the service and testing, ChatGPT's reply will be supported. Currently, ChatGPT's service is relatively slow, especially when the model version is higher and the question is more complex, the longer it takes for ChatGPT's service to return.

<p align="center">
  <img src="https://docs.aircode.io/_images/tutorials/slack-chatgpt-en/25-demo.png" width="800px" />
</p>  

## Problem Feedback

- Discord, GitHub, and other user exchange groups, click [https://docs.aircode.io/help/](https://docs.aircode.io/help/)

## Further Reading

- Step-by-step tutorials for integrating ChatGPT with iOS Siri, Slack, all source code, free hosting, click [https://docs.aircode.io/chatgpt/](https://docs.aircode.io/chatgpt/)

