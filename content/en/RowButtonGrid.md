---
title: RowButtonGrid
description: ''
position: 170
category: 'MODULES'
---
## Overview
It is used to create a table with columns which each cell contains a *button* which background color can be controlled by the `status` property.
The `module` can be used inside by itself inside of a `container` or as a submodule inside of the e.g. [`RowMultiColumns`](RowMulticolumsn.md).

## Display

This is how `RowButtonGrid` is rendered in a webpage: 

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674459-90a77f96-a38a-4398-95ce-bacf5aceb426.png">

## Use
This table describes what `RowButtonGrid` is and how to use it.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><a href="./#rowbuttongrid" target="_blank">RowButtonGrid</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rowbuttongrid" >See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This is how `RowBottonGrid` is written in Markdown:

```md
      -
        name: RowButtonGrid
        cols:
          -
            title: LwM2M
            subtitle: Protocol
            image: fas cog
            items:
              -
                title: V1.2
                subtitle: 10-Nov-20
                status: active
                url: https://openmobilealliance.github.io/dmse-documentation/#v12-functionality
                target: _blank
              - 
                title: V1.1.1
                subtitle: 17-Jun-2019
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#v11-functionality
                target: _blank
              - 
                title: V1.0.2
                subtitle: 02-Feb-2018
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#v10-functionality
                target: _blank
          -
            title: Test
            subtitle: Specs
            image: fas check-circle
            items:
              -
                title: V1.2
                subtitle: Pending
                status: pending  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url:
              - 
                title: V1.1
                subtitle: 12-Sep-2019
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/release/LightweightM2M/ETS/OMA-ETS-LightweightM2M-V1_1-20190912-D.pdf
              - 
                title: V1.0.2
                subtitle: 18-Aug-2015
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/release/LightweightM2M/ETS/OMA-ETS-LightweightM2M-V1_0_2-20180815-A.zip
          -
            title: LwM2M
            subtitle: Enablers
            image: fas spinner
            items:
              - 
                title: Binary Application Data
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-binary-application-data
                target: _blank
              - 
                title: Connectivity Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-connectivity-management
                target: _blank
              - 
                title: Device Capabilities Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-device-capabilities-management
                target: _blank
              - 
                title: Event Log
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-event-log
                target: _blank
              - 
                title: Lock & Wipe
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-lock--wipe
                target: _blank
              - 
                title: Portfolio Object
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-portfolio-object
                target: _blank
              - 
                title: Software Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-software-management
                target: _blank
              - 
                title: LwM2M Virtual Observation
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-virtual-observation
                target: _blank
          -
            title: Resources
            subtitle: Information
            image: fas laptop
            items:
              - 
                title: LwM2M Registry
                subtitle:
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html
                target: _blank
              - 
                title: Developer's Wiki
                subtitle:
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki
                target: _blank
          -
            title: Implementations
            subtitle: Code
            image: fas handshake
            items:
              - 
                title: Leshan
                subtitle: (Eclipse)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/eclipse/leshan
                target: _blank
              - 
                title: Wakaama
                subtitle: (Eclipse)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/eclipse/wakaama
                target: _blank
              - 
                title: Anjay
                subtitle: (AVSystem)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/AVSystem/Anjay
                target: _blank
```
## Properties
### Structure

```yml
-  # always start with a `-`
  name: RowButtonGrid
  cols:
    - # these properties define the headers of the columns
      title:
      subtitle:
      image:
      items:
        - # these properties define the content of each row
          title:
          subtitle:
          status:
          url:
          target:
        -
          # repite the properties inside of items for each row to add
```

### Description
`name`: **RowButtonGrid**

`cols`:
* this property doesn't have any value, it is used to define the style of the header column as well as the `items` inserted in this column as `cells`
* the properties listed below define the content per column. To add more than one column repite these set of properties, indented to the right of the property `cols`
  * `title`:
    * it provides a *bold* title at the top of the column
  * `subtitle`:
    * it provides an *italic* title below the `title`
  * `image`:
    * same arrangement as in the `RowMultiColumns`, or `RowNewList` `modules`
    * this is an `icon` displayed on top of the `title`
    * the `icon` is stored externally, out side of the repository in XXX
    * in this case the value of the `image` is a `string` which name represents an `icon` in the above reference
  * `items`:
    * the following properties are used to define a `button` inside of the column cell
    * the following items are indented to the right:
      * `title`:
        * this property is used to provide a **bold** title at the top of the `button`
      * `subtitle`:
        * this property is used to provide an `italic` subtitle below the `title` property
      * `status`:
        * with this property is possible to control the background color of the button, the possible values are:
          * `hightlight`
            * in the CSS this element is configured to be `highlighted`
          * `active`
            * the look and feel provided in the CSS is configured to be `on`
          * `deactive`
            * the look and feel provided in the CSS is configured to be `off`
          * `pending`
            * the look and feel provided in the CSS is configured to be in `transition`
      * `url`:
        * optional
        * the value of this property is a global or local URL
      * `target`:
        * optional which values are empty or `_blank`. The latest value open the content of the URL in a new webpage

## F.A.Q