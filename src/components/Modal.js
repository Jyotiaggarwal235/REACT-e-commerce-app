import React,{useContext} from "react";
import styled from "styled-components";
import { ProductContext} from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";  


 const Modal = () =>{
  const value = useContext(ProductContext)
  const { closeModal } = value;

  const { img, title, price } = value.state.modalProduct  ;
    return (
          !value.state.modalOpen ? 
            null:
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <div className='position-absolute' style={{top:'10px',right:'21px',cursor:"pointer"}}  onClick={() => {
                            closeModal();
                          }}>X</div>
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ₹{price}</h5>
                      <Link to="/">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
  }


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export default  Modal