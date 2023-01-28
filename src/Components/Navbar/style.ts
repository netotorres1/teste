import styled from "styled-components";

export const ContainerNavbar = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    color: white;
    
` 
export const Logo = styled.h1`
    font-size: 40px;
    margin-right: 15px;
`
export const Logosub = styled.span`
    font-size: 22px;
    letter-spacing: 1px;
    margin-bottom: 7px;
    font-weight: 100;
`
export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`
export const BtnCart = styled.button`
    width: 80px;
    padding: 10px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`

export const Nav = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    background-color: #0F52BA;
`
export const Qtd = styled.span`
    font-weight: 700;
    font-size: 17px;
    margin-right: 10px;
`
export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
`
export const Cart = styled.div`
    position: absolute;
    width: 500px;
    height: 1150px;
    right: 0px;
    background-color: #0F52BA;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    box-shadow:-7px 3px 21px -7px rgba(0,0,0,0.55);

    &.open{
        display: flex;
    }

`
export const ContainerCart = styled.div`
    height: 95%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const ContainerTitle = styled.div`
    font-size: 25px;
    width: 100%;
    color: #fff;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const TitleCart = styled.h2`
    width: 55%;
    font-size: 35px;
    line-height: 35px;
`
export const ContainerItems = styled.div``
export const ContainerTotal = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    color: #fff;
    width: 80%;
`

export const TotalPrice = styled.h2`
    font-size: 30px;
`
export const TotalPriceValue = styled.h2`
    font-size: 30px;
`
export const FinishBuy = styled.button`
    width: 100%;
    height: 80px;
    background-color: #000;
    color: white;
    font-size: 30px;
    font-weight: 700;
    position: relative;
    top: 30px;
    cursor: pointer;
`

export const ContainerProductCart = styled.div`
    background-color: #fff;
    margin-bottom: 30px;
    height: 90px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 35px;
    position: relative;
`
export const ImgProductCart = styled.img`
    height: 90%;
    width: 20%;
`
export const TitleProductCart = styled.h2`
    font-size: 16px;
    width: 20%;
    font-weight: 300;
`
export const PriceProductCart = styled.h3`
    font-weight: bold;
    font-size: 17px;
`

export const ContainerCartTop = styled.div`
    width: 80%;
`
export const ContainerCartBottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const BtnCartClose = styled.button`
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-color: black;
    cursor: pointer;
`
export const Quantity = styled.span`
    width: 50px;
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 10px;
` 

export const BtnDown = styled.button`
    padding: 5px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border: none;
    background-color: #fff;
    cursor: pointer;
`
export const BtnUp = styled.button`
    padding: 5px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
    background-color: #fff;
    cursor: pointer;
`

export const BtnRemoveItem = styled.button`
    position: absolute;
    right: -7px;
    bottom: 78px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: black;
    cursor: pointer;

`
export const QtdItems = styled.span`
    font-size: 10px;
`
export const QtdContainer = styled.div`

`