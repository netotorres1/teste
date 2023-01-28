import styled from "styled-components";
export const Container = styled.div`
    width: 100vw;
    height: 1030px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
`

export const ContainerProducts = styled.div`
    width: 100vw;
    height: 1150px;
    display: flex;
    justify-content: center;
    background-color: #F9F9F9;
`
export const Products = styled.div`
    width: 60%;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 50px;
`
export const Img = styled.img`
    width: 100%;
    height: 190px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const ContainerPrice = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const Name = styled.h2`
    width: 50%;
    font-size: 17px;
    font-weight: 500;
`
export const Price = styled.h3`
    background-color:#373737;
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
`
export const Desc = styled.p`
    color: grey;
    margin-bottom: 10px;
    width: 90%;
    font-size: 15px;
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 24%;
    height: 420px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 20px;
`
export const BtnBuy = styled.button`
    width: 100%;
    letter-spacing: 1px;
    padding-top: 7px;
    padding-bottom: 7px;
    border: none;
    background-color: #0F52BA;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Icon = styled.div`
    margin-right: 10px;
`