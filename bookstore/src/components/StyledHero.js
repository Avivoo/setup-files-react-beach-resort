import styled from "styled-components";

const defaultImg = "https://www.naeyc.org/sites/default/files/styles/page_header_media_large/public/062019/juliaweek2sq2017_014.jpg?itok=MP9X0nFa&timestamp=1561405328"

const StyledHero = styled.header`
min-height: 60vh;
  background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;`

export default StyledHero;
