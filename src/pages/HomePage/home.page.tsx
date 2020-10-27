import React from 'react'
import { useHistory } from 'react-router-dom';

interface Props {}

const HomePage: React.FC<Props> = (props) => {
	const history = useHistory();

	const gotoLogin = () => {
		history.push('/auth/login');
	}

	return (
		<div>
			Home Page
			<button onClick={gotoLogin}>goto login</button>
		</div>
	)
}

export default HomePage;
