import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
	function handleSelect(selectedButton) {
		console.log(selectedButton);
	}
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id='examples'>
					<h2>Example</h2>
					<menu>
						<TabButton label='Components' onSelect={() => handleSelect('components')} />
						<TabButton label='JSX' onSelect={() => handleSelect('jsx')} />
						<TabButton label='Props' onSelect={() => handleSelect('props')} />
						<TabButton label='State' onSelect={() => handleSelect('state')} />

						{/* handleSelect 어떻게 실행해야할 지 통제해야함
							onSelect를 사용하는 대신에 화살표 함수를 사용할 수 있음
							handleSelect를 사용하는 대신에 이 화살표 함수를 onSelect에 실행함
						*/}
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;
