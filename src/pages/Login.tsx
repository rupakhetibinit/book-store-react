import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Login = (props: Props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleSubmit = async () => {
		const res = await fetch('http://localhost:8000/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		});
		const json = await res.json();
		console.log(json);
		navigate('/protected');
	};
	return (
		<div className='flex flex-col justify-center items-center mx-16'>
			<input
				name='Email'
				type={'text'}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Email'
			/>
			<input
				name='Password'
				type={'password'}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Password'
			/>
			<button
				className='bg-teal-400 hover:bg-teal-500 text-white p-2 m-2 rounded-md'
				onClick={handleSubmit}>
				Login
			</button>
		</div>
	);
};

export default Login;
