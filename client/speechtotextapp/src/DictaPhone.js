/** @format */

import React,{useState} from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
const Dictaphone = () => {
    const [hindiText, setHindiText] = useState('');
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const translateText = () => {
    SpeechRecognition.stopListening();
   
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${transcript}`)
      .then(res => res.json())
      .then(data => setHindiText(data[0][0][0]))
      .catch(err => console.error(err));
  };
  return (
    <div>
      <Container maxWidth='sm'>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <div className='button_container'>
            <Stack spacing={3} direction='row'>
              <p>Microphone: {listening ? "on" : "off"}</p>
              <button
                className='record_button'
                onClick={SpeechRecognition.startListening}
              >
                Start
              </button>
              <button
                className='stop_button'
                onClick={translateText}
              >
                Stop
              </button>
              <button onClick={resetTranscript}>Reset</button>
            </Stack>
          </div>
          <div style={{ paddingTop: 40 }}>
            <textarea
              rows={6}
              cols={60}
              placeholder='Speech to text'
             defaultValue={transcript}
            ></textarea>
          </div>
          <div style={{ paddingTop: 40 }}>
            {" "}
            <textarea
              rows={6}
              cols={60}
              placeholder='Translation in Hindi language'
             defaultValue={hindiText}
            />
          </div>

          <div className='accent'>
            <input type='text' placeholder='accent score' />
          </div>
       
         
        </Box>
      </Container>
    </div>
  );
};
export default Dictaphone;
