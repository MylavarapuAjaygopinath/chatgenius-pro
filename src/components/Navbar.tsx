import { Bot, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onClear: () => void;
  messageCount: number;
}

export function Navbar({ onClear, messageCount }: NavbarProps) {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg text-foreground">AI Chat</h1>
            <p className="text-xs text-muted-foreground">
              {messageCount > 0 ? `${messageCount} messages` : "Start chatting"}
            </p>
          </div>
        </div>
        
        {messageCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="text-muted-foreground hover:text-destructive transition-colors"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Chat
          </Button>
        )}
      </div>
    </header>
  );
}
