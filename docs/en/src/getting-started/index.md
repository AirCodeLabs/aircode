# Quick Start {#intro}

This 5-minute tutorial helps new developers get started with AirCode. By following these steps, you'll learn how to:

1. Create an AirCode app, and develop and debug cloud functions online.
2. Deploy a Hello World API online, and invoke it using HTTP.

To run an example, click **Run** below.

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

## Create an App {#create-an-app}

Sign up and log in to [AirCode Dashboard](https://aircode.io/dashboard), click **+ New Node.js App**, and enter the app name in the pop-up window.

> For example, you can create an app called `Hello World`.

<ACImage src="/_images/1668073287668.png" mode="light" />
<ACImage src="/_images/1671505257580.png" mode="dark" />

After creating the app, AirCode will redirect you to the app page, where you can complete the development, debugging, and deployment.

<ACImage src="/_images/1671505485031.png" mode="light" />
<ACImage src="/_images/1671505442147.png" mode="dark" />

## Create a Function {#create-a-function}

Every new application comes with a default cloud function named `hello.js`, or you can create your functions. Click the **+** button, enter your function's name, and click **✓** to finish the creation.

> For example, you can create a cloud function named `myHelloWorld.js`.

<ACImage src="/_images/1671505845666.png" mode="light" />
<ACImage src="/_images/1671505926961.png" mode="dark" />

The created function will contain an initial code, which you can modify.

```js
const aircode = require('aircode');

module.exports = async function(params, context) {
  console.log('Received params:', params);
  return {
    message: 'Hi, AirCode.'
  };
}
```

## Debug a Function {#debug}

AirCode's online debug tool makes it easy to see running results and modify code during development. Follow these steps to debug a function with AirCode.

First, modify the function as follows:

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

In the **Debug** area on the right, modify the content of the **Params** to the following JSON string:

```json
{
  "payload": "Hello, Micheal!"
}
```

Click the **Debug** button to send the request to the function `myHelloWorld.js`. The JSON string of the **Params** will be passed to the function as a parameter, which can be obtained in the function through the `params` field.

You can see the return message of the function in the **Response** area:

```json
{
  "message": "Hello, Micheal!"
}
```

In the **Console** area, you can see the log output through `console.log` when the function is running:

```
18:24:30.237 Received params: { payload: 'Hello, Micheal!' }
```

<ACImage src="/_images/1671506066219.png" mode="light" />
<ACImage src="/_images/1671506114424.png" mode="dark" />

## Deploy a Function {#deploy}

After finishing the development, we need to deploy it, and then we can invoke it in reality.

Click the **Deploy** button in the top bar, keep the options in the pop-up window unchanged, and click **Deploy**.

<ACImage src="/_images/1671506272223.png" mode="light" />
<ACImage src="/_images/1671506314802.png" mode="dark" />

After the deployment is successful, an online URL of the function will appear below the function name. Click to copy it to the clipboard.

<ACImage src="/_images/1671506405456.png" mode="light" />
<ACImage src="/_images/1671506377900.png" mode="dark" />

You can access this URL directly through the browser. To pass parameters, add params in the form of `?key=value` to the URL, e.g.:

```
https://sample.hk.aircode.run/myHelloWorld?payload=hello
```

Or directly check out our runnable example:

<iframe
  :src="`https://codesandbox.io/embed/hungry-chatterjee-c2yyux?fontsize=14&hidenavigation=1&codemirror=1&hidenavigation=1&theme=${isDark ? 'dark' : 'light'}`"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="hungry-chatterjee-c2yyux"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## What's Next? {#next}

Congratulations on developing and deploying your first cloud function. In regards to the method of creating robots in real-life scenarios using AirCode, we have prepared a series of hands-on practical tutorials.

<ListBoxContainer>
  <ListBox
    link="/getting-started/database"
    title="Introduction to Database"
    description="Follow this simple tutorial to learn how to do database operations with AirCode's cloud functions."
    single
  />
</ListBoxContainer>

If you want to learn more about how to utilize various features in AirCode in detail, you can refer to the following guides.

<ListBoxContainer>
<ListBox
  title="Cloud Function"
  link="/guide/functions/"
  description="Write code with Node.js, test it online, and publish it as an online API in seconds."
/>
<ListBox
  title="Database"
  link="/guide/database/"
  description="Invoke the API directly in the cloud function for CRUD and more advanced data operations."
/>
<ListBox
  title="File Storage"
  link="/guide/files/"
  description="One-line code to upload, download, and delete files, with the built-in CDN acceleration functionality."
/>
<ListBox
  title="FAQs"
  link="/about/faq"
  description="Problems that may be encountered using AirCode. Seek solutions here."
/>
<ListBox
  title="Resource Limits"
  link="/about/limits"
  description="View the Resource Limits for different plans, and how to change them."
/>
</ListBoxContainer>
