---
title: RowText
description: ''
position: 180
category: 'MODULES'
---
## Overview

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
                  <li>it is used to insert text</li>
                  <li>If multiple lines are needed, then insert `|` symbol and then write content across multiple lines.</li>
                  <li><a href="#rowtex" >See example</a></li>
                </ul>
            </td>
      </tr>
</tbody>
</table>

#### `RowText` Example

The content of the `RowText` module is highlighted in red.
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674378-2affdcd4-18f4-48a5-b857-38954693dc7d.png">

This is how to write the content in a markdown file: 

```md
---
title: Home page
description: Main page of the web application
modules:
  -
    name: RowText
    text: |
      ### Open Mobile Alliance - [DMSE](https://omaspecworks.org/about/the-oma-specworks-work-program/device-management-and-service-enablement-working-group/) / [IPSO](https://omaspecworks.org/about/the-oma-specworks-work-program/ipso-smart-objects-working-group/) Working Groups
      These GitHub pages are dedicated to DMSE/IPSO Working Groups.
```