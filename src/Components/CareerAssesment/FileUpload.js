import React, { Fragment, useState } from 'react';
import Message from './FileMessage';
import ProgressAlert from './FileProgress';
import axios from 'axios';
import {Button, Box, Input, Heading, Text} from '@chakra-ui/react';
import {MdArrowForward} from 'react-icons/md'

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <>
    <Box mt='10vh' className='max-width'>
                <Heading mb={4}>Career Assessment</Heading>
                <Text fontSize="xl">
                    Upload your CV and give our experts a moment to examine your strengths and we will contact you shortly.
                </Text>
                
            </Box>
    <Box className='max-width' borderWidth="1px" borderRadius="lg" overflow="hidden" p='20px' mt='5vh'>
    <Fragment>
      {message ? <Message msg={message} /> : null}
      
      <form onSubmit={onSubmit}>
      <Box>
        <Box mt='20px'>
        <input
            type='file'
            id='customFile'
            onChange={onChange}
          />
        </Box>
          
          
        <Box mt='20px'><ProgressAlert percentage={uploadPercentage}/></Box>

        

        <Button rightIcon={<MdArrowForward />} variant="outline" type='submit' mt='20px' color=' #ff3579' borderColor=' #ff3579'>
             Upload
        </Button>
        </Box>
      </form>
      
      {uploadedFile ? (
        <div >
          <div>
            <h3>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}

    </Fragment>
    </Box>
    </>
  );
};

export default FileUpload;