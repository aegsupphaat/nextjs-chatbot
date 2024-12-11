import React, { useEffect } from 'react';
import Script from 'next/script'

const DialogflowMessenger = () => {
  useEffect(() => {
    // Add Dialogflow Messenger script dynamically when the component mounts
    const script = document.createElement('script');
    // script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js';
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* <df-messenger
        chat-title="Docs Chatbot"
        agent-id="ce6df300-9631-48a5-b3b5-15c17d40a5a5"
        language-code="en"
      ></df-messenger> */}
      <df-messenger
        intent="WELCOME"
        chat-title="Docs-Portal"
        agent-id="245b53bb-3d42-41ef-aa1e-157d1e83ed30"
        language-code="en"
      ></df-messenger>
    </>
  );
};

export default DialogflowMessenger;
