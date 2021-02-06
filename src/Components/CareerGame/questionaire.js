import React from 'react'
import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react"
import {MdArrowForward} from 'react-icons/md'


function Questionaire({handleAnswer,showAnswers,handleNextQuestion, data:{question, correct_answer, answers}}) {
    return (
        <>
             <Box className='max-width' borderWidth="1px" borderRadius="lg" overflow="hidden" p='20px' mt='5vh'>
                <h1 dangerouslySetInnerHTML={{__html:question}} />
            </Box>
            <div className="button-overall">
                {answers.map((answer,idx) => {
                    const specialClassName = showAnswers ? (
                        answer === correct_answer ? "green-button": "red-button"
                    ) : "";
                    return(
                        <button className={`normal-button ${specialClassName}`} 
                        onClick = {() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{__html:answer}} />

                    )
                })}
            </div>
            {showAnswers && (
                <Button onClick = {handleNextQuestion} colorScheme='blue' rightIcon={<MdArrowForward />} variant="outline" color=' #ff3579' borderColor=' #ff3579'className="next-question" mt='200px' ml='50px'>Next Question</Button>
            )}
        </>
    )
}

export default Questionaire