import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {expect, jest, test} from '@jest/globals';
import Footer from '../Footer/Footer';

describe('HomeComponent', () => {

    it('should have the content', () => {

        render(
            <Footer/>
        )

        const footerContent = screen.getByText('MKS sistemas © Todos os direitos reservados')

        expect(footerContent).toBe(true)
    })
})