---
title: Modules
description: ''
position: 15
category: 'GETTING STARTED'
---
## Overview
This section provides a list of existing `modules` and its content type.

New `modules` are being developed by the open-source project [Standardards Code]()

## Content Type
As previously indicated the basic type of content inside of a `module` could be:

* `text`,
* `image`,
* `text & image`,
  * the area taken by the `text` vs the `image` is controlled by a property called `cols`
* `table` 
  * each column on the table can be represented by another `module`
* `empty-line`
  * inserts a empty space between two `modules`
* `blog-card`
  * insert a placeholder for a **Blog** card
* `news-card`
  * insert a placeholder for a **News** card

> Note: `modules` are named as `Row+moduleType` . The name provides an indication what is inside of the module, e.g. a `module` with the name `RowTextImage`contains `text` on the left-hand and an `image` on the right-hand. A `module` called `RowText` contains text only. An a module called `RowMultiColumns` contains a table which column will be described by a `module`.

## List of Modules
To see the latest list of `modules` visit [StandardsCode]().

These are the `modules` used in the [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/) website.


<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator" target="_blank">RowSeparator</a></td>
            <td><ul>
                  <li>It is used to insert an horizontal empty-space between two consecutive <i>modules</i>. It is possible to control the high of the empty-space by using the property <i>size</i> .</li>
                  <li><a href="#rowseparator" >See example</a></li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowText" target="_blank">RowText</a></td>
            <td><ul>
                  <li>it is used to insert text</li>
                  <li>If multiple lines are needed, then insert <i>|</i> symbol and then write content across multiple lines.</li>
                  <li><a href="#rowtex" >See example</a></li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowImage" target="_blank">RowImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to insert an <i>image</i> that covers the width of a table of 12 columns.</li>
                        <li><a href="#rowimage" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowTextImage" target="_blank">RowTextImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to represent, in a row, <i>text</i> on the left-hand side and an <i>image</i> on the right-hand side </li>
                        <li>The width of this row is equivalent to a table that contains 12 columns</li>
                        <li>The property <i>cols</i> controls the space or area taken by the content on the left</li>
                        <li><a href="#rowteximage" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowImageText" target="_blank">RowImageText</a></td>
            <td>
                  <ul>
                        <li>This module is representing as a row, with an <i>image</i> on the left-hand side and <i>text</i> on the right-hand side</li>
                        <li>The width of this row is equivalent to a table that contains 12 columns</li>
                        <li>The property <i>cols</i> controls the space or area taken by the content on the left</li>
                        <li><a href="#rowimagetext" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns" target="_blank">RowMultiColumns</a></td>
            <td><ul>
                  <li>It is used to insert a table</li>
                  <li>The number of columns in the table is controlled by the property called <i>cols</i></li>
                  <li>Each table-column contains a <i>module</i>, any of the modules defined in this section</li>
                  <li><a href="#rowmulticolumns" >See example</a></li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowNewList" target="_blank">RowNewList</a></td>
            <td>
                  <ul>
                        <li>It is used to provide a sublist of the <a href="https://lwm2m.openmobilealliance.org/news/" target="_blank">News</a></li>
                        <li>It can be used as a submodule inside of <a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rownewlist" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowButtonGrid" target="_blank">RowButtonGrid</a></td>
            <td>
                  <ul>
                        <li>It is used to introduce one or more columns of information. The information is rendered inside of vertical buttons or bubbles.</li>
                        <li>It can be used as a submodule inside of <a href="c" target="_blank">RowMultiColumns</a> module, where a particular table-column can contains multiple columns introduced by this module</li>
                        <li><a href="#rowbuttongrid" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowEvents" target="_blank">RowEvents</a></td>
            <td>
                  <ul>
                        <li>It is used to create a wider column that lists events</li>
                        <li>It can be used as a submodule inside of <a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rowevents">See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowDynamicTable" target="_blank">RowDynamicTable</a></td>
            <td>
                  <ul>
                        <li>It is used to insert a table where each column and row contains text, or icons</li>
                        <li>The table contains search functionality, filtering and pagination</li>
                        <li>The information to display inside of the table can be serialized in <i>.json</i>, <i>.yaml</i> or <i>.xml format<i></li>
                        <li><a href="#rowdynamictable">See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

> Indentation: it is important to respect the indentation of the module properties. If the indentation is not correct, the content may not be displayed correctly.

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).