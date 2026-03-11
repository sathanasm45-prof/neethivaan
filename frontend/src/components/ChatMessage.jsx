function ChatMessage({ role, text }) {
  return (
    <p>
      <b>{role}:</b> {text}
    </p>
  );
}

export default ChatMessage;