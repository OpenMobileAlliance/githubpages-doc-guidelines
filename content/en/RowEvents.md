---
title: RowEvents
description: ''
position: 120
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
            <td><a href="./#rowevents" target="_blank">RowEvents</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rowbuttongrid" >See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

This is how `RowEvents` is rendered in a webpage:

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674469-634ef489-c3ac-4f7a-9d44-3a019f827373.png">

This is how `RowEvents` is written in Markdown:

```md
      - 
        name: RowButtonGrid
        id: events
        cols:
          -
            title: Events
            subtitle: Coming
            image: fas users
            items:
              - 
                title: Last Virtual Event
                subtitle: 2021-Nov-10
                status: deactive  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/Virtual-TestFest-Mar-2021
                target: _blank
              - 
                title: Previous
                subtitle: Events
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/Virtual-TestFest-Mar-2021
                target: _blank
```
