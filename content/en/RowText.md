---
title: RowText
description: ''
position: 110
category: 'MODULES'
---
## Overview
This module inserts one or more text paragraphs. The text covers the width of the page.
## Use

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><a href="./#rowtext" target="_blank">RowText</a></td>
            <td><ul>
                  <li>it is used to insert text, one ore more paragraphs</li>
                  <li>If multiple text lines are needed, then insert `|` symbol and then write Markdown content across multiple lines.</li>
                  <li><a href="#rowtex" >See example</a></li>
                </ul>
            </td>
      </tr>
</tbody>
</table>

## Display

The content of the `RowText` module is highlighted in red.
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674378-2affdcd4-18f4-48a5-b857-38954693dc7d.png">

## Code
This is how to insert a `RowText` module in a Markdown file:

```md [oma_github_pages/content/index.md]
  -
    name: RowText
    text: |
      ### Open Mobile Alliance - [DMSE](https://omaspecworks.org/about/the-oma-specworks-work-program/device-management-and-service-enablement-working-group/) / [IPSO](https://omaspecworks.org/about/the-oma-specworks-work-program/ipso-smart-objects-working-group/) Working Groups
      These GitHub pages are dedicated to DMSE/IPSO Working Groups.
```
## Properties
`name`: **RowText**

`text`: 
* Insert Markdown text
* If more than one line is required, then insert the symbol `|` follow by the Markdown text

## F.A.Q