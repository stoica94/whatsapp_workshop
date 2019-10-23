export const mockMessages = [
  {
    incoming: true,
    message: 'Hi Ovidiu',
  },
  {incoming: false, message: 'Sup bro'},
];

export const chats = [
  {
    id: '123',
    title: 'John',
    description: 'Hey there',
    avatar: 'http://www.codetic.net/demo/templates/Privado/img/avatar.png',
    messages: mockMessages,
  },
  {
    id: '124',
    title: 'Max',
    description: 'Hey there too',
    avatar: 'http://www.codetic.net/demo/templates/Privado/img/avatar.png',
    messages: mockMessages,
  },
];

export const getChats = () =>
  new Promise(resolve => setTimeout(() => resolve(chats), 1000));

export const getMessagesById = id =>
  new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000));
