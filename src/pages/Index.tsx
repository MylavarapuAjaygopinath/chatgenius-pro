import { Navbar } from "@/components/Navbar";
import { ChatWindow } from "@/components/ChatWindow";
import { ChatInput } from "@/components/ChatInput";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const { messages, isLoading, streamingContent, sendMessage, clearChat } = useChat();

  return (
    <div className="flex flex-col h-screen bg-background">
      <Navbar onClear={clearChat} messageCount={messages.length} />
      
      <main className="flex-1 flex flex-col overflow-hidden max-w-4xl w-full mx-auto">
        <ChatWindow 
          messages={messages} 
          isLoading={isLoading} 
          streamingContent={streamingContent} 
        />
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default Index;
