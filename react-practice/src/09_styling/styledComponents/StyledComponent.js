import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  // &를 통해 자기 자신을 가리킬 수 있음
  // 이를 사용하여 여러 선택자를 활용한 css 설정이 가능하다.
  // - 여기서는 hover에 대한 속성을 지정해주고 있다.
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.9);
  }

  // props의 값에 따라서 css 속성을 변경시켜줄 수 있다
  // - props.inverted가 true일 경우엔 다른 button이 생성될 수 있도록 지정
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}

  // 마찬가지로 인접 형제 선택자를 활용하여 button간 간격에 대한 정의를 설정한다
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>뒤집힌 버튼 ㅎ</Button>
    </Box>
  );
};

export default StyledComponent;
