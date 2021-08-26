import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import close from "../assets/svg/close-white.svg";
import { closeBasketAction } from "../redux/actions"
import { closeNavigationButton, navigation, navigationContent } from "../styles/mixins";

const BasketElement = styled.div`
  ${navigation}
  padding: 35px 0 50px;
  right: 0;
  color: var(--main-white);
  background: var(--main-purple);
  box-shadow: -4px 4px 10px var(--main-shadow-black);
  transform: translateX(100%);
`;
const CloseButton = styled.button`
  ${closeNavigationButton}
  margin: 0 auto 36px 27px;
`;
const Content = styled.nav`
  ${navigationContent}
  padding: 0 35px;
`;
const ClearBasket = styled.div`
  text-align: center;
`;

function Basket ({isOpenBasket, closeBasket, basket}) {
  return(
    <BasketElement style={isOpenBasket ? {transform: "translateX(0)"} : {}}>
      <CloseButton onClick={closeBasket}>
        <img src={close} alt="Close" />
      </CloseButton>
      <Content>
        {
          basket
          ? ""
          : <ClearBasket>Cart  is  empty</ClearBasket>
        }
      </Content>
    </BasketElement>
  );
}

const mapStateToProps = state => ({
  isOpenBasket: state.app.navigation.isOpenBasket,
});

const mapDispatchToProps = {
  closeBasket: closeBasketAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);