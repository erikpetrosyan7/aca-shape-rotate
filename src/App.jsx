import { useState } from 'react';
import './App.scss';

const width = 4;
const height = 4;

function App() {
	const [board, setBoard] = useState(
		Array(5)
			.fill(null)
			.map(() => Array(5).fill(false))
	);

	function handleClick(rowIndex, colIndex) {
		const newBoard = board.map((row, i) =>
			row.map((cell, j) => (i === rowIndex && j === colIndex ? !cell : cell))
		);
		setBoard(newBoard);
	}
	function rotateMatrix(matrix) {
		return matrix[0].map((_, colIndex) =>
			matrix.map(row => row[colIndex]).reverse()
		);
	}
	function handleRotate() {
		const rotated = rotateMatrix(board);
		setBoard(rotated);
	}

	return (
		<div className='container'>
			<div className='box-grid'>
				{board.map((row, rowIndex) =>
					row.map((cell, colIndex) => (
						<div
							key={`${rowIndex}-${colIndex}`}
							className={`cell ${cell ? 'active' : ''}`}
							onClick={() => handleClick(rowIndex, colIndex)}
						/>
					))
				)}
			</div>
			<button className='button' onClick={handleRotate}>
				Rotate 90°
			</button>
		</div>
	);
}

export default App;
