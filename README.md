Pinclone
========

a pinterest like grid structure built on jquery.

Layout
------
- A series of divs each with the class .block
- Each block can contain various amounts of text/images/content.
- css transitions all


Behavior logic
--------------
- Set variables
  - window width
  - column width
  - column margin
  - column count
  - total width
  - remaining width space
- Position Blocks
  - for the number of columns that fit on a page, store the initial height of each column in the array colHeights (for now all the columns start with the height of margin).
  - for each .block element:
    - find the shortest column in the colHeights array
    - find the index of the shortest column in the colHeights array
    - determine the position of this .block element by checking what column index it is in
    - position this .block element using .css() left and top
    - update the height of the shortest column with the added height of this block

