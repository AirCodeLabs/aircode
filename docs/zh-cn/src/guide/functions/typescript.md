# TypeScript 支持 {#intro}

AirCode 支持 TypeScript。你可以在 AirCode 的环境中直接使用 TypeScript 编写代码。

TypeScript 提供了以下便利:
1. 静态类型检查，有助于提高代码的健壮性和可维护性。
2. 支持最新的 ECMAScript 特性，同时也兼容 JavaScript。
3. 提供了类、接口和模块等面向对象编程的能力。
4. 等等...

## 新建 TypeScript 应用 {#create}

在新建应用时，你可以选择使用 TypeScript 作为默认语言。具体操作步骤如下：

1. 点击“创建新应用”。
2. 在弹出的窗口中，勾选 **TypeScript** 选项：

<ACImage src="/_images/1687941402462.png" mode="dark" width="530" />
<ACImage src="/_images/1687941435342.png" mode="light" width="530" />

3. 点击“确定”，此时你的新应用默认的函数代码将会使用 TypeScript：

<ACImage src="/_images/1687941645021.png" mode="light" />
<ACImage src="/_images/1687941751546.png" mode="dark" />

## 为现有的 JavaScript 应用启用 TypeScript {#enable}

如果你有现有的 JavaScript 应用，也可以启用 TypeScript。操作步骤如下：

1. 安装 TypeScript 依赖：

<ACImage src="/_images/1687941850850.png" mode="dark" width="240"/>
<ACImage src="/_images/1687942052252.png" mode="light" width="240"/>

2. 创建 `tsconfig.json` 文件（系统将为你自动填充好最佳实践的配置，一般无需进行二次修改）：

<ACImage src="/_images/1687942094699.png" mode="light"/>
<ACImage src="/_images/1687942140281.png" mode="dark"/>

3. 创建你的 TypeScript 函数，并进行调试或部署。在控制台中，你可以查看到 TypeScript 编译成功或失败的日志：

<ACImage src="/_images/1688015952700.png" mode="light"/>
<ACImage src="/_images/1688015974786.png" mode="dark"/>
