# Resource Limits {#intro}

To avoid resource abuse and to ensure platform stability, each account and application in AirCode has a corresponding resource limit. Exceeding the limit may result in failed calls or deployments.

If you have exceeded the limit or expect to need more resources, please send an email to [support@aircode.io](mailto:support@aircode.io?subject=Get%20information%20on%20the%20Paid%20Upgrade%20Plan%20of%20AirCode) for help and the Paid Upgrade Plan.

## Monthly Usage Limits {#monthly-usage}

The sum of monthly usage for **all applications** under each account cannot exceed the following values.

| Item | Free |
| :---- | :---- |
| Cloud Function Invocations | 1,000,000 |
| Cloud Function Execution | 36,000 seconds |
| Cloud Function Incoming Bandwidth | 1 TB |
| Cloud Function Outgoing Bandwidth | 10 GB |
| Database Reads | 2,000,000 |
| Database Writes/Deletes | 200,000 |
| File Uploads | 200,000 | 
| File Upload Total Size | 64 GB |
| File Downloads | 1,000,000 |
| File Download Total Size | 256 GB |
| File Storage Size | 256 GB |
| Number of Deployments | 600 |
| Deployment Build Execution | 14,400 seconds |

## Cloud Function {#functions}

All limits below are for **single application** levels.

### Number and Size {#functions-size}

- Number of cloud function files: **128**, Including all `.js` suffix cloud functions and non-`.js` suffix files
- File name length: **64 characters**, including file extensions
- Deployment size: no more than **128 MB** when packaged, no more than **512 MB** when unpacked, including all cloud functions and dependency packages
- Individual function file size: **5 MB**

### Runtime Limits {#functions-runtime}

- Runtime memory: **512 MB**
- Disk space (i.e., `/tmp` directory): **10 GB**
- Function runtime timeout: default is **60 seconds**, settable range **5 to 90 seconds**

### Invoke Limits {#functions-invoke}

- Requests per second (QPS): **200**. That is, up to 200 function requests per second for the same application
- Access concurrency: **20**. That is, the same application cannot handle more than 20 requests at the same time
- Request load size: **30 MB**. That is, the size of a single Request Body or Response Body should not exceed 30 MB
- Incoming data traffic: **1 GB/s**
- Outgoing data traffic: **1 MB/s**

### Instance Scaling {#functions-instance-scaling}

- The minimum number of instances: **0**. When traffic drops, the instances number will be scaled down to 0. If you would like to keep resident instances, please email [support@aircode.io](mailto:support@aircode.io?subject=Get%20information%20on%20the%20Paid%20Upgrade%20Plan%20of%20AirCode) for help and the Paid Upgrade Plan
- The maximum number of instances: **100**. That is, it will scale up to 100 instances when traffic rises

### Cold Start {#functions-cold-start}

- Enter idle time: **1 hour**. That is, services that do not make any calls for 1 hour may enter the "idle" state
- Estimated cold-start time: **300 ms**. That is, the first time a service in the idle state is invoked, the invocation time will increase by 300 milliseconds.

::: tip Tips
1. All the time of cold start is only the estimated value, and it may vary according to the business complexity, code package size, and network condition
2. Please refer to [Cloud Function Runtime - Cold Start](/reference/server/functions-runtime#cold-start) for the description of cold-start
:::

### Environment Variable {#functions-environments}

- Key and Value Rules
  - Key must start with an upper or lower case letter, can only include upper and lower case letters and numbers, and cannot start with `AC_`
  - Value must be displayable ASCII characters and cannot contain other characters, such as Chinese
- Number of environment variables: **512**
- Total size of environment variables: **3 KB**. That is, the total size of all environment variables cannot exceed 3 KB
- System reserved environment variables: All names starting with `AC_` are system environment variables, so the key of custom environment variables cannot start with `AC_`

::: tip Tips
For setting and using environment variables, please refer to [Environment Variable](/guide/functions/env).
:::

## Online Logs {#logs}

All limits below are for **single application** levels.

### Generate Logs {#logs-generate}

- Single log size: **32 KB**, more than that will be discarded
- Number of logs generated: **100 logs/s**, more than that will be discarded
- Log traffic generated: **128 KB/s**, more than that will be discarded

### View and Query Logs {#logs-view-and-query}

- Single log display size: **2,048 characters**. For single logs longer than 2048 characters, only the first 2048 characters are displayed
- Time query limit: **Last 7 days**. That is, logs can be queried up to 7 days ago
- Keyword query limit: **20 keywords**. That is, up to 20 keywords per query

::: tip tips
For a tutorial on generating and viewing online logs, please refer to [Online Logs](/guide/functions/logs).
:::

## Database {#database}

All restrictions below are **single application** levels.

### Table Limits {#database-size}

- Number of tables: **128**. That is, no more than 128 tables in a single application, including system tables starting with `_`
- Table name restriction: **cannot contain the character `$`, and cannot start with `_` or `system.`**
- Table name length: **64 characters**
- Number of indexes in a single table: **64**

### Write Limits {#database-write}

- Single record data size: **16 MB**
- Maximum total number of batch writing: **100**. That is, when using `save` for [batch insert](/guide/database/insert#insert-multiple) or [batch update](/guide/database/update#update-multiple), the number of incoming records cannot exceed 100
- Batch write total data volume: **128 MB**. That is, when using `save` for [batch insert](/guide/database/insert#insert-multiple) or [batch update](/guide/database/update#update-multiple), the total size of all incoming records cannot exceed 128 MB. Note that the data size of a single record is still limited to 16 MB

::: tip Tips
When updating data using [Set and Save](/guide/database/update#set-and-save), there is no limit to the total number of records written. This method is recommended when a large amount of data needs to be updated at the same time.
:::

### Query Limits {#database-find}

- Single query timeout: **5 seconds**
- Maximum number of records in a single query: **10,000**. That is, when the actual number of records exceeds 10,000, only the first 10,000 records will be returned
- Total data size of a single query: **128 MB**. That is, if the total size of all records exceeds 128 MB, the query will fail.

::: tip Tips
For queries with too many records, large data size, or a long time, it is recommended to [Use Indexes](/guide/database/indexes) or [Sort and Pagination](/guide/database/find#sort-and-pagination) to reduce the number of records and data size returned in a single query.
:::

### Delete Limits {#database-delete}

- The maximum number of a single deletion: **100**. That is, if the number of `_id`s passed in for a single deletion exceeds 100, the deletion will fail.

::: tip Tips
When you delete data by [Direct Deletion](/guide/database/delete#delete-directly), you are not limited to the maximum number of deleted records. This method is recommended when a large amount of data needs to be deleted at the same time.
:::

## File Storage {#files}

All limits below are for **single application** level.

- Single file size: **30 MB**
- Total number of files: **100,000**, exceeding this will cause upload failure, so it is recommended to delete unused files in time

## Fair Use Policy {#fair-use-policy}

We expect every user to follow the Fair Use policy when using AirCode. We reserve the right to stop providing services or reclaim resources without notice when the use is deemed unfair.

### Examples of Fair Use {#examples-of-fair-use}

- Provide backend APIs for frontend/client Apps
- Callback for Webhook
- Chatbot
- Automated workflows
- Blogging, e-commerce, marketing
- More fair business scenarios...

### Never Fair Use {#never-fair-use}

- Proxies or VPNs
- Scrapers
- Crypto Mining
- Other uses that violate the laws or invade privacy...

