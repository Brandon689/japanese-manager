import { pb } from 'api/pocketbase';

export const authenticate = async () => {
    try {
      await pb.admins.authWithPassword('bayus@protonmail.com', '_#b:=6&}i%iJrZ&');
    } catch (error) {
      throw new Error('Authentication failed');
    }
};
