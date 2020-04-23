import styled from "styled-components";
import defaultImg from '../images/book2.jpg'


const StyledHero = styled.header`
min-height: 60vh;
  background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;`

export default StyledHero;
