import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-card rounded-2xl shadow-float border border-border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Let's Chat!</p>
                <p className="text-xs text-primary-foreground/80">We typically reply in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-64 overflow-y-auto bg-muted/30">
            <div className="space-y-4">
              {/* Bot Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🤗</span>
                </div>
                <div className="bg-card rounded-2xl rounded-tl-none p-3 shadow-soft max-w-[80%]">
                  <p className="text-sm text-foreground">
                    Hi there! 👋 Welcome to Be A Better Parent. How can I help you today?
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 ml-11">
                <button className="text-xs bg-lavender/50 hover:bg-lavender text-foreground px-3 py-1.5 rounded-full transition-colors">
                  Learn about pricing
                </button>
                <button className="text-xs bg-mint/50 hover:bg-mint text-foreground px-3 py-1.5 rounded-full transition-colors">
                  How does it work?
                </button>
                <button className="text-xs bg-peach/50 hover:bg-peach text-foreground px-3 py-1.5 rounded-full transition-colors">
                  Talk to support
                </button>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="cta" size="icon" className="rounded-xl">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-cta flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-foreground rotate-0' : 'bg-cta animate-bounce-gentle'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-background" />
        ) : (
          <MessageCircle className="w-7 h-7 text-cta-foreground" />
        )}
      </button>

      {/* Pulse effect */}
      {!isOpen && (
        <div className="absolute inset-0 rounded-full bg-cta animate-ping opacity-30 pointer-events-none" />
      )}
    </div>
  );
};

export default FloatingChat;
