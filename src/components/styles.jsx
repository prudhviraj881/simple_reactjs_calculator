import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100px;
  margin: 10px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(90px, auto) repeat(5, 60px);
  box-shadow: 2px 2px 10px #33;
  border-radius: 10px;
`;
export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgb(171, 55, 210);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Prevoius = styled.div`
  color: hsl(270, 50% 61%);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;
export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: 1px outset red;
  background-color: rgb(102, 140, 255);
  &:hover {
    background-color: rgb(55, 210, 133);
  }
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`;
    }
  }};
  ${({ operation }) => operation && `background-color:rgb(19, 21, 204);`};
  ${({ control }) => control && `background-color:brown;`};
  ${({ equals }) =>
    equals && `background-color:green;border-bottom-right-radius:10px;`};
  ${({ decimal }) =>
    decimal && `background-color:Chocolate;border-bottom-left-radius:10px;`};
`;
