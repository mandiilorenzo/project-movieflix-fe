import { StylesConfig } from 'react-select';
import type { Option } from '../createMovie/index';


export const getCustomSelectStyles = (isValid: boolean): StylesConfig<Option, false> => ({
    control: (base, state) => ({
        ...base,
        backgroundColor: '#1e1e1e',
        cursor: 'pointer',
        border: `1px solid ${isValid ? '#00ff88' : '#a020f0'}`,
        color: '#fff',
        borderRadius: '6px',
        margin: '16px 0',
        minHeight: '40px',
        boxShadow: state.isFocused
            ? '0 0 10px rgba(255, 0, 242, 0.4)'
            : 'none',
        transform: state.isFocused ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            boxShadow: '0 0 10px rgba(161, 0, 255, 0.4)',
            transform: 'translateY(-2px)',
        },
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: '#1e1e1e',
        border: '1px solid #a020f0',
        zIndex: 9999,
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? '#ff00f2'
            : state.isFocused
                ? '#333'
                : '#1e1e1e',
        color: '#fff',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        textTransform: 'none'
    }),
    singleValue: (base) => ({
        ...base,
        color: '#fff',
        textTransform: 'none'
    }),
    placeholder: (base) => ({
        ...base,
        color: '#777',
        fontSize: '14px',
        fontWeight: '400',
        textTransform: 'none'
    }),
    input: (base) => ({
        ...base,
        color: '#fff',
        textTransform: 'none'
    }),
});
