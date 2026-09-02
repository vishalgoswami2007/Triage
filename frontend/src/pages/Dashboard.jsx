import Sidebar from "../components/dashboard/Sidebar";
import ChatHeader from "../components/dashboard/ChatHeader";
import ChatArea from "../components/dashboard/ChatArea";
import ChatInput from "../components/dashboard/ChatInput";

function Dashboard() {
  return (
    <main className="flex h-screen overflow-hidden bg-[#0b0f14] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <section className="flex min-w-0 flex-1 flex-col">

        {/* Top Header */}
        <ChatHeader />

        {/* Chat Content */}
        <ChatArea />

        {/* Message Input */}
        <ChatInput />

      </section>

    </main>
  );
}

export default Dashboard;