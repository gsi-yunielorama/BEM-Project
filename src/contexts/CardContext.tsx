import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { CardContext } from './CardContextDef';
import type { CardFilterType, CardType } from '../types/CardTypes';
import data from '../data/data.json'

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider = ({ children }: CardProviderProps) => {
  const [filter, setFilter] = useState<CardFilterType>('all');
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(() => {
    setCards(data);
  }, []);

  const deleteCard = (id: string) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const filteredCards = cards.filter(card => {
    if (filter === 'active') return card.isActive;
    if (filter === 'inactive') return !card.isActive;
    return true;
  });

  const setFilterMode = (mode: CardFilterType) => {
    setFilter(mode);
  };

  const toggleCardStatus = (id: string) => {
    setCards(cards.map(card => card.id === id ? { ...card, isActive: !card.isActive } : card));
  }

  return (
    <CardContext.Provider value={{ cards, filteredCards, deleteCard, filter, setFilterMode, toggleCardStatus }}>
      {children}
    </CardContext.Provider>
  );
};