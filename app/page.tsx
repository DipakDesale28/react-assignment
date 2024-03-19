"use client"; 

import React, { useState, useEffect } from 'react';
import { Card, Text, Grid, Button } from '@mantine/core';
import Avatar from './Avatar';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const UserCard = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();
        setUsers(data.slice(0, 12));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = (id: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };
  
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px'}}>
        {users.map(user => (
          <Card key={user.id} style={{border: 'black solid 1px'}}>
            <Avatar username={user.name} /> 
            <Text style={{ fontWeight: 500 }}>{user.name}</Text>
            <Text>{user.username}</Text>
            <Text>{user.email}</Text>
            <div className="gap-2">
            <Button>Follow</Button>
            <Button onClick={() => deleteUser(user.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              Delete
            </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
