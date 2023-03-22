# Database Overview {#intro}

AirCode provides an out-of-the-box database, which can be accessed and operated directly through `aircode.db` in the cloud function, and there is no need for separated purchase, configuration, and connection steps:

```js
const MyTable = aircode.db.table('myTable');
const item = await MyTable.save({
  name: 'Macbook Air',
  quantities: 25,
});
```

In addition, the underlying layer of the database is Schema Free. This means that you don't need to construct the schema fields in advance, you only need to store the data directly, and AirCode will automatically identify the schema information.

## Quickstart {#quickstart}

<ListBoxContainer>
<ListBox
  title="Database Quickstart"
  link="/getting-started/database"
  description="Follow this simple tutorial to learn how to do database operations with AirCode's cloud functions."
  single
/>
</ListBoxContainer>

## Essential {#essentials}

<ListBoxContainer>
<ListBox
  link="/guide/database/insert"
  title="Insert Data"
  description="Insert a record directly into the database without constructing schemas, or insert multiple records at a time"
/>
<ListBox
  link="/guide/database/find"
  title="Find Data"
  description="Learn how to obtain records according to different query conditions, and perform advanced operations such as paging and sorting on query results"
/>
<ListBox
  link="/guide/database/update"
  title="Update Data"
  description="Modify the data and save to update the record, or perform the update operation directly through the SET statement to improve performance"
/>
<ListBox
  link="/guide/database/delete"
  title="Delete Data"
  description="Delete one or more records at one time, or directly delete all matching records according to the query conditions"
/>
</ListBoxContainer>

## API Definition {#api}

<ListBoxContainer>
<ListBox
  link="/reference/server/database-api"
  title="Database API"
  description="API definitions on aircode.db"
/>
</ListBoxContainer>

## Advanced Usage {#advanced}

- [Geo-based query](/guide/database/geo)
- [Using Indexes](/guide/database/indexes)

## Limits {#limits}

- [Resource Limits - Database](/about/limits#database)
