---
title: RowNewsList
description: ''
position: 160
category: 'MODULES'
---
## Overview
It it used to display a highlight of the content inside of the folder **News**. 
The `module` can be used by itself inside of a `container` or as a `submodule` inside for example a table or [`RowMultiColumns`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns) `module`.

## Display

This is how `RowNewsList` module is rendered in a webpage:

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674445-f5d7f46a-6c3b-4a3d-8962-0f0f680b2511.png">

## Use
This table describes what `RowNewsList` is and how to use it.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowNewsList</b></td>
            <td>
                  <ul>
                        <li>This module is used to provide a highlight of the **News** available in the News folder </li>
                        <li>The information provided on the button or bubble are: `title`, `subtitle`, `date`, and `author` of the **News**</li>
                        <li>It is also used as a submodule inside of <a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns" target="_blank">RowMultiColumns</a> module</li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This is an example of how [`RowNewsList`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) is written on a markdown file:

```md
      - 
        name: RowNewsList
        title: News
        subtitle: Latest
        image: fas cube
```
## Properties
### Structure

```yml
-  # always start with a `-`
  name:
  title:
  subtitle:
  image:
```

If the `RowNewsList` module is used as a submodule inside of e.g. [`RowMultiColumns`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns) module, then the structure is:

```yml

-  # always start with a `-`, the next  bloc of properties belong to the RowMultiColumns module
  name:
  cols: 2
  widths: [X, Y]
  modules:
    -    # properties of the RowNewList module
      name:
      title:
      subtitle:
      image:
```

### Description

`name`: **RowNewsList**

`title`:
* it provides a **bold** title at the top of the column

`subtitle`:
* it provides an *italic* subtitle, below the `title`

`image`:
* same arrangement as in the [`RowMultiColumns`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns) module
* this is an `icon` displayed on top of the `title`
* the `icon` is stored externally, out side of the repository in [free images](https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=brands,solid&m=free)
* in this case the value of the `image` is a `string` which name represents an `icon` in the above reference, e.g.: search for image name **Cube** the value to insert on the `image` property is prefixed by `fas` string, e.g., *fas cube*

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).
