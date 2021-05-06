import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IChatMessage } from 'react-native-gifted-chat'

export default function ChatScreen(props) {
  console.log('params', props);
  console.log('params', props.route.params.row);
  
  const [messages, setMessages] = useState<IChatMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 4,
        text: 'dddfdfd!',
        createdAt: new Date().getTime(),
        user: {
          _id: 1
        }
      },
      // example of chat message
      {
        _id: 2,
        text: 'Henlo!',
        createdAt: new Date().getTime(),
        user: {
          _id: 2,
          name: 'Test User'
        }
      },
      {
        _id: 3,
        text: 'dd!',
        createdAt: new Date().getTime(),
        user: {
          _id: 1
        }
      }
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}