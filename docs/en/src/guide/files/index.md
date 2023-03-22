# File Storage Overview {#intro}

AirCode provides an extremely simple file storage system, you can just use one line of code to upload files and obtain a CDN-accelerated access address. E.g:

```js
const file = await aircode.files.upload('Hello World', 'hello.txt');
```

At the same time, all uploaded files can be viewed and managed in the `_files` table in the "Database" area, and they can also be uploaded and managed directly from the browser.

## Quickstart {#quicksart}

<ListBoxContainer>
<ListBox
  title="File Storage Quickstart"
  link="/getting-started/files"
  description="Quickly get started with AirCode's file storage feature, learn how to upload, download, and delete files."
  single
/>
</ListBoxContainer>

## Essential {#essentials}

<ListBoxContainer>
<ListBox
  link="/guide/files/upload"
  title="Upload Files"
  description="Upload files to the cloud with one line of code, and obtain a CDN-accelerated access address"
/>
<ListBox
  link="/guide/files/download"
  title="Download Files"
  description="Download files to the local for processing, such as text analysis, adding watermark, etc."
/>
<ListBox
  link="/guide/files/delete"
  title="Delete Files"
  description="Delete unnecessary files, and the deletion will be automatically synchronized to the global CDN node"
/>
</ListBoxContainer>

## API Reference {#api}

<ListBoxContainer>
<ListBox
  link="/reference/server/files-api"
  title="File Storage API"
  description="All API definitions about aircode.files"
/>
</ListBoxContainer>

## Limits

- [Resource Limits - File Storage](/about/limits#files)
