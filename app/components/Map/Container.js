import styled from 'styled-components';

export const Container = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: red;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
`;

export default Container;

// .pin
//   width 30px
//   height 30px
//   border-radius 50% 50% 50% 0
//   background #89849b
//   position absolute
//   transform rotate(-45deg)
//   left 50%
//   top 50%
//   margin -20px 0 0 -20px
//   animation-name bounce
//   animation-fill-mode both
//   animation-duration 1s
// &:after
//   content ''
//   width 14px
//   height 14px
//   margin 8px 0 0 8px
//   background #2F2F2F
//   position absolute
//   border-radius 50%

// background-color: red;
// border-radius: 50%;
// display: block;
// height: 40px;
// width: 40px;
