
import type React from 'react';
import { useCards } from '../hooks/useCards';

const ModalExtention = ({ children, title }: { children: React.ReactNode, title: string }) => {
    const { isOpenCreate, toggleOpenCreate } = useCards();
    if (!isOpenCreate) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content dark:bg-Neutral_200">
                <div className="modal-header">
                    <h2 className="font-semibold">{title}</h2>
                    <button className="modal-close-btn" onClick={toggleOpenCreate}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalExtention;