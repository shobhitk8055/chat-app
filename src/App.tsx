import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import ChatBoard from "./containers/ChatBoard/ChatBoard";
import { useChatStore } from "./store/chat";

function App() {
  const { setAllConversations } = useChatStore();

  useEffect(() => {
    
  }, []);

  return <ChatBoard />;
}

export default App;
