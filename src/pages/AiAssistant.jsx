import { useState, useEffect, useRef } from "react";
import "./AiAssistant.css";
import { sendMessage } from "../api/aiApi";

function AiAssistant() {

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello 👋 I'm CartFlow AI. How can I help you today?"
        }
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages, loading]);

    const handleSend = async () => {

        if (input.trim() === "" || loading) return;

        const userText = input.trim();

        // Add user message
        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: userText
            }
        ]);

        setInput("");
        setLoading(true);

        try {

            const reply = await sendMessage(userText);

            // Add AI response
            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: reply
                }
            ]);

        } catch (error) {

            console.error(error);

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "❌ Something went wrong while contacting the AI."
                }
            ]);

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="ai-page">

            <div className="chat-container">

                {/* Header */}

                <div className="chat-header">
                    <h2>🤖 CartFlow AI Assistant</h2>
                    <p>
                        Ask about products, orders and shopping recommendations.
                    </p>
                </div>

                {/* Messages */}

                <div className="chat-body">

                    {messages.map((msg, index) => (

                        <div
                            key={index}
                            className={
                                msg.sender === "user"
                                    ? "message user-message"
                                    : "message ai-message"
                            }
                        >
                            {msg.text}
                        </div>

                    ))}

                    {loading && (
                        <div className="message ai-message typing">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    )}

                    {/* Auto Scroll Target */}
                    <div ref={chatEndRef}></div>

                </div>

                {/* Footer */}

                <div className="chat-footer">

                    <input
                        type="text"
                        placeholder="Ask me anything..."
                        value={input}
                        disabled={loading}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSend();
                            }
                        }}
                    />

                    <button
                        onClick={handleSend}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default AiAssistant;