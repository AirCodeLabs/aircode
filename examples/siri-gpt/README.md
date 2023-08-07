# SiriGPT Tutorial

Connect Siri to ChatGPT for direct voice activation and support for continuous conversation.

<p align="center"><img src="https://docs.aircode.io/_for_demos/ios-siri-en-new.jpg" width="280px" /></p>

## Step 1: Get a Copy

[![Deploy to AirCode](https://aircode.io/dashboard-public/shiki/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=AirCodeLabs&repo=aircode&branch=main&path=examples%2Fsiri-gpt&appname=SiriGPT)

1. Click the **Deploy to AirCode** button. This will open [AirCode](https://aircode.io) and create an application based on this template. If you're not logged in, you may be redirected to the login page. It is recommended to log in with GitHub for a faster experience.

<p align="center"><img src="https://docs.aircode.io/_for_demos/7iBqrpbrMR.1678961115282_5j58e0jj3ek.jpeg" width="553px" /></p>

2. In the create dialog that pops up, enter your application name and click **Create** to finish.

    <p align="center"><img src="https://docs.aircode.io/_for_demos/QjOIQhLQRE.1678963311215_jz5wtb8616.jpeg" width="532px" /></p>

    <p align="center"><img src="https://docs.aircode.io/_for_demos/iKHNywGlC6.1678964136978_8c0scefyhgs.jpeg" width="1469px" /></p>

## Step 2: Fill in Environment Variables with OpenAI Key

1. Log in to your [OpenAI](https://platform.openai.com/) account (if you don't have one, you'll need to register). Go to the **API Keys** page and click **Create new secret key** to create a new key.

    <p align="center"><img src="https://docs.aircode.io/_for_demos/cXHixpCmmM.1678963697117_a47i0h0bx7m.jpeg" width="1112px" /></p>

2. In the pop-up dialog, click the copy icon to copy and save the API Key. **Note: Correct API Keys always start with `sk-`.**

    <p align="center"><img src="https://docs.aircode.io/_for_demos/pjtbwPn8SZ.1678963833926_ym91lypfua.jpeg" width="534px" /></p>

3. Go to the AirCode app you just created, and on the **Environments** tab, paste the copied API Key value into the **OPENAI_KEY** field.

    <p align="center"><img src="https://docs.aircode.io/_for_demos/q6poKOBInJ.1678965860730_lbyqxujhw5d.jpeg" width="420px" /></p>

## Step 3: Deploy the AirCode App

1. After filling in the environment variables, click the **Deploy** button at the top of the page. In the pop-up dialog, click **Deploy** to start the deployment process.

    <p align="center"><img src="https://docs.aircode.io/_for_demos/Vw259mD5Ql.1678966093481_q459dr9sah.jpeg" width="673px" /></p>

2. Once the deployment is successful, select the **chat.js** file in the left file list. In the middle editor section, you'll see a URL at the bottom of the file. Click to copy this URL.

    <p align="center"><img src="https://docs.aircode.io/_for_demos/k-5rOSznFW.1678966220369_a00sivzz5fw.jpeg" width="635px" /></p>

3. We can test if the system is running correctly. Open the copied URL in a new browser tab, and add `?question=Hello` at the end. If the returned result contains a normal `reply` message, then everything is working as expected.

    **Note**: Since ChatGPT responses take some time, depending on your network conditions, it may take around 15 to 45 seconds. Please be patient and avoid refreshing the page frequently.

    <p align="center"><img src="https://docs.aircode.io/_for_demos/RipZ_OJve0.1678967439515_2yekizmozer.jpeg" width="667px" /></p>

## Step 4: Add iPhone Shortcut

1. On your iPhone's browser, open the following link:

    [https://www.icloud.com/shortcuts/6b58235ee5c34c3eabb1742c95b2d0d2](https://www.icloud.com/shortcuts/6b58235ee5c34c3eabb1742c95b2d0d2)

2. On the opened page, tap **Get Shortcut** button, and then tap **Add Shortcut** in the pop-up window.

    <p align="center"><img src="https://docs.aircode.io/_for_demos/yvKtxGuFPq.1678968859522_kpe6swgobd.jpeg" width="280px" /> <img src="https://docs.aircode.io/_for_demos/abGZmCNVv1.1678969088799_rmddraoxfv9.jpeg" width="280px" /></p>

3. Tap the three dots in the upper-right corner of the successfully added shortcut to open the shortcut's edit page. Fill in the **Text** area with the AirCode cloud function URL obtained in **Step 3** above, and tap **Done** in the upper-right corner.

    **Note**: The cloud function URL should be in a format similar to `https://xxxx.hk.aircode.run/chat`.

    <p align="center"><img src="https://docs.aircode.io/_for_demos/npLd_synKw.1678969398038_x2798jq1qfm.jpeg" width="280px" /> <img src="https://docs.aircode.io/_for_demos/Esy7zNI3Q1.1678969555549_rd7ay1qh7ll.jpeg" width="280px" /></p>

## Usage

At this point, you have completed all the setup steps. Simply use the voice command "Hey Siri, open ChatGPT" on your phone to invoke ChatGPT and start asking questions.

<p align="center"><img src="https://docs.aircode.io/_for_demos/ios-siri-en-new.jpg" width="280px" /></p>

Additionally, you can also add a shortcut to your home screen. In the shortcut's edit page, tap the **Share** button at the bottom, and select **Add to Home Screen** from the pop-up menu. This way, you can open the dialog box by tapping the icon on your home screen.

<p align="center"><img src="https://docs.aircode.io/_for_demos/EOCMiSlTQd.1678973191167_6m66gudre3a.jpeg" width="280px" /> <img src="https://docs.aircode.io/_for_demos/J_jGyCyi99.1678969998197_e78fjwawq76.jpeg" width="280px" /></p>

Enjoy your life with ChatGPT!

## Community and Support

Need help or want to connect with other AirCode users? Check out these community and support resources:

- [Community Forum](https://github.com/AirCodeLabs/aircode/discussions): Request features, discussion about best practices or ask questions about AirCode.
- [GitHub Issues](https://github.com/aircodelabs/aircode/issues): Report bugs and errors you encounter while using AirCode.
- [Discord](https://discord.com/invite/XrMVdYdEuY): Join our Discord community to chat with other users, get help, and share your experiences with AirCode.
- [Email Support](https://docs.aircode.io/help): Reach out to our team directly for assistance through email.
