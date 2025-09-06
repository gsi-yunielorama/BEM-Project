import { createContext } from 'react';
import type { CardType, CardFilterType } from '../types/CardTypes';

interface CardContextType {
  filter: 'all' | 'active' | 'inactive';
  cards: CardType[];
  filteredCards: CardType[];
  deleteCard: (id: string) => void;
  setFilterMode: (mode: CardFilterType) => void;
  toggleCardStatus: (id:string) => void;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);
