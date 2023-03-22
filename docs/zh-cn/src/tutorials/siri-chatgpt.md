# 使用 JavaScript 将 Siri 接入 ChatGPT {#intro}

将 Siri 接入 ChatGPT，直接语音唤醒，并且支持连续对话。

<p align="center"><img src="/_for_demos/errJ-DCavN.1678960179433_4ldns6dksyd.jpeg" width="280px" /></p>

## 全部源码 {#source-code}

[https://aircode.cool/828668wg5a](https://aircode.cool/828668wg5a)

## 第一步：拷贝项目 {#copy-project}

1. 进入[项目源码](https://aircode.cool/828668wg5a)页面，点击右上角「Get a copy」，这会打开 [AirCode](https://aircode.io)，并基于此模板创建一个你自己的项目。如果没登录的话，可能会先跳转到登录页面，推荐使用 GitHub 登录，会快一些。

    <p align="center"><img src="/_for_demos/7iBqrpbrMR.1678961115282_5j58e0jj3ek.jpeg" width="553px" /></p>

2. 在弹出的创建对话框中，输入你的项目名称，并点击「Create」完成创建。

    <p align="center"><img src="/_for_demos/QjOIQhLQRE.1678963311215_jz5wtb8616.jpeg" width="532px" /></p>

    <p align="center"><img src="/_for_demos/iKHNywGlC6.1678964136978_8c0scefyhgs.jpeg" width="1469px" /></p>

## 第二步：将 OpenAI Key 填入到环境变量中

1. 登录到你的 [OpenAI](https://platform.openai.com/) 账号中（如果还没有，需要注册一个），进入「API Keys」页面，点击「Create new secret key」创建一个密钥。

    <p align="center"><img src="/_for_demos/cXHixpCmmM.1678963697117_a47i0h0bx7m.jpeg" width="1112px" /></p>

2. 在弹出的对话框中，点击复制图标，将这个 API Key 复制并保存下来。**注意：正确的 API Key 都是以 `sk-` 开头的字符串。**

    <p align="center"><img src="/_for_demos/pjtbwPn8SZ.1678963833926_ym91lypfua.jpeg" width="534px" /></p>

3. 进入刚才创建好的 AirCode 应用中，在「Environments」标签页，将复制的 API Key 的值填入「OPENAI_KEY」这一项的 value 中。

    <p align="center"><img src="/_for_demos/q6poKOBInJ.1678965860730_lbyqxujhw5d.jpeg" width="420px" /></p>

## 第三步：部署 AirCode 应用

1. 填完环境变量后，点击页面最上方的「Deploy」按钮，在弹出对话框中点击「Deploy」，开始部署。

    <p align="center"><img src="/_for_demos/Vw259mD5Ql.1678966093481_q459dr9sah.jpeg" width="673px" /></p>

2. 部署成功后，在左侧文件列表中选中「chat.js」，可以看到中间编辑器部分，文件下方有一个 URL，点击复制这个 URL。

    <p align="center"><img src="/_for_demos/k-5rOSznFW.1678966220369_a00sivzz5fw.jpeg" width="635px" /></p>

3. 我们可以测试一下系统是否运行正常。将这个 URL 在新标签页打开，并在后面加上 `?question=你好`，如果返回的结果包含正常的 `reply` 信息，则代表一切正常。**注意：因为 ChatGPT 响应需要一定的时间，视网络状况大概 15 到 45 秒不等，所以请耐心等待，不要频繁刷新页面。**

    <p align="center"><img src="/_for_demos/RipZ_OJve0.1678967439515_2yekizmozer.jpeg" width="667px" /></p>

## 第四步：添加 iPhone 快捷指令

1. 在 iPhone 的浏览器中，打开以下链接。

    [https://www.icloud.com/shortcuts/96820bde426948918c25ed0d7a4c548f](https://www.icloud.com/shortcuts/96820bde426948918c25ed0d7a4c548f)

2. 在打开的页面中点击「获取捷径」按钮，然后在弹出的窗口中点击「添加快捷指令」。

    <p align="center"><img src="/_for_demos/yvKtxGuFPq.1678968859522_kpe6swgobd.jpeg" width="280px" /> <img src="/_for_demos/abGZmCNVv1.1678969088799_rmddraoxfv9.jpeg" width="280px" /></p>

3. 点击刚刚添加成功的快捷指令右上角的三个点，打开快捷指令的编辑页面。将上面「第三步」中获取到的 AirCode 云函数的 URL 填入「文本」区域，点击右上角「完成」。**注意：云函数 URL 是类似 `https://xxxx.hk.aircode.run/chat` 这样的格式。**

    <p align="center"><img src="/_for_demos/npLd_synKw.1678969398038_x2798jq1qfm.jpeg" width="280px" /> <img src="/_for_demos/Esy7zNI3Q1.1678969555549_rd7ay1qh7ll.jpeg" width="280px" /></p>

## 使用

至此，你完成了所有配置过程，直接在手机中通过「嘿 Siri，打开机器人」就可以唤醒 ChatGPT，然后问问题了。

<p align="center"><img src="/_for_demos/errJ-DCavN.1678960179433_4ldns6dksyd.jpeg" width="280px" /></p>

另外，你也可以在快捷指令的编辑页面中，点击下方的「分享」按钮，在弹出的菜单中选择「添加到主屏幕」，这样就可以在桌面通过点击打开对话框。

<p align="center"><img src="/_for_demos/EOCMiSlTQd.1678973191167_6m66gudre3a.jpeg" width="280px" /> <img src="/_for_demos/J_jGyCyi99.1678969998197_e78fjwawq76.jpeg" width="280px" /></p>

Enjoy your life with ChatGPT!
