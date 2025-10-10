import { createContext } from 'react';
import type { CardType, CardFilterType } from '../types/CardTypes';
import type { CreateExtention, UpdateExtention } from '../interfaces/extention.interface';

interface CardContextType {
  filter: 'all' | 'active' | 'inactive';
  cards: CardType[];
  filteredCards: CardType[];
  isOpenCreate: boolean;
  toggleOpenCreate: () => void;
  createCard: (extention: CreateExtention) => Promise<void>;
  deleteCard: (id: string) => Promise<void>;
  setFilterMode: (mode: CardFilterType) => void;
  toggleCardStatus: (id: string, extentionToUpdate: UpdateExtention) => Promise<void>;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);
