import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Chatbot = () => {
  const initialMessages = [
    { sender: "bot", text: "Hi there!" },
    { sender: "bot", text: "I'm eAsha AI. What's your name?" },
  ];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState("awaitingName");
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  const openBot = () => setOpen(true);

  const closeBot = () => {
    setOpen(false);
    setMessages(initialMessages);
    setInput("");
    setStage("awaitingName");
    setLoading(false);
  };

  const fetchAIResponse = async (userInput) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_OPENAI_API_KEY`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You're a helpful medical assistant." },
          { role: "user", content: userInput },
        ],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  };

  const handleInputChange = (e) => {
    let val = e.target.value;
    if (stage === "awaitingName") {
      val = val.replace(/[^a-zA-Z\s]/g, "");
    } else if (stage === "awaitingNumber") {
      val = val.replace(/\D/g, "").slice(0, 10);
    }
    setInput(val);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    if (stage === "awaitingName" && !/^[a-zA-Z\s]+$/.test(input.trim())) {
      alert("Please enter only alphabets for your name.");
      return;
    } else if (stage === "awaitingNumber" && !/^\d{10}$/.test(input.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const userMessage = { sender: "user", text: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    if (stage === "awaitingName") {
      setMessages([
        ...updatedMessages,
        { sender: "bot", text: `Nice to meet you, ${input.trim()}! Can I have your phone number?` },
      ]);
      setStage("awaitingNumber");
    } else if (stage === "awaitingNumber") {
      setMessages([
        ...updatedMessages,
        { sender: "bot", text: `Thanks! What health-related question can I help you with today?` },
      ]);
      setStage("awaitingQuery");
    } else if (stage === "awaitingQuery") {
      setLoading(true);
      const aiReply = await fetchAIResponse(input.trim());
      setLoading(false);
      setMessages([
        ...updatedMessages,
        { sender: "bot", text: aiReply },
        {
          sender: "bot",
          text: "For further assistance, please contact eAsha 24/7 Healthcare Pvt Ltd at 6301680400.",
        },
      ]);
      setStage("done");
    }
  };

  const styles = {
    container: {
      position: "fixed",
      bottom: "60px",
      right: "20px",
      marginRight: "40px",
      zIndex: 9999,
    },
    toggleBtn: {
      backgroundColor: "#cf7e06ff",
      color: "white",
      border: "none",
      padding: "20px",
      borderRadius: "50%",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    window: {
      width: "300px",
      height: "420px",
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      background: "#00A99D",
      color: "white",
      padding: "11px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    body: {
      flex: 1,
      padding: "10px",
      overflowY: "auto",
      fontSize: "14px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    footer: {
      display: "flex",
      borderTop: "1px solid #ddd",
    },
    input: {
      flex: 1,
      border: "none",
      padding: "10px",
      outline: "none",
      backgroundColor: "#f8f9fa",
    },
    sendBtn: {
      background: "#00A99D",
      color: "white",
      border: "none",
      padding: "0 15px",
      cursor: "pointer",
    },
    messageBot: {
      backgroundColor: "#f1f1f1",
      padding: "8px 12px",
      borderRadius: "12px",
      maxWidth: "80%",
      alignSelf: "flex-start",
    },
    messageUser: {
      backgroundColor: "#198754",
      color: "white",
      padding: "8px 12px",
      borderRadius: "12px",
      maxWidth: "80%",
      alignSelf: "flex-end",
    },
  };

  return (
    <div style={styles.container}>
      {open ? (
        <div style={styles.window}>
          <div style={styles.header}>
            <h6 className="mb-0">eAsha AI</h6>
            <button
              onClick={closeBot}
              style={{ background: "none", border: "none", color: "white" }}
            >
              <IoMdClose size={20} />
            </button>
          </div>
          <div style={styles.body}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={msg.sender === "bot" ? styles.messageBot : styles.messageUser}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div style={styles.messageBot}>Typing...</div>}
          </div>
          <div style={styles.footer}>
            <input
              type="text"
              placeholder={
                stage === "awaitingName"
                  ? "Enter your name..."
                  : stage === "awaitingNumber"
                  ? "Enter your 10-digit phone number..."
                  : "Type your query..."
              }
              value={input}
              onChange={handleInputChange}
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading || stage === "done"}
            />
            <button
              style={styles.sendBtn}
              onClick={handleSend}
              disabled={loading || stage === "done"}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          style={styles.toggleBtn}
          onClick={openBot}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <FaRobot size={hover ? 28 : 24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
