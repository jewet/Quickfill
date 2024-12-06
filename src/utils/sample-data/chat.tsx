interface ChatProps{
    id: string;
    sender: string;
    message: string;
    timestamp: string;
}

export const chat_data: ChatProps[] = [
    {
      id: '1',
      sender: 'receiver',
      message: 'Hi there! How can I help you?',
      timestamp: '10:00 AM',
    },
    {
      id: '2',
      sender: 'sender',
      message: 'I have an issue with my recent order.',
      timestamp: '10:02 AM',
    },
    {
      id: '3',
      sender: 'receiver',
      message: 'Sure, could you share the order ID?',
      timestamp: '10:03 AM',
    },
    {
      id: '4',
      sender: 'sender',
      message: 'The order ID is 12345.',
      timestamp: '10:05 AM',
    },
    {
      id: '5',
      sender: 'receiver',
      message: 'Thank you! I’ll check on this for you.',
      timestamp: '10:06 AM',
    },
  ];
  