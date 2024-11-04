import styled from "styled-components";
import { Link } from "react-scroll";

export const Conatiner = styled.div`

  padding: 70px 15px;
  @media (max-width: 600px) {
    padding: 0;
  }

`;

export const ContainerWarapper = styled.div`
  display: flex;
  justify-content: space-around;
 
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
`;

export const FlexCard = styled.div`

@media(max-width:512px){
  width:50%;
}
`;

export const Heading = styled.h2`
  padding: 16px 0px;
`;
export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  line-height: 1.5rem;

  a {
    font-size: 19px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: #010606;
  }
`;

export const NavLinks = styled(Link)`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 19px;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: #a0a7be;
  }
  
`;

export const Icon = styled.b`
  color: #a0a7be;
  font-size: 18px;
  dispaly: flex;
  align-items: center;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;
export const IconList = styled.div`
  color: #a0a7be;
  border-radius:100px;
  transition: all 0.6s ease-in-out;
  :hover{
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;
export const Sicon = styled.a`
  text-decroation: none;
  color: Black;
  background: #0000;
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: #010606;
    transform: scale(1.5);
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  @media(max-width:512px){
    width:80%;
    font-size: 12px;
  }
  
`;
