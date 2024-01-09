const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}
// 랜덤으로 텍스트값 가져오기

function Header() {
	const description = reactDescriptions[genRandomInt(2)];
	return (
		<header>
			<img src='src/assets/react-core-concepts.png' alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>
				{/* 중괄호 사이에 자유롭게 자바스크립트 코드 실행 */}
				{description}
				React concepts you will need for almost any app you are going to build!
			</p>
		</header>
	);
}

function App() {
	return (
		<div>
			<Header />
			<main>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
