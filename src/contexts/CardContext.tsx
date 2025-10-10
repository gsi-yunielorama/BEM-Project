import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { CardContext } from './CardContextDef';
import type { CardFilterType, CardType } from '../types/CardTypes';
import { getAllExtentionsRequest, deleteExtentionRequest, updateExtentionRequest, createExtentionRequest } from '../api/extentions'
import type { CreateExtention, UpdateExtention } from '../interfaces/extention.interface';

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider = ({ children }: CardProviderProps) => {
  const [filter, setFilter] = useState<CardFilterType>('all');
  const [cards, setCards] = useState<CardType[]>([])
  const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);

  useEffect(() => {
    getAllExtentionsRequest().then((response) => response.json()).then((extentions) => {
      setCards(extentions);
    });
  }, []);

  const createCard = async (extention: CreateExtention) => {
    if (extention.name && extention.description) {
      try {
        const res = await createExtentionRequest({ ...extention, logo: "src/assets/images/logo-devlens.svg" });
        const data = await res.json();
        if (res.status === 201) setCards([...cards, data])
      } catch (error) {
        console.log(error);
      }
    }
  }

  const deleteCard = async (id: string) => {
    if (!window.confirm("Are you sure you want delete this Extention?")) return
    const res = await deleteExtentionRequest(id);
    if (res.status === 204) setCards(cards.filter((card) => card._id !== id))
  };

  const filteredCards = cards.filter(card => {
    if (filter === 'active') return card.isActive;
    if (filter === 'inactive') return !card.isActive;
    return true;
  });

  const setFilterMode = (mode: CardFilterType) => {
    setFilter(mode);
  };

  const toggleOpenCreate = () => {
    setIsOpenCreate(!isOpenCreate);
  }

  const toggleCardStatus = async (id: string, extentionToUpdate: UpdateExtention) => {
    const res = await updateExtentionRequest(id, extentionToUpdate);
    const data = await res.json();
    if (data) setCards(cards.map((card) => card._id === id ? { ...card, ...data } : card))

  }

  return (
    <CardContext.Provider value={{ cards, filteredCards, isOpenCreate, toggleOpenCreate, createCard, deleteCard, filter, setFilterMode, toggleCardStatus }}>
      {children}
    </CardContext.Provider>
  );
};