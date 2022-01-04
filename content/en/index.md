---
title: Introduction
description: ''
position: 1
category: 'GETTING STARTED'
---
## Overview
These guidelines provide all the information that is necesary to maintain and create new web pages in the [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/) website.
The content of this website is stored in the GitHub repository, [oma_github_pages](https://github.com/OpenMobileAlliance/oma_github_pages).
The website is hosted using GitHub Pages. The repository has been configured for continuos deployment using GitHub Actions. Each time that a Pull Request is merged into the `master` branch, the new content is executed and new static HTML pages are deployed via the GitHub pages.

These guidelines are divided in three main sections:

**Getting Started**

This section is dedicated to highlight the frameworks use to construct the webpages as well as how these webpages are structured:
* **Header** - it contains the navigation part of the website, with menus, submenus, logo and icons.

* **Pages** - are the holders of information
  * Containers - are wrappers that can hold one or more `modules`
    * Modules - are the structure that hold the content. These `modules` can represent simple content type like: `text`, `image`, `text-image`, `tables`, `empty-line`, `blog-card`, etc or even other more complex types like `modules` inside of `modules`.
* **Footer** - at the bottom of each page the footer contains the reference to social media icons and copyright statement.

The website has been constructed using a framework developed by `StandardsCode` an Open-Source project that maintains its code [here]().
