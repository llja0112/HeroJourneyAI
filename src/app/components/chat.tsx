'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-lg pt-10 pb-24 mx-auto stretch">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="chat-header">Sensei</div>
        <div className="chat-bubble">Hi Anthony! My name is Sensei. I am here to help you with your opioid addiction. Can you please tell me more about yourself please.</div>
      </div>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? (
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                </div>
              </div>
              <div className="chat-header">Anthony</div>
              <div className="chat-bubble">{m.content}</div>
            </div>
          ) : (
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="chat-header">Sensei</div>
              <div className="chat-bubble">{m.content}</div>
            </div>
          )}

        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-lg p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Ask a question..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
