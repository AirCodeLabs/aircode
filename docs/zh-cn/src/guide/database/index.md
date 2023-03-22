# 数据库概览 {#intro}

AirCode 提供了开箱即用的数据库，无需单独购买、配置和连接，在云函数中通过 `aircode.db` 即可直接访问和操作。例如：

```js
const MyTable = aircode.db.table('myTable');
const item = await MyTable.save({
  name: 'Macbook Air',
  quantities: 25,
});
```

另外，数据库底层是 Schema Free 的。这意味着你不需要提前配置数据字段，只需要直接存储数据，AirCode 会自动识别字段信息并用于展示。

## 快速上手 {#quickstart}

<ListBoxContainer>
<ListBox
  title="数据库入门"
  link="/getting-started/database"
  description="跟随这个简单的教程，学会如何在 AirCode 的云函数中进行数据库操作"
  single
/>
</ListBoxContainer>

## 基本使用 {#essentials}

<ListBoxContainer>
<ListBox
  link="/guide/database/insert"
  title="插入数据"
  description="无需构建 Schema，直接向数据库中插入一条记录，也可一次性插入多条记录"
/>
<ListBox
  link="/guide/database/find"
  title="查询数据"
  description="了解如何根据不同的查询条件获取记录，以及对查询结果进行分页、排序等高级操作"
/>
<ListBox
  link="/guide/database/update"
  title="更新数据"
  description="修改数据并保存来更新记录，或通过 set 语句直接执行更新操作以提高性能"
/>
<ListBox
  link="/guide/database/delete"
  title="删除数据"
  description="一次性删除一条或多条记录，或直接根据查询条件删除所有符合的记录"
/>
</ListBoxContainer>

## API 定义 {#api}

<ListBoxContainer>
<ListBox
  link="/reference/server/database-api"
  title="数据库 API"
  description="关于 aircode.db 的所有接口定义"
/>
</ListBoxContainer>

## 更多使用技巧 {#advanced}

- [基于地理位置查询](/guide/database/geo)
- [使用索引优化查询](/guide/database/indexes)
<!-- - [在网页中管理数据](/guide/database/web-management) -->

## 相关限制 {#limits}

- [资源限制 - 数据库](/about/limits#database)
