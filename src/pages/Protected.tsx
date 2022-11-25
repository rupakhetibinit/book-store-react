import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Protected = (props: Props) => {
	const [thing, setThing] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const isMounted = useRef(false);
	useEffect(() => {
		// if (!isMounted.current) {
		// 	return;
		// }
		// isMounted.current = true;
		const fetchData = async () => {
			const res = await fetch('http://localhost:8000/book', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			});
			console.log('above res.json');

			const { data, error } = await res.json();
			if (data) {
				setThing(data);
			}
			if (error) {
				console.log(error);
				setThing('You will be redirected in 5 seconds');
				setTimeout(() => navigate('/login'), 6000);
			}
		};
		fetchData();

		setLoading(false);

		if (error)
			return () => {
				null;
			};
	}, []);

	const handleLogout = async () => {
		const res = await fetch('http://localhost:8000/api/auth/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		});
		const { data, error } = await res.json();
		if (error) {
			setError(error.message);
		}
		if (data) {
			setThing('You will be redirected in 5 seconds');
			setTimeout(() => navigate('/login'), 5000);
		}
	};
	const handleLogoutAll = async () => {
		const res = await fetch('http://localhost:8000/api/auth/logoutall', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		});
		const { data, error } = await res.json();
		if (error) {
			setError(error.message);
		}
		if (data) {
			setThing('You will be redirected in 5 seconds');
			setTimeout(() => navigate('/login'), 5000);
		}
	};

	if (loading) {
		return <div>loading...</div>;
	}

	return (
		<div>
			{error && <p className='text-red-500'>{error}</p>}
			{thing && <p>{thing}</p>}
			<button
				className='bg-teal-500 hover:bg-teal-600 px-4 py-2 m-2'
				onClick={handleLogout}>
				Logout from this session
			</button>
			<button
				className='bg-teal-500 hover:bg-teal-600 px-4 py-2 m-2'
				onClick={handleLogoutAll}>
				Logout from all sessions
			</button>
		</div>
	);
};

export default Protected;
