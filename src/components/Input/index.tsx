/* eslint-disable consistent-return */
import React from 'react';

import { FaUserCircle, FaLock } from 'react-icons/fa';

import './styles.scss';

type TIcons = 'user' | 'lock' ;

interface IInputProps {
  icon?: TIcons;
  placeholder?: string;
  value: string;
  maxLength?: number;
  marginTop?: number;
  marginRight?: number;
  type: string;
  onChange: (value: string) => void;
}

const getIcon = (icon: TIcons) => {
    switch (icon) {
        case 'user':
            return <FaUserCircle />;

        case 'lock':
            return <FaLock />;
    }
};

export const Input = ({
    marginTop,
    icon,
    placeholder,
    marginRight,
    value,
    onChange,
    maxLength,
    type,
}: IInputProps) => (

    <div
        style={{ marginTop, marginRight }}
        className="containerInput"
    >
        {icon && getIcon(icon)}
        <input
            type={type}
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);
