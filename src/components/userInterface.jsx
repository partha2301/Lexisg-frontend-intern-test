import React, { useRef, useState } from 'react';
import './userInterface.css';
import Conversation from './Conversation';

const UserInterface = () => {
  const textareaRef = useRef(null);
  const [inputText, setInputText] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [submittedReply, setSubmittedReply] = useState('');
  const [showConversation, setShowConversation] = useState(false);

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      setSubmittedQuery(inputText);
      const response = {
        answer: "  Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident.  In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
          }
        ]
      };
      const citationHTML = `
      <br/>Citation:<br/>
      &ldquo; ${response.citations[0].text} &rdquo;<br/>
      <a href="/assets/file.pdf#page=2#:~:text=Having" target="_blank" rel="noopener noreferrer" style="color: lightblue; text-decoration: underline;">(View Dani_Devi_v_Pritam_Singh.pdf)</a>`;
      setSubmittedReply(response.answer + citationHTML);
      setShowConversation(true);
      setInputText('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div>
      <div className="wrapper">
        {!showConversation && (
          <div className="greeting">
            <p>
              Legal Clarity Starts Here — What Can We Help You With?
            </p>
          </div>
        )}

        {showConversation && (
          <Conversation
            queryText={submittedQuery}
            replyText={submittedReply}
          />
        )}

        <div className="input-output-wrapper">
          <div className="text-input">
            <textarea
              ref={textareaRef}
              className="input-area"
              placeholder="Type your prompt......"
              onInput={handleInput}
              value={inputText}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              rows={1}
              autoFocus
            />
          </div>
          <button className='submit-button' onClick={handleSubmit}>
            &uarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInterface;