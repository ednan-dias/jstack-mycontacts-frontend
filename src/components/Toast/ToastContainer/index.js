import { useCallback, useEffect, useState } from 'react';
import { toastEventManager } from '../../../utils/toast';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);
  const [pendingRemovalMessagesIds, setPendingRemovalMessagesIds] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  console.log({ messages, pendingRemovalMessagesIds });

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemovalMessagesIds(
      (prevState) => [...prevState, id],
    );
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={pendingRemovalMessagesIds.includes(message.id)}
        />
      ))}
    </Container>
  );
}
