import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { CardContext } from './CardContextDef';
import type { CardFilterType, CardType } from '../types/CardTypes';

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider = ({ children }: CardProviderProps) => {
  const [filter, setFilter] = useState<CardFilterType>('all');
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(() => {
    const loadCards = async () => {
      try {
        const response = await fetch('../src/data/data.json');
        const cardsData = await response.json();
        setCards(cardsData);
      }
      catch (error) {
        console.error('Error al cargar o parsear el archivo:', error);
      }
    }
    loadCards()
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