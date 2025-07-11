import React, { useState, useEffect } from 'react';
import './Conversation.css';

const Conversation = ({ queryText, replyText }) => {
  const [displayedReply, setDisplayedReply] = useState('');

  useEffect(() => {
    if (!replyText) {
      setDisplayedReply('');
      return;
    }

    setDisplayedReply('');
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedReply((prev) => prev + replyText.charAt(i));
      i++;
      if (i === replyText.length) {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [replyText]);

  return (
    <div className="conversation-container">
      {queryText && (
        <div className="query">
          <p>{queryText}</p>
        </div>
      )}

      {replyText && (
        <div className="reply">
          {/* dangerouslySetInnerHTML used here */}
          <p dangerouslySetInnerHTML={{ __html: displayedReply }}></p>

        </div>
      )}
    </div>
  );
};

export default Conversation;