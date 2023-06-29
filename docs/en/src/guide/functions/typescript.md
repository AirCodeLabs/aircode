# Using TypeScript  {#intro}

AirCode supports TypeScript. You can directly use TypeScript in the AirCode environment.

TypeScript provides convenience in the following scenarios:
1. Static type checking, which helps improve the robustness and maintainability of your code.
2. Support for the latest ECMAScript features while also being compatible with JavaScript.
3. Provides object-oriented programming capabilities such as classes, interfaces, and modules.
4. And more...

## Create a New TypeScript Application {#create}

When creating a new application, you can choose to use TypeScript as the default language. Here's how:

1. Click to create a new application.
2. In the pop-up window, check the box for **TypeScript**:

<ACImage src="/_images/1687941402462.png" mode="dark" width="530" />
<ACImage src="/_images/1687941435342.png" mode="light" width="530" />

3. Click confirm, and the default function code for your new application will use TypeScript:

<ACImage src="/_images/1687941645021.png" mode="light" />
<ACImage src="/_images/1687941751546.png" mode="dark" />

## Enable TypeScript for Existing JavaScript Applications {#enable}

If you have an existing JavaScript application, you can also enable TypeScript. Follow these steps:

1. Install the TypeScript dependency:

<ACImage src="/_images/1687941850850.png" mode="dark" width="240"/>
<ACImage src="/_images/1687942052252.png" mode="light" width="240"/>

2. Create a `tsconfig.json` file (the system will automatically fill in the best practices for configuration, generally no secondary modifications are needed):

<ACImage src="/_images/1687942094699.png" mode="light"/>
<ACImage src="/_images/1687942140281.png" mode="dark"/>

3. Create your TypeScript function, then debug or deploy. In the console, you can see the logs indicating whether the TypeScript compilation was successful or failed:

<ACImage src="/_images/1688015952700.png" mode="light"/>
<ACImage src="/_images/1688015974786.png" mode="dark"/>

