import React from 'react';
import { Link, Outlet, Route } from 'react-router-dom';
type Props = {};

const Layout = (props: Props) => {
	return (
		<>
			<nav className='flex  justify-between mx-16 my-2'>
				<h1 className='text-xl text-teal-600'>Book Store</h1>
				<ul className=''>
					<Link to='/login' className='p-1'>
						<button className='bg-teal-500 hover:bg-teal-600 p-2 rounded-md text-white'>
							Login
						</button>
					</Link>
					<Link to='/signup' className='p-1'>
						<button className='bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md text-white'>
							Sign Up
						</button>
					</Link>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;
