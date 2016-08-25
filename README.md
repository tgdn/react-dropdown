# React Dropdown [![npm version](https://badge.fury.io/js/%40tgdn%2Freact-dropdown.svg)](https://badge.fury.io/js/%40tgdn%2Freact-dropdown)

An accessible, easy to use, customizable dropdown library for the web.

Ongoing work on the library.

<img src="https://raw.githubusercontent.com/tgdn/react-dropdown/master/screenshots/1.png" alt="React Dropdown Screenshot 1" width="270" height="">
<img src="https://raw.githubusercontent.com/tgdn/react-dropdown/master/screenshots/2.png" alt="React Dropdown Screenshot 2" width="370" height="">
<img src="https://raw.githubusercontent.com/tgdn/react-dropdown/master/screenshots/3.png" alt="React Dropdown Screenshot 3" width="370" height="">


## Playground
To run demo on your computer

-     npm install
-     npm run storybook
- visit http://localhost:9001/


## Installing
```
npm install --save @tgdn/react-dropdown
```

## Usage
```jsx
import React from 'react'
import {
    Dropdown,
    DropdownMenu,
    DropdownMenuItem,
    DropdownButton
} from '@tgdn/react-dropdown'

const MyMenu = props => {
    return (
        <DropdownButton title='Click me' center>
            <DropdownMenu>
                <DropdownMenuItem>Click me</DropdownMenuItem>
				<DropdownMenuItem>Once more</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenu>
        </DropdownButton>
    )
}
```

## Configuration
Different prop types are available for use on `DropdownButton` or directly on `Dropdown`

Prop|Default|Value|Description
----|-------|-----|-----------
`opened`|false|true/false|Whether the dropdown should be visible after mounting
`noArrow`|false|true/false|If true, no arrow will be displayed. The default is with an arrow, and thus false
`arrowLeft`|false|true/false|If true, the arrow will be on the left of the dropdown, otherwise arrow stays untouched
`arrowRight`|false|true/false|If true, the arrow will be on the right of the dropdown, otherwise arrow stays untouched
`center`|false|true/false|Whether to align the dropdown and the button so they are horizontally aligned
`pullLeft`|false|true/false|If true, the dropdown will be shifted all the way to the left
`pullRight`|false|true/false|If true, the dropdown will be shifted all the way to the right
`alignLeft`|false|true/false|If true, the dropdown will left side will be aligned with the container's left side
`alignRight`|false|true/false|If true, the dropdown will right side will be aligned with the container's right side


## Done
- Simple UI
- Reactive Component
- Dropdown positioning
- Arrow positioning
- Dropdown Button and Menu

## To do
- Dynamic positioning on window scroll and window resize
- More components (simple view, ...)
