import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {expect, jest, test} from '@jest/globals';
import Navbar from '../Navbar/Navbar';

describe('HomeComponent', () => {

    it('should have a button', () => {

        render(
            <Navbar/>
        )

        const btnCart = screen.getByText('0')

        expect(btnCart).toBeUndefined()
    })
})