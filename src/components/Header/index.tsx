import React, { useState } from 'react';
import { ButtonShopping } from '../ButtonShopping';
import { Logo } from '../Logo';
import { ModalOrder } from '../ModalOrder';

import './styles.scss';

export const Header: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div className="containerHeader">
                <Logo
                    dark
                    size="small"
                />

                <ButtonShopping onClick={() => setModalIsOpen(true)} />
            </div>

            <ModalOrder
                modalIsOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            />
        </>
    ); };
