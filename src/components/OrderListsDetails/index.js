/* eslint-disable no-unused-vars */
import {
  OrderListContainer,
  OrderListImage,
  OrderListSubContainer,
  OrderListName,
  OrderListPrice,
  OrderListSm,
  OrderListBg,
  OrderListSubContainerSm,
  CountButton,
  CountContainer,
  CountNumber,
} from './StyledComponents'
import ToggleChanges from '../../Context/ToggleChanges'

const OrderListsDetails = props => (
  <ToggleChanges.Consumer>
    {value => {
      const {eachOrderList, onUpdatedCount} = props
      const {id, imageUrl, name, count, cost} = eachOrderList

      return (
        <OrderListBg>
          <OrderListContainer>
            <OrderListSubContainer>
              <OrderListImage src={imageUrl} alt="orderImage" />
              <OrderListName>{name}</OrderListName>
            </OrderListSubContainer>
            <CountContainer>
              <CountButton type="button">-</CountButton>
              <CountNumber>{count + 1}</CountNumber>
              <CountButton type="button">+</CountButton>
            </CountContainer>
            <OrderListPrice>₹{cost * (count + 1)}.00</OrderListPrice>
          </OrderListContainer>

          <OrderListSubContainerSm>
            <OrderListImage src={imageUrl} alt="orderImage" />
            <OrderListSm>
              <OrderListName>{name}</OrderListName>
              <CountContainer>
                <CountButton type="button">-</CountButton>
                <CountNumber>{count + 1}</CountNumber>
                <CountButton type="button">+</CountButton>
              </CountContainer>
              <OrderListPrice>₹{cost * (count + 1)}.00</OrderListPrice>
            </OrderListSm>
          </OrderListSubContainerSm>
        </OrderListBg>
      )
    }}
  </ToggleChanges.Consumer>
)

export default OrderListsDetails
