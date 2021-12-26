---
title: Introduction
description: ''
position: 1
category: 'GETTING STARTED'
---
## Overview
These guidelines provide all the information that you need to maintain and create new web pages for the DMSE/IPSO website.
The content of OMA LwM2M website is stored in the GitHub repository, [oma_github_pages](https://github.com/OpenMobileAlliance/oma_github_pages) and the website is rendered by GitHub as GitHub pages in [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/).

## Website Structure
The image below describes the website structure for [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/).

<figure class="text-center">
      <img src="./images/website-structure.svg" alt="Website Structure ">
      <figcaption>Website Structure</figcaption>
</figure>
<img width="611" alt="image" src="https://user-images.githubusercontent.com/3258579/146739678-1f8a3f21-48db-477a-96ce-35dbf2d9a9d2.png">

### Navigation

The content of this block contains a clicable `logo`, the `menus` and `submenus`.

### Pages

The main placeholder for the body is the `page`. 
A `page` is formed by `containers` that are boxes stacked one of top of each other and spreaded across the width of the webpage. Each `container` can contain one or more `modules`. The basic type of content that can be inserted inside of a `module` are: `image`, `text`, `table`, `blank-separator`, `news-card`, `blog-card`, etc.

Inside of a `container` is possible to insert a `module` which in turn contains another `module`. The above image depictures an example where one `container` contains a `module`, called `rowMultiColumns` - a table with two columns - in one of the columns is inserted a `rowNewList` module and in other column is inserted a `rowButtonGrid` module.

It also possible to concatenate two `modules` inside of a `container`, e.g. a text section on the left followed by a imgage to the right, called `rowTextImage` or the reserve an image to the left followed by a text to the right, called `rowImageText`.


### Footer

The `footer` contains OMA copyright statement and its `social media` icons.

In the next section [Structure](structure.md#structure) you can see how each of these components is structured.

## Modules
### Modules Content
As previously indicated the basic type of content inside of a `module` could be:

* text,
* image,
* text & image,
* table (each cell on the table can contain inside another container)
* blank line
* blog card
* news card

> Note: the `module` name `Row+containerType` provides an indication what is inside of the module, e.g. a `module` with the name `RowTextImage`contains `text` on the left-hand and an `image` on the right-hand. A `module` called `RowText` only contains text.

### List of Modules
List of available modules:

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
      <tr>
            <td><a href="./#rowseparator" target="_blank">RowSeparator</a></td>
            <td><ul>
                  <li>It is used to insert a blank line. It is possible to control the high of the line by using a property.</li>
                  <li><a href="#rowseparator" >See example</a></li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a></td>
            <td><ul>
                  <li>It is used to insert a table</li>
                  <li>Each table column can contain any of the defined modules</li>
                  <li><a href="#rowmulticolumns" >See example</a></li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rownewlist" target="_blank">RowNewList</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rownewlist" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowbuttongrid" target="_blank">RowButtonGrid</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rowbuttongrid" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowimage" target="_blank">RowImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to insert an `image` that covers the screen width</li>
                        <li><a href="#rowimage" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowimagetext" target="_blank">RowImageText</a></td>
            <td>
                  <ul>
                        <li>This module is representing as a row, with an `image` on the left and `text` on the right</li>
                        <li><a href="#rowimagetext" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowtextimage" target="_blank">RowTextImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to represent, in a row, `text` on the left and an `image` on the right </li>
                        <li><a href="#rowteximage" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td></td>
            <td>
                  <ul>
                        <li></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Examples of `modules`


### `RowText`
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

### `RowSeparator`
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674402-d8cb7185-e767-4dfb-9a66-79ead6430c44.png">

```md
  -
    name: RowSeparator
    size: S #provide XS, S, M, L, XL spacing between component
```

### `RowMultiColumns`
This is how `RowMultiColumns` is rendered:
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674432-8800c643-3b85-4647-8c9f-b718a5869192.png">

This is the content of the table written in a markdown file:

```md
  -
    name: RowMultiColumns
    cols: 3
    widths: [2, 8, 2]
    modules:
      - 
        name: RowNewsList
        title: News
        subtitle: Latest
        image: fas cube
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

### `RowNewList`
This is how `RowNewList` module is rendered:

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674445-f5d7f46a-6c3b-4a3d-8962-0f0f680b2511.png">

This is how it is written:

```md
    modules:
      - 
        name: RowNewsList
        title: News
        subtitle: Latest
        image: fas cube
```

### `RowBottonGrid`
This is how `RowBottonGrid` is rendered in a webpage: 

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674459-90a77f96-a38a-4398-95ce-bacf5aceb426.png">

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

### `RowEvents`
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

### `RowImageText`
This is how `RowImageText` is rendered in a webpage:

<img width="1134" alt="image" src="https://user-images.githubusercontent.com/3258579/146674517-2a11b964-10d9-49c2-a396-74857f35cd47.png">

This is how `RowImageText` is written in Markdown:

```md
  -
    name: RowImageText
    cols: 3
    image: images/dmse.png
    status: second #second-wide (extend the width of the image), "second" provides a background color to the text or empty
    text: | 
      ##### **Device Management & Service Enablement Working Group**

      *Home to the widely deployed Internet of Things (IoT) protocol, LightweightM2M (LwM2M), the Device Management & Service Enablement Working Group (DMSE WG) specifies protocols and mechanisms to achieve the management of mobile devices, services access and software on connected devices across networks.*
      
      Since 2002, the DMSE WG has released a suite of specifications which includes 20+ mobile service enabler specifications and more than 60 Management Objects providing simple, reliable and cost-effective ways to deploy new applications and services while minimizing the risk. The most market diffused of the Management Objects is certainly the Firmware Update Management Object (FUMO) with **deployments in the billions of devices**. An additional 20+ Management Objects have been defined by other standards organizations, which cooperate with OMA SpecWorks to avoid fragmentation and duplication. DMSE technologies easily manage converged and multi-mode devices on any network, including devices that do not have a SIM card, as well as resource-constrained devices. Explore the OMA [DMSE](https://technical.openmobilealliance.org/index.html)and [LwM2M](https://openmobilealliance.github.io/dmse-documentation/) specifications.
```


### `RowTextImage`
This is how `RowTextImage` is rendered in a webpage:

<img width="1124" alt="image" src="https://user-images.githubusercontent.com/3258579/146674537-f07848b0-fed1-4f1a-b84b-aace9a5672f3.png">

This is how `RowTextImage` is written in Markdown:

```md
  -
    name: RowTextImage
    cols: 9
    image: images/ipso.png
    status: #second-wide
    text: | 
      ##### **IPSO Smart Objects Working Group (IPSO)**
      In December 2017, the IPSO Alliance joined forces with the Open Mobile Alliance. OMA SpecWorks was launched in early 2018 from the two organizations and the IPSO Smart Objects Working Group (IPSO WG) was formed. The IPSO WG is focused on enabling IoT devices to communicate, understand and trust each other with global interoperability based on open standards.

      IPSO WG’s charter is to develop, establish, and create the industry leadership of an “IPSO Platform” that includes the definition and support of Smart Objects with an emphasis on object interoperability on protocol and data layers and of Identity and Privacy technologies. The mission is to create a platform and support system that includes libraries, repositories, design kits, and industry awareness for discovery and interoperability of IoT Smart Objects.

      The IPSO Alliance is not a standards organization, but an alliance that promotes and supports Smart Objects, and manages an IPSO Smart Object Registry that includes libraries, icons and repositories to be used by worldwide standard definition organizations (SDOs), special interest groups (SIGs), open communities and original equipment manufacturers (OEMs). The creation of a fully functional IPSO Smart Object Registry provides an avenue for industry adoption. IPSO has the goal to create Smart Object definitions, instantiations, data models, design models, reference architectures, icons, and brand, which include all the attributes needed to be an integral component of an IoT Smart Object Marketplace.
```

### `RowDynamicTable`
This is how `RowDynamicTable` is rendered in a webpage:

<img width="1140" alt="image" src="https://user-images.githubusercontent.com/3258579/146674562-a4e1a8ea-c4a8-41db-98b1-f72d1161b7c8.png">

This is how `RowDynamicTable` is written in Markdown:

```md
  - 
    name: RowDynamicTable
    description: Table dedicated to display resources
    pagination: 10
    filter: 
     - title
     - type
     - published
    columns:
      - 
        key: title
        label: Title
        sortable: true
      - 
        key: type
        label: Type
        sortable: true
      - 
        key: published
        label: Published
        sortable: true
      - 
        key: download
        label: Download
        sortable: false
    items:
      - title:
          title: LwM2M v1.2 Features
        type:
          title: PDF
        published:
          title: 2020-Nov-10
        download:
          icon: fas download
          url: "https://www.openmobilealliance.org/release/LightweightM2M/"
          target: _blank
      - title:
          title: LwM2M v1.1 Presentation Overview
        type:
          title: PDF
        published:
          title: 2019-Jun-17
        download:
          url: "https:/www.openmobilealliance.org/release/LightweightM2M/Lightweight_Machine_to_Machine-v1_1-OMASpecworks.pdf"
          target: _blank
          icon: fas download
      - title:
          title: LwM2M v1.1 overview including new features due for release in Q2 2019
        type:
          title: Video
        published:
          title: 2019-Jan-21
        download:
          icon: fas download
          url: "https://www.youtube.com/watch?v=D7xEYnwOeHU"
          target: _blank
      - title:
          title: LwM2M Specifications
          url: "https://technical.openmobilealliance.org/Overviews/lightweightm2m_overview.html"
          target: _blank
        type:
          title: Documents
        published:
          title: 2020-Nov-10
        download:
          icon: 
      - title:
          title: LwM2M Open-Source Specifications
          url: 
          target: _blank
        type:
          title: Implementations
        published:
          title: 2020-Nov-10
        download:
          icon: fas download
          url: "https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/LwM2M-Open-Source-Code"
          target: _blank
      - title:
          title: LwM2M Object and Resource Registry
          url: "https://github.com/OpenMobileAlliance/lwm2m-registry"
          target: _blank
        type:
          title: Registry
        published:
          title: 2021-Oct-06
        download:
          icon: 
      - title:
          title: LwM2M Enabler Test Specifications
          url: "http://www.openmobilealliance.org/release/LightweightM2M/ETS/"
          target: _blank
        type:
          title: Test Specs
        published:
          title: 2019-Sep-12
        download:
          title: 
      - title:
          title: OMA SlideShare Account
          url: "http://www.slideshare.net/OpenMobileAlliance/presentations"
          target: _blank
        type:
          title: SlideShare
        published:
          title: 
        download:
          icon: 
```

### `RowImage`
This is how `RowImage` is rendered in a webpage:

<img width="1130" alt="image" src="https://user-images.githubusercontent.com/3258579/146674618-8a39d80f-325d-4de6-b17d-2fe36474a12b.png">

This is how `RowImage` is written in Markdown:

```md
  -
    name: RowTextImage
    cols: 1
    image: "/images/events.png"
    title: separator
    status: 

```

### `Blogs`
This is how `Blogs` is rendered in a webpage:

<img width="1153" alt="image" src="https://user-images.githubusercontent.com/3258579/146674678-fd65ae8a-498c-4555-8865-afef125ffd8d.png">

This is how `Blogs` is written in Markdown:

```md
---
layout: blog
image:
title: LwM2M v1.2 is now available!
subtitle: Latest LwM2M Protocol version
description: The standardization work on the LwM2M v1.2 specification has been completed and the specification bundle is now available for public download
url: 
date: 2020-Dec-09
by:  OMA SpecWorks
author: Hannes Tschofening
tags:
    - v1.2
    - Release
---

<b>The standardization</b> work on the LwM2M v1.2 specification has been completed and the specification bundle is now available for public download.

Originally proposed in 2012, LwM2M v1.0 was finally published in early 2017 after comprehensive research with developers across multiple industries and application areas. The original standard was a compelling solution for device lifecycle management with focus on constrained IoT devices. With LwM2M adoption observed across a broader range of device types and the benefit of feedback from real use cases, releases including v1.0.1 and v1.0.2 were published to keep up with ever increasing demand and expansion of LwM2M use. With v1.1 published in 2018, OMA SpecWorks increased the functionality of the protocol by adding support for Cellular IoT, LoRaWAN as well as in enterprise networks with CoAP over TCP/TLS.<!--more-->
```

### `News`
This is how `News` is rendered in a webpage:

<img width="1158" alt="image" src="https://user-images.githubusercontent.com/3258579/146674721-f6f1770d-84a2-4dbd-b584-61bcee5fdd9b.png">

This is how `News` is written in Markdown:

```md
---
layout: news
image: /images/news/ENISA.png
title: LwM2M in ENISA’s Secure Supply Chain for IoT
subtitle: NISA collaborates with OMA LwM2M
description: LwM2M protocol is ENISA compliant
url: 
by: OMA SpecWorks
date: 2021-Jul-08
homepage: 1
tags: security
---

**Concerns** with supply chain security have steadily increased over the past several years. Economics has “shrunk” the world and most supply chains now include, at some point, components (hardware/
```