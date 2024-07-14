import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    window.__be = window.__be || {};
    window.__be.id = "6691b984cec7f300077213e3";
    (function () {
      var be = document.createElement('script');
      be.type = 'text/javascript';
      be.async = true;
      be.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(be, s);
    })();
  }, []);

  return (
    <noscript>
      You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
    </noscript>
  );
};

export default ChatBot;
