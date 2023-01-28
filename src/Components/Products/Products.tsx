import {useEffect, useState} from 'react'
import {Container, ContainerProducts, Products, Img, ContainerPrice, Name, Price, Desc, Product, BtnBuy, Icon } from './style'
import axios from 'axios'
import {FaShoppingBag} from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
import Skeleton from '../Skeleton'

const Home = () => {

  const [quantity] = useState(1)
  const [item, setItem] = useState([])
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const url = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'

    axios.get(url).then((response) => {
      const data = response.data.products
      setItem(data)
      if(data){
        setTimeout(() => {
          setIsLoading(false)
        }, 50)
      }
    })
  },[]);

  if(isLoading){
    return(
      <Container>
        <ContainerProducts>
        <Products>
             {item.map((product:any) => (
              <Skeleton key={product.id} width={230} height={420} borderRadius={10} marginBottom={20} />
             ))}
          </Products>
        </ContainerProducts>
      </Container>
  

    )
  }

  return (
    <Container>
      <ContainerProducts>
        <Products>
          {item.map((value:any) => (
            <Product key={value.id}>
              <Img alt='Product Image' src={value.photo} />
              <ContainerPrice>
                <Name>{value.name}</Name>
                <Price>R${value.price}</Price>
              </ContainerPrice>
              <Desc>{value.description}</Desc>
              <BtnBuy onClick={() => dispatch(addToCart({
                    id: value.id,
                    name: value.name,
                    image: value.photo,
                    price: value.price,
                    quantity
                  }))}><Icon><FaShoppingBag size={16}/></Icon>Comprar</BtnBuy>
            </Product>
          ))}
        </Products>
      </ContainerProducts>
    </Container>
  )
}

export default Home