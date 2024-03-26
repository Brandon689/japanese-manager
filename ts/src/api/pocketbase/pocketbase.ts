import PocketBase from 'pocketbase';
import { TypedPocketBase } from "typings/pocketbase-types.ts"

export const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;
