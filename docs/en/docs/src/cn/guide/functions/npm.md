# 使用 NPM 安装依赖 {#intro}

AirCode 提供了一种可视化的在线 NPM 依赖管理方法，搜索、安装、升级和卸载包，所有操作都通过在线点击完成，无需输入任何命令。

## 安装依赖包 {#install}

依赖管理位于函数列表下方的 **Dependencies** 区域。在输入框输入名称搜索，例如 `lodash`，点击对应的依赖包即可直接安装最新版本。

<ACImage src="/_images/1671604531408.png" mode="light" />
<ACImage src="/_images/1671604567893.png" mode="dark" />

如果想安装其他版本，可以点击搜索框右侧的图标，或者点击 **Show All** ，并在弹出的对话框中下拉选择具体的版本。

::: tip 提示
安装的持续时间会根据包的大小和网络情况而不同，请耐心等待完成。关于依赖包大小和最长安装时间等的限制可参考：[资源限制 - NPM 依赖](/cn/about/limits#npm-依赖)。
:::

安装完成后，即可在云函数中引入并使用。例如创建一个名为 `npm.js` 的云函数，并修改为如下代码：

```js
// Require the dependency `lodash`
const _ = require('lodash');

module.exports = async function(params, context) {
  // Call methods of the dependency
  const lodashVersion = _.VERSION;
  const partition = _.partition([1, 2, 3, 4], n => n % 2);
  return {
    lodashVersion,
    partition,
  };
}
```

点击 **Debug** ，可以看到运行的返回结果：

```json
{
  "lodashVersion": "4.17.21",
  "partition": [
    [ 1, 3 ],
    [ 2, 4 ]
  ]
}
```

## 让依赖包在线上生效 {#deploy}

为了保证线上的稳定运行，安装完成后的依赖包仅在本地生效，不会影响线上。若希望依赖包在线上生效，部署任意函数即可。

例如将上述示例中的 `npm.js` 部署到线上后，通过 curl 进行访问：

```sh
curl https://sample.hk.aircode.run/npm
```

会得到如下结果：

```json
{
  "lodashVersion": "4.17.21",
  "partition": [
    [ 1, 3 ],
    [ 2, 4 ]
  ]
}
```

这代表依赖包已经在线上生效了。

## 更改版本或删除依赖 {#update-and-uninstall}

当鼠标移到已安装的依赖包条目时，其右侧会出现操作按钮，可以快速升级版本或将其删除。

其中 **Update to lastest** 会将依赖包更新到当前发布的最新正式版本，`alpha`、`beta`、`rc` 等任何非正式版本都会被忽略。

若希望指定安装某个具体版本，请重新[搜索并安装该依赖包](#install)。

::: tip 提示
为了保证线上安全，更改版本或删除依赖包操作仅在本地生效。若希望在线上生效，部署任意函数即可。
:::
