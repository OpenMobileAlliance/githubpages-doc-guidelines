---
title: Create a Blog
description: ''
position: 30
category: 'How To ...'
---
## Overview
This section provides step-by-step guidelines on how to create a **Blog** in this the [OMA LwM2M website](https://lwm2m.openmobilealliance.org/).

Any blog content submitted via this process will be reviewed an evaluated by the OMA SpecWorks DMSE / IPSO Working Group. 

> *The OMA SpecWorks DMSE / IPSO Working Group owns the [OMA LwM2M website](https://lwm2m.openmobilealliance.org/) website and therefore has the final say about what content may or may not be published on the website.*
## Steps to Create a Blog
Follow up these steps to add a new **blog** to the menu [Blogs](https://lwm2m.openmobilealliance.org/blogs/):

1. Create a new markdown file
2. Populate the `front-matter` section of the new markdown file
3. Write the content of the **blog**
4. Subtmit your content via a Pull Request to be reviewed by the DMSE/IPSO Working Group

### 1. Create a New Markdown File
Create an empty markdown file inside of the folder [/ content / blogs](https://github.com/OpenMobileAlliance/oma_github_pages/tree/main/content/blogs)

The file name of this new markdown document MUST follow up the following name schema:

<alert>
 YYYY-MM-DD-free_title.md 

And example of a blog file name is `2020-01-23-Lw2M2M-5G.md`

</alert>

### 2. Populate front-matter
The `front-matter` is the content inside of three `---` dashes.
These are the properties that need to be defined inside of the `front-matter` in order to publish a blog like e.g. [blog: 2020-01-23-Lw2M2M-5G](https://lwm2m.openmobilealliance.org/blogs/2020-01-23-Lw2M2M-5G.md)

Add this list of properties to your markdown document.
See example below:

```yml
---
layout: blog
image:   # add '/images/news/nuSIM.jpg'  and upload the image in the news folder
title: White Paper - OMA LwM2M - Ready for 5G # blog title
subtitle: LwM2M & 5G  # blog subtitle
description: OMA LwM2M is ready for 5G # blog free description, it won't be publicly available
url:  # add an url to an external resource
date: 2020-Jan-23  # include the date
by: OMA SpecWorks  # include the entity behind the blog
author: OMA DMSE   # include the author
tags: 
    - 5G           # tags will be apply by the Working Group, although suggestions are welcome
    - v1.2
---

```

### 3. Write Blog Content
The **blog** content is written in markdown language right after the closing `---` of the `front-matter`.

See example [here](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/blogs/2020-01-23-Lw2M2M-5G.md)


Use the comment `<!--more-->` to indicate what portion of the text should be displayed in the compact format, [example](https://lwm2m.openmobilealliance.org/blogs/)


<alert>
You are free to use any markdown instruction.
</alert>

### 4. Submit a Pull Request for Working Group Review
Create a Pull Request against the `master` branch.

<alert type= 'warning'>
This repository follows CommitLint format.
https://github.com/conventional-changelog/commitlint/#what-is-commitlint
Please insert in the commit description one of these properties:

* `feat: add commit text`  # to be used when adding a new feature
* `fix: add commit text`  # to be used when resolving a bug-fix
* `style: add commit text` # to be used when updating the style
* `test: add commit text`  # to be used when testing the website
</alert>

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).
