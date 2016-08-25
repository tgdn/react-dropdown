import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import {
    Dropdown,
    DropdownMenu,
    DropdownMenuItem,
    DropdownButton
} from '../../src'

import IoIosMore from 'react-icons/lib/io/ios-more'

storiesOf('Button', module)
    .add('Simple menu', () => (
        <Dropdown opened>
            <DropdownMenu>
                <DropdownMenuItem>Click me</DropdownMenuItem>
                <DropdownMenuItem>Two</DropdownMenuItem>
                <DropdownMenuItem>Check it out</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenu>
        </Dropdown>
    ))
    .add('Button dropdown menu', () => (
        <DropdownButton title='Click me' center>
            <DropdownMenu>
                <DropdownMenuItem onClick={(e) => console.log(e)} closeOnClick>Click me</DropdownMenuItem>
                <DropdownMenuItem>won't close on click</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Check it out</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Log out</DropdownMenuItem>
            </DropdownMenu>
        </DropdownButton>
    )).add('Arrow left', () => (
        <DropdownButton title='Arrow left' arrowLeft>
            <DropdownMenu>
                <DropdownMenuItem closeOnClick>Click me</DropdownMenuItem>
                <DropdownMenuItem>won't close on click</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Check it out</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Log out</DropdownMenuItem>
            </DropdownMenu>
        </DropdownButton>
    )).add('Pull right arrow left', () => (
        <DropdownButton title='Pull right arrow left' pullRight arrowLeft>
            <DropdownMenu>
                <DropdownMenuItem closeOnClick>Click me</DropdownMenuItem>
                <DropdownMenuItem>won't close on click</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Check it out</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Log out</DropdownMenuItem>
            </DropdownMenu>
        </DropdownButton>
    )).add('Align right arrow right', () => (
        <DropdownButton title='Align right arrow right' alignRight arrowRight>
            <DropdownMenu>
                <DropdownMenuItem closeOnClick>Click me</DropdownMenuItem>
                <DropdownMenuItem>won't close on click</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Check it out</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Log out</DropdownMenuItem>
            </DropdownMenu>
        </DropdownButton>
    )).add('No arrow', () => (
        <DropdownButton title='No arrow alignRight' alignRight noArrow>
            <DropdownMenu>
                <DropdownMenuItem closeOnClick>Click me</DropdownMenuItem>
                <DropdownMenuItem>won't close on click</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Check it out</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Log out</DropdownMenuItem>
            </DropdownMenu>
        </DropdownButton>
    )).add('No arrow pull right', () => (
        <DropdownButton title='No arrow pull right' pullRight noArrow>
            <DropdownMenu>
                <DropdownMenuItem closeOnClick>Click me</DropdownMenuItem>
                <DropdownMenuItem>won't close on click</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Check it out</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Log out</DropdownMenuItem>
            </DropdownMenu>
        </DropdownButton>
    )).add('Icon button no caret', () => (
        <DropdownButton title={<IoIosMore size={15} color='#888' />} center noCaret>
            <DropdownMenu>
                <DropdownMenuItem closeOnClick>Click me</DropdownMenuItem>
                <DropdownMenuItem>won't close on click</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Check it out</DropdownMenuItem>
                <DropdownMenuItem closeOnClick>Log out</DropdownMenuItem>
            </DropdownMenu>
        </DropdownButton>
    ))
