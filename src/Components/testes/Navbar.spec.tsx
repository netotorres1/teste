import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import {expect, jest, test} from '@jest/globals';
import Navbar from '../Navbar/Navbar';
import { Provider } from 'react-redux';
import {store} from './../../redux/store'

describe('HomeComponent', () => {

    it('should have a button', () => {

        render(
            <Provider store={store}>
                <Navbar/>
            </Provider>

        )

        const btnCart = screen.getByText('MKS')

        expect(btnCart).toBeTruthy()
    })
})