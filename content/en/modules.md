---
title: Modules
description: ''
position: 15
category: 'GETTING STARTED'
---
## Overview
## Content Type
As previously indicated the basic type of content inside of a `module` could be:

* text,
* image,
* text & image,
* table (each cell on the table can contain inside another container)
* empty-line
* blog-card
* news-card

> Note: the `module` name `Row+containerType` provides an indication what is inside of the module, e.g. a `module` with the name `RowTextImage`contains `text` on the left-hand and an `image` on the right-hand. A `module` called `RowText` only contains text.

## List of Modules
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
            <td><a href="./#rowseparator" target="_blank">RowSeparator</a></td>
            <td><ul>
                  <li>It is used to insert a blank line. It is possible to control the high of the line by using a property.</li>
                  <li><a href="#rowseparator" >See example</a></li>
                </ul>
            </td>
      </tr>
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
            <td><a href="./#rowimage" target="_blank">RowImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to insert an `image` that covers the screen width</li>
                        <li><a href="#rowimage" >See example</a></li>
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
            <td><a href="./#rowimagetext" target="_blank">RowImageText</a></td>
            <td>
                  <ul>
                        <li>This module is representing as a row, with an `image` on the left and `text` on the right</li>
                        <li><a href="#rowimagetext" >See example</a></li>
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
            <td><a href="./#rowevents" target="_blank">RowEvents</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rowevents">See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowdynamictable" target="_blank">RowDynamicTable</a></td>
            <td>
                  <ul>
                        <li>It is used to insert a table</li>
                        <li>The table can contain search functionality, filtering and pagination</li>
                        <li><a href="#rowdynamictable">See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

> Indentation: it is important to respect the indentation of each module and its properties. If the indentation is not correct the content may not be displayed correctly.

## F.A.Q