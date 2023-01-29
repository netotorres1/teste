import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import '@babel/plugin-syntax-jsx'
import {expect, jest, test} from '@jest/globals';
import Products  from './../Products/Products';

describe('HomeComponent', () => {
    it('should add to cart', () => {

        render(
            <Products/>
        )

        const btnBuy = screen.getByText('Comprar')

        expect(btnBuy).toBeCalledTimes(0)
    })

})