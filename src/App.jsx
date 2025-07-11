import { useState } from 'react';
import './App.scss';

const initialBox = [
	[false, false, false, false],
	[false, false, false, false],
	[false, false, false, false],
	[false, false, false, false],
];

function App() {
	const [box, setBox] = useState(initialBox);
	const [rotation, setRotation] = useState(0);

	const rotate = () => {
		setRotation(prev => (prev + 90) % 360);
	};

	function handleClick(rowIdx, colIdx) {
		const newBox = box.map((row, i) =>
			row.map((cell, j) => (i === rowIdx && j === colIdx ? !cell : cell))
		);
		setBox(newBox);
	}

	return (
		<div className='container'>
			<div
				className='box-grid'
				style={{
					transform: `rotate(${rotation}deg)`,
				}}
			>
				{box.map((row, rowIdx) =>
					row.map((cell, colIdx) => (
						<div
							key={`${rowIdx}-${colIdx}`}
							className={`cell ${cell ? 'active' : ''}`}
							onClick={() => handleClick(rowIdx, colIdx)}
						/>
					))
				)}
			</div>
			<button className='button' onClick={rotate}>
				Rotate 90°
			</button>
		</div>
	);
}

export default App;
