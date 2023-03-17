# Cloud Function Overview {#intro}

Cloud functions are the basic unit of AirCode. With our WebIDE, you don't need to care about the tedious things like infrastructure and environment setup, and online operation.
Just open the webpage and write your Node.js code, then debug it and deploy it as an accessible back-end API. The API can be easily used to provide data to the front-end, valid user, integrate Slack bots and Webhooks, etc.

Cloud functions are built upon serverless, with automatic scaling capabilities, it helps you quickly deal with traffic peaks and save resources.

::: details New to cloud functions?
If you have never developed a cloud function before, it is recommended to follow our [Quick Start](/getting-started/) to learn how to use it.
:::

## Essential {#essentials}

<ListBoxContainer>
<ListBox
  link="/guide/functions/development"
  title="Develop Online"
  description="Use WebIDE to develop cloud functions. Learn the function's parameters, returned value, error handling and timezone, etc."
/>
<ListBox
  link="/guide/functions/debug"
  title="Debug Online"
  description="Learn how to debug your code online, pass params and view the results, and how to use online requests to make debugging easier."
/>
<ListBox
  link="/guide/functions/deployment"
  title="Deployment"
  description="Deploy functions online, generate accessible URL addresses, and learn how to view and manage versions."
/>
<ListBox
  link="/guide/functions/require"
  title="Load Other Functions"
  description="In the same application, use require to load other cloud functions and implement function calls between them.."
/>
<ListBox
  link="/guide/functions/invoke"
  title="Invoke Functions"
  description="Invoke functions via SDK or HTTP, including a description of timeout and CORS policies."
/>
<ListBox
  link="/guide/functions/logs"
  title="Online Logs"
  description="Get real-time logs when the function is running, and filter log by time, keywords, and others to facilitate troubleshooting."
/>
<ListBox
  link="/guide/functions/npm"
  title="Using NPM"
  description="Learn how to use NPM to find, install, and manage your app's dependencies."
/>
<ListBox
  link="/guide/functions/scheduled-tasks"
  title="Scheduled Tasks"
  description="There is no need to write Cronjob expressions, as configuring scheduled tasks is as easy as scheduling events on a calendar."
/>
</ListBoxContainer>

## API Definition {#api}

<ListBoxContainer>
<ListBox
  link="/reference/server/functions-runtime"
  title="Function Runtime"
  description="Instructions on function's Node.js version, timeout, environment variables, auto-scaling, cold start, etc."
/>
<ListBox
  link="/reference/server/functions-api"
  title="Function API"
  description="Definitions of cloud function templates, params and context."
/>
</ListBoxContainer>

## Advanced Usage {#advanced}

- [Environment Variable](/guide/functions/env)
- [Send HTTP Request](/guide/functions/http-request)
- [Retrieve POST Parameters](/guide/functions/post-params)
- [Retrieve GET Parameters](/guide/functions/get-params)

## Limits {#limits}

- [Resource Limits - Clould Function](/about/limits#functions)
- [Resource Limits - Online Logs](/about/limits#logs)
