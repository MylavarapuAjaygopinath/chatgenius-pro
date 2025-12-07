import { useEffect, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { Loader2, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  streamingContent: string;
}

export function ChatWindow({ messages, isLoading, streamingContent }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  if (messages.length === 0 && !isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="chat-glow w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 animate-float">
          <Sparkles className="w-10 h-10 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-2">
          Welcome to AI Chat
        </h2>
        <p className="text-muted-foreground text-center max-w-md">
          Start a conversation and your messages will be saved automatically.
          Ask me anything!
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          role={message.role}
          content={message.content}
          timestamp={message.created_at}
        />
      ))}
      
      {isLoading && streamingContent && (
        <MessageBubble
          role="assistant"
          content={streamingContent}
          timestamp={new Date().toISOString()}
          isStreaming
        />
      )}
      
      {isLoading && !streamingContent && (
        <div className="flex items-center gap-3 p-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Loader2 className="w-4 h-4 text-primary-foreground animate-spin" />
          </div>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
}
