import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import ChatHeader from "../components/dashboard/ChatHeader";
import ChatArea from "../components/dashboard/ChatArea";
import ChatInput from "../components/dashboard/ChatInput";

function Dashboard() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ]);
  };

  return (
    <main className="flex h-screen overflow-hidden bg-[#0b0f14] text-white">

      <Sidebar />

      <section className="flex min-w-0 flex-1 flex-col">

        <ChatHeader />

        <ChatArea messages={messages} />

        <ChatInput onSendMessage={handleSendMessage} />

      </section>

    </main>
  );
}

export default Dashboard;