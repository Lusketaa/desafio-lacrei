import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import Header from './index';

test('should render correctly', () => {
    const { getByTestId, getByText } = render(<Header />);
    
    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const hamburguerMenuElement = getByTestId('hamburguerMenu');
    expect(hamburguerMenuElement).toBeInTheDocument();

    const navElement = getByTestId('nav');
    expect(navElement).toBeInTheDocument();

    expect(getByText('Quem somos')).toBeInTheDocument();
    expect(getByText('Ajuda')).toBeInTheDocument();
})