---
title: RowImageText
description: ''
position: 140
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
            <td><a href="./#rowimagetext" target="_blank">RowImageText</a></td>
            <td>
                  <ul>
                        <li>This module is representing as a row, with an `image` on the left and `text` on the right</li>
                        <li><a href="#rowimagetext" >See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

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
