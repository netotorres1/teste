import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {expect, jest, test} from '@jest/globals';
import Footer from '../Footer/Footer';
import { Provider } from 'react-redux';
import {store} from './../../redux/store'

describe('HomeComponent', () => {

    it('should have the content', () => {
        
        render(
            <Provider store={store}><Footer/></Provider>
        )

        const footerContent = screen.getByText('MKS sistemas © Todos os direitos reservados')

        expect(footerContent).toBeTruthy()
    })
})