# Using Scheduled Tasks {#intro}

AirCode provides a simple and easy-to-use scheduled task system. There is no need to write any Cronjob expressions, as setting up is as easy as scheduling an event on a calendar.

## Creating Scheduled Tasks {#create}

In the application page, navigate to the **Schedules** tab in the right-side feature area and click the **+ Create a scheduled job** button to create a new scheduled task.

<ACImage src="/_images/1679043724370.png" mode="light" width="488" />
<ACImage src="/_images/1679043844440.png" mode="dark" width="488" />

Scheduled tasks can call your cloud functions at specified time points and intervals. If you have not created a cloud function before, you will need to create and deploy one. Here, we'll use a simple cloud function as an example:

```js
module.exports = async function(params, context) {
  console.log('You should drink water now.');
  return;
}
```

::: tip Reminder
Scheduled tasks can only call deployed cloud functions, so you need to deploy them first. Refer to [Deployment](/guide/functions/deployment).
:::

After deploying, you can complete the relevant configurations in the create scheduled task popup and click the **Add** button to finish adding the new task.

<ACImage src="/_images/1679044538436.png" mode="light" width="533" />
<ACImage src="/_images/1679044612993.png" mode="dark" width="533" />

- **Job Name**: The name of the scheduled task, mainly used for identification and can be customized
- **Start Time**: The time the scheduled task will first execute. If the time has passed, the task will execute according to the repeat rule at the next available time
- **Functions to Run**: The cloud functions to be called by the scheduled task. You can select multiple functions, and they will execute simultaneously without a specific order
- **Repeat Type**: The repeat rule for the scheduled task. You can choose No Repeat, Minute, Hour, Day, etc.
- **Repeat Interval**: The repeat interval for the scheduled task. You can choose intervals like 1, 2, 3, etc.
- **End Time**: The end time for the scheduled task. If not set, it defaults to a never-ending repeat

## Viewing Execution Logs {#logs}

You can view the execution logs of scheduled tasks in the **Logs** tab within the feature area. Cloud functions executed through scheduled tasks will have a `[SCHEDULE]` prefix.

<ACImage src="/_images/1679045167630.png" mode="light" width="524" />
<ACImage src="/_images/1679045230195.png" mode="dark" width="524" />

## Execution Timeout {#timeout}

When a scheduled task executes a cloud function, the function's execution timeout will be the same as the application's. Tasks that exceed this duration will be terminated prematurely. If you need to modify the timeout duration, you can do so in the application settings. Refer to [Function Runtime - Execution Timeout](/reference/server/functions-runtime#execution-timeout).

## Restricting Functions to Be Triggered Only by Scheduled Tasks {#restrict-by-scheduled-task}

If you want to restrict a cloud function to be triggered only by scheduled tasks, you can use `context.trigger` to determine the triggering method. This can help prevent accidental triggering through HTTP requests.

```js
module.exports = async function(params, context) {
  if (context.trigger !== 'SCHEDULE') {
    console.log('This function is not called by a scheduled task.');
    return;
  }
  
  // Do something...
}
```

For the complete definition of `context.trigger`, refer to [Function API - context.trigger](/reference/server/functions-api#context-trigger).

## Passing Parameters {#pass-params}

Scheduled tasks are simply timed executors and do not pass any parameters to the cloud functions. Therefore, the `params` in the cloud functions called by scheduled tasks is null. If you want to pass parameters, you can call other cloud functions within the executing cloud function and pass parameters when calling.

For example, suppose there is a cloud function `functionNeedParams` that requires parameters:

```js
module.exports = async function(params, context) {
  return { params };
}
```

In the cloud function that is actually executed, call `functionNeedParams` and pass the parameters as needed.

```js
const aircode = require('aircode');
// Load the functionNeedParams
const functionNeedParams = require('./functionNeedParams');

module.exports = async function(params, context) {
  // Call functionNeedParams with params
  const result = await functionNeedParams({ foo: 'bar' }, context);

  // If the params are variable, you can store them in the db first,
  // then retrieve and pass them
  const MyParamsTable = aircode.db.table('myParams');
  const dbParams = await MyParamsTable.where().findOne();
  const anotherResult = await functionNeedParams(dbParams, context);

  return;
}
```

## Executing with Custom Intervals {#custom-interval}

AirCode provides some common execution intervals, such as weekly, daily, every minute, every 5 minutes, etc. If you need more flexible execution intervals, you can set a common interval and use code to determine the execution method.

For example, if you want to implement a scheduled task that runs every 2 days, you can first set a daily scheduled task and then use code to determine whether the current day is an even day:

```js
const aircode = require('aircode');

module.exports = async function(params, context) {
  // Get the count of days from the db
  const DaysCountTable = aircode.db.table('daysCount');
  const daysCount = await DaysCountTable.where().findOne();
  
  // Update the count of days, or save a new one
  if (daysCount) {
    daysCount.count = count + 1;
    await DaysCountTable.save(daysCount);
  } else {
    await DaysCountTable.save({ count: 1 });
  }

  // If the count of days is odd, return
  const count = daysCount ? daysCount.count : 0;
  if (count % 2 !== 0) {
    return;
  }

  // Do something...
}
```
