import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, CloseButton
  } from "@chakra-ui/react";




const Message = (props)=>{
    if(props.message.msgError) {
        return(
            <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Oops!</AlertTitle>
                <AlertDescription>{props.message.msgBody}</AlertDescription>
                <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
        );
    } else {
        return(
            <Alert status="success" variant="subtle">
                <AlertIcon />
                {props.message.msgBody}
            </Alert>
        );
    }


}

export default Message;