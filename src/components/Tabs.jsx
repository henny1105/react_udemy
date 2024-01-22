export default function Tabs({ children, buttons, ButtonsContainer }) {
	// buttonsContainer 속성은 반드시 받는 쪽 컴포넌트에서 커스텀 컴포넌트로 사용이 가능해야함
	// const ButtonsContainer = buttonsContainer;
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
