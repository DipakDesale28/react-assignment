import React from 'react';
import { Avatar } from '@mantine/core';

interface UserAvatarProps {
  username: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ username }) => {
  const color = "#00246B"

  const getInitials = (username: string): string => {
    const words = username.split(' ');
    const initials = words.map(word => word.charAt(0)).join('');
    return initials;
  };
  
  return (
    <Avatar size={132} radius="xl" style={{ backgroundColor: color, justifyContent: 'center' }}>
      <div style={{ fontSize: '64px', fontWeight: 'bold', opacity: 1 }}>
        {getInitials(username)}
      </div>
    </Avatar>
  );
};

export default UserAvatar;
