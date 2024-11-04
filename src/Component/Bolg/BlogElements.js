import styled from "styled-components";

export const Conatiner = styled.div`

padding:70px; 0px;
@media (max-width: 900px) {
    padding:0px 0px;
    
  }
`;

export const HeadingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  @media (max-width: 512px) {
    border-radius: 15px;
    padding: 0px 40px;
    background-color: #fde7cb;
    justify-content: center;
    align-items: center;
  }
`;
export const HeadingWrapper = styled.div`
  border-radius: 15px;
  background-color: #fde7cb;
  width: 100%;
  text-align: center;
  padding: 40px 0px;
  @media (max-width: 512px) {
    padding: 30px 0px;
    width: 90%;
    background-color: #ece8de;
    border-radius: 15px;
  }
`;

export const BlogsConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

export const BlogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 80%;
    justify-content: center;
  }
`;
export const BlogCard = styled.div`
  background-color: #fde7cb;
  width: 25%;
  text-align: left;
  ${'' /* margin-right: 15px; */}
  border-radius: 15px;
  padding: 15px 30px;
  @media (max-width: 900px) {
    width: 90%;
    margin-top: 15px;
    margin-right: 0;
  }
`;
