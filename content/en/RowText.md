---
title: RowText
description: ''
position: 110
category: 'MODULES'
---
## Overview
This module inserts one or more text paragraphs in markdown language. The text covers the width of the page.

## Display

The content of the `RowText` module is highlighted in red.
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674378-2affdcd4-18f4-48a5-b857-38954693dc7d.png">

## Use
This table describes what is and how to use `RowText` module.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowText</b></td>
            <td><ul>
                  <li>it is used to insert text, one ore more paragraphs in markdown language</li>
                  <li>if multiple text lines are needed, then insert `|` symbol and then write Markdown content across multiple lines.</li>
                </ul>
            </td>
      </tr>
</tbody>
</table>

## Code
This is an [example](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) of a `RowText` module written in a markdown file:

```md [oma_github_pages/content/index.md]
  -
    name: RowText
    text: |
      ### Open Mobile Alliance - [DMSE](https://omaspecworks.org/about/the-oma-specworks-work-program/device-management-and-service-enablement-working-group/) / [IPSO](https://omaspecworks.org/about/the-oma-specworks-work-program/ipso-smart-objects-working-group/) Working Groups
      These GitHub pages are dedicated to DMSE/IPSO Working Groups.
```

## Properties
### Structure

```yml
-  # always start with a `-`
   name:
   text:
```

### Description

`name`: **RowText**

`text`: 
* Insert Markdown text
* If more than one line is required, then insert the symbol `|` follow by the Markdown text

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).
