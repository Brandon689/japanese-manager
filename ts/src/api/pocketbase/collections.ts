import { pb } from 'api/pocketbase/pocketbase.ts';
import { CryptocurrenciesRecord, CryptocurrenciesResponse, RecordIdString, UsersResponse } from 'typings/pocketbase-types.ts';

export const getUser = async (email: string, password: string): Promise<UsersResponse> => {
    try {
        //const user = await pb.collection('users').getFirstListItem(`email="${email}"`);
        const user = await pb.collection('users').getFirstListItem(`email='${email}' && password='${password}'`);
        return user;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
};

export const login = async (email: string, password: string): Promise<boolean> => {
    try {
        const authData = await pb.collection('users').authWithPassword("admin@example.com", "password");
        console.log("Login successful");
        // Assuming pb.authStore.isValid indicates whether the authentication is valid
        return pb.authStore.isValid;
    } catch (error) {
        console.error("Login failed:", error.message);
        // Return false to indicate login failure
        return false;
    }
};


export const getFSTree = async (): Promise<TreeNode[]> => {
    try {
        return await pb.send("/filesystem", {});
    } catch (error) {
        throw new Error('Failed to fetch user list');
    }
};


export const getUsers = async (): Promise<UsersResponse[]> => {
    try {
        return await pb.collection('users').getFullList();
    } catch (error) {
        throw new Error('Failed to fetch user list');
    }
};

// export const getCryptoList = async (): Promise<CryptocurrenciesResponse[]> => {
//     try {
//         return await pb.collection('cryptocurrencies').getFullList();
//     } catch (error) {
//         throw new Error('Failed to fetch Crypto list');
//     }
// };

// export const createCrypto = async (data: CryptocurrenciesRecord) => {
//     try {
//         return await pb.collection('cryptocurrencies').create(data);
//     } catch (error) {
//         throw new Error('Failed to create cryptocurrencies');
//     }
// };

// export const updateCrypto = async (id: RecordIdString, data: CryptocurrenciesRecord) => {
//     try {
//         return await pb.collection('cryptocurrencies').update(id, data);
//     } catch (error) {
//         throw new Error('Failed to update cryptocurrencies');
//     }
// };

// export const deleteCrypto = async (id: RecordIdString) => {
//     try {
//         await pb.collection('cryptocurrencies').delete(id);
//     } catch (error) {
//         throw new Error('Failed to delete cryptocurrencies');
//     }
// };

