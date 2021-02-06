import React from 'react';
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import {IoIosCode} from 'react-icons/io'

const TodoItem = props =>{
    return (
        <ListItem> <ListIcon as={IoIosCode} color="blue.500" size='40' /> {props.todo.name}</ListItem>
    )
}

export default TodoItem;