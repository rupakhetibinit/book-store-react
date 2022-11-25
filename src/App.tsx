import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Layout from './components/Layout';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
	const [count, setCount] = useState(0);

	return <div className='flex justify-center '></div>;
}

export default App;
