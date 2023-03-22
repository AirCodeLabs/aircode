# 文件存储概览 {#intro}

AirCode 提供了一套极致简单的文件存储系统，一行代码即可上传文件并获得一个 CDN 加速的访问地址。例如：

```js
const file = await aircode.files.upload('Hello World', 'hello.txt');
```

同时，所有上传的文件信息可以在 **Database** 区域的 `_files` 表中查看和管理，还可以直接从浏览器中上传和管理文件。

## 快速上手 {#quickstart}

如果你从未使用过 AirCode 的文件存储（即 `aircode.files`），建议先跟随文件存储入门快速上手。

<ListBoxContainer>
  <ListBox
    title="文件存储入门"
    link="/getting-started/files"
    description="快速上手 AirCode 的文件存储功能，了解如何上传、下载和删除文件"
    single
  />
</ListBoxContainer>

## 基本使用 {#essentials}

<ListBoxContainer>
<ListBox
  link="/guide/files/upload"
  title="上传文件"
  description="通过一行代码将文件上传到云端，并获得 CDN 加速的访问地址"
/>
<ListBox
  link="/guide/files/download"
  title="下载文件"
  description="将文件下载到实例本地以进行处理，例如文本分析、添加水印等"
/>
<ListBox
  link="/guide/files/delete"
  title="删除文件"
  description="简单快速地删除不需要的文件，删除操作会自动同步到全球 CDN 节点"
/>
</ListBoxContainer>

## API 定义 {#api}

<ListBoxContainer>
<ListBox
  link="/reference/server/files-api"
  title="文件存储 API"
  description="关于 aircode.files 的所有接口定义"
/>
</ListBoxContainer>

## 相关限制

- [资源限制 - 文件存储](/about/limits#files)
