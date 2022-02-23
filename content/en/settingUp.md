---
title: Set Up
description: ''
position: 20
category: 'How To ...'
---
## Overview
This section provides a step-by-step guidelines on how to build the [**TestFest**](https://lwm2m.openmobilealliance.org/testfests/) webpage.

## Prerequisites
In this section you will find information on setting up your local environment.

### Installation
You need to install the following components:
* [Node.js](https://nodejs.org/)
* A text editor, e.g. [VS Code](https://code.visualstudio.com/)
* A terminal, we recommend to use [VS Code integrated terminal](https://nodejs.org/) or similar.

> Note: see Nuxt.JS [installation](https://nuxtjs.org/docs/get-started/installation) for further details

### Clone LwM2M GitHub pages
Run the following command using your terminal:

```git
git clone https://github.com/OpenMobileAlliance/oma_github_pages.git
```
<alert>
If you have already cloned the OMA GitHub Pages repo, please make sure that you run a 'pull' command before starting the work:
</alert>

```git
git pull
```
### Run the Website Locally
You are about to start doing changes to your local version of the website. The following commands will help you to see these changes before committing a Pull Request.

With the terminal, position yourself in the folder that contains the project: `oma_github_pages`:

```bash
cd oma_github_pages
```
Install Nuxt and dependencies on your machine by running the command:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn install
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install
  ```

  </code-block>
</code-group>

<alert>
The above command, e.g. <i>npm install</i>, must be run after changeing files that are not insid of the folder the folder <a href="https://github.com/OpenMobileAlliance/oma_github_pages/tree/main/content">/content/</a>. In this way we can be sure that changes to the structure are being installed in the local server.

</alert>

Run the project by typing one of the following commands below on your terminal and inside of the above folder:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn run dev
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm run dev
  ```

  </code-block>
</code-group>

The local host is listening on: http://localhost:3000/test-nuxt/

Click in this link and you will have your local website running in your host.

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).

