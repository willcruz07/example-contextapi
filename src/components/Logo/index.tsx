import React from 'react';

import { FaWeebly, FaShopify } from 'react-icons/fa';

import './styles.scss';

interface ILogoProps {
    dark?: boolean;
    size: 'small' | 'large';
}

export const Logo: React.FC<ILogoProps> = ({ dark, size }) => {
    const getColor = () => (dark ? '#fff' : '#2e526e');
    const getSize = (): number => {
        if (size === 'large') {
            return 80;
        }

        return 32;
    };
    return (
        <div className="containerLogo">
            <div>
                <FaWeebly
                    color={getColor()}
                    size={getSize()}
                />
                <FaShopify
                    color={getColor()}
                    size={getSize()}
                />
            </div>

            { size === 'large' && <span>Will Shops</span>}
        </div>
    ); };
