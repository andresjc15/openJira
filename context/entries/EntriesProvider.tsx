import { FC, PropsWithChildren, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Minim proident reprehenderit quis reprehenderit deserunt eiusmod adipisicing elit do ipsum id do tempor esse.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Duis nostrud velit qui exercitation proident veniam occaecat excepteur officia sunt sint.',
            status: 'pending',
            createdAt: Date.now() - 10000
        },
        {
            _id: uuidv4(),
            description: 'Adipisicing excepteur id id do anim proident proident culpa.',
            status: 'finished',
            createdAt: Date.now() - 150000
        },
        {
            _id: uuidv4(),
            description: 'Et do commodo nulla reprehenderit ullamco.',
            status: 'in-progress',
            createdAt: Date.now() - 300000
        }
    ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );

  return (
    <EntriesContext.Provider value={{
        ...state,
    }}>
        { children }
    </EntriesContext.Provider>
  )
}