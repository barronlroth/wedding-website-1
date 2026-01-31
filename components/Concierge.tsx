import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, MessageCircle } from 'lucide-react';
import { askConcierge } from '../services/geminiService';
import { ChatMessage, ConciergeState } from '../types';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Barron & Nina's Virtual Concierge. Ask me about the schedule, dress code, or travel details!" }
  ]);
  const [state, setState] = useState<ConciergeState>(ConciergeState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || state === ConciergeState.LOADING) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setState(ConciergeState.LOADING);

    try {
      const responseText = await askConcierge(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setState(ConciergeState.SUCCESS);
    } catch (error: any) {
      setMessages(prev => [...prev, { role: 'model', text: error.message || "Something went wrong." }]);
      setState(ConciergeState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`pointer-events-auto bg-white rounded-2xl shadow-2xl border border-stone-200 w-80 sm:w-96 mb-4 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="bg-stone-800 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-stone-50">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h3 className="font-serif text-lg font-medium">Wedding Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-80 overflow-y-auto p-4 bg-stone-50 flex flex-col gap-3">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`max-w-[85%] p-3 text-sm rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-sage-600 text-white self-end rounded-br-none' 
                  : 'bg-white border border-stone-200 text-stone-700 self-start rounded-bl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {state === ConciergeState.LOADING && (
            <div className="self-start bg-white border border-stone-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-white border-t border-stone-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about dress code, venue..."
            className="flex-1 bg-stone-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-sage-500 outline-none placeholder:text-stone-400"
          />
          <button 
            onClick={handleSend}
            disabled={state === ConciergeState.LOADING || !input.trim()}
            className="bg-stone-800 text-white p-2 rounded-xl hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto shadow-xl transition-all duration-300 flex items-center justify-center rounded-full w-14 h-14 ${
          isOpen ? 'bg-stone-200 text-stone-600 rotate-90' : 'bg-stone-800 text-white hover:bg-sage-600'
        }`}
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};

export default Concierge;