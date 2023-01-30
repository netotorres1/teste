import { useState } from 'react'
import React from 'react';
import { Nav, ContainerNavbar, Logo, Logosub, ContainerLogo, BtnCart, Qtd, Container, Cart, ContainerCart, ContainerTitle, TitleCart, ContainerItems, 
  ContainerTotal, TotalPrice, TotalPriceValue, FinishBuy, ContainerProductCart, ImgProductCart, TitleProductCart, PriceProductCart, ContainerCartTop, 
  ContainerCartBottom, BtnCartClose , Quantity, BtnDown, BtnUp,BtnRemoveItem,QtdContainer,QtdItems} from './style'

import {FaCartPlus} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeItem, removeToCart } from '../../redux/cartReducer'
import { RootState } from './../../redux/store'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const products = useSelector((state: RootState) => state.cart.products)
    const dispatch = useDispatch()
    const [quantity] = useState(1)

    const handleOpen = () => {
      setOpenMenu(!openMenu);
    }
    
    const totalPrice = () => {
      let total = 0;
      products.forEach((item:any) => (total += item.quantity * item.price))
      return total.toFixed(2);
    }

  return (
    <Container>
      <Nav>
        <ContainerNavbar>
          <ContainerLogo>
            <Logo>MKS</Logo>
              <Logosub>Sistemas</Logosub>
            </ContainerLogo>
            <BtnCart onClick={handleOpen}>
            <FaCartPlus size={20}/> <Qtd>{products.length}</Qtd>
            </BtnCart>
        </ContainerNavbar>
      </Nav>
      <Cart  className={openMenu !== true ? '' : 'open'}>
          <ContainerCart>
            <ContainerCartTop>
              <ContainerTitle>
                <TitleCart>Carrinho de compras</TitleCart>
                <BtnCartClose onClick={handleOpen}>
                  {openMenu !== true ? <FaCartPlus size={20}/> : <MdClose size={30} color='#fff' />}
                </BtnCartClose>
              </ContainerTitle>
              <ContainerItems>
                {products.map((item:any) => (
                  <ContainerProductCart key={item.id}>
                    <ImgProductCart alt='Product Image' src={item.image} />
                    <TitleProductCart>{item.name}</TitleProductCart>
                    <QtdContainer>
                      <QtdItems>Qtd:</QtdItems>
                      <Quantity>
                        <BtnDown onClick={() => dispatch(removeToCart({
                      id: item.id,
                      name: item.name,
                      image: item.photo,
                      price: item.price,
                      quantity
                    }))}>-</BtnDown>
                    {item.quantity}
                      <BtnUp onClick={() => dispatch(addToCart({
                      id: item.id,
                      name: item.name,
                      image: item.photo,
                      price: item.price,
                      quantity
                    }))}>+</BtnUp>
                    </Quantity>
                    </QtdContainer>
                    <PriceProductCart>R${item.price}</PriceProductCart>
                    <BtnRemoveItem onClick={() => dispatch(removeItem(item.id))}>
                      <MdClose size={15} color='#fff' />
                    </BtnRemoveItem>
                  </ContainerProductCart>
                ))}
              </ContainerItems>
            </ContainerCartTop>
            <ContainerCartBottom>
              <ContainerTotal>
                <TotalPrice>Total:</TotalPrice>
                <TotalPriceValue>R${totalPrice()}</TotalPriceValue>
              </ContainerTotal>
              <FinishBuy>Finalizar Compra</FinishBuy>
              </ContainerCartBottom>
          </ContainerCart>
      </Cart>
    </Container>
  )
}

export default Navbar