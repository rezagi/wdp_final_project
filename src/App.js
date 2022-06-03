import Home from './pages/Home';
import { Routes, Route, Link, } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import ButtonNav from "./components/ButtonNav";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Login from "./pages/Login";
import Register from './pages/Register';
import Order from "./pages/Order";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { HeaderPict} from "./assets"

function App() {

	const navigate = useNavigate();

    const refreshPage = () => {
		navigate(0);
	  }
  

	const navigation = [
		{ name: 'NEWS', href: '/#news', current: true },
		{ name: 'TICKET', href: '/#layout', current: false },
		{ name: 'PROMOTERS', href: '/#promoter', current: false },
		{ name: 'CONTACT US', href: '/#contact', current: false },
	  ]
	  
	  function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	  }	

	let navProfile;
		navProfile = <Link to="/login"><ButtonNav text={'Buy Ticket'} /></Link>;

	return (
        <div>

		<Disclosure as="nav" className="bg-white fixed w-full">
		{({ open }) => (
			<>
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
				<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
					{/* Mobile menu button*/}
					<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
					<span className="sr-only">Open Menu</span>
					{open ? (
						<XIcon className="block h-6 w-6" aria-hidden="true" />
					) : (
						<MenuIcon className="block h-6 w-6" aria-hidden="true" />
					)}
					</Disclosure.Button>
				</div>
				<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
					<div className="flex-shrink-0 flex items-center">
					<img
						className="block lg:hidden h-8 -ml-10"
						src={HeaderPict}
						alt="Workflow"
					/>
					<img
						className="hidden lg:block h-8 w-auto"
						src={HeaderPict}
						alt="Workflow"
					/>
					</div>
					<div className="hidden sm:block sm:ml-6">
					<div className="flex space-x-4">
						{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={classNames(
							item.current ? 'text-green-500 font-bold'  : ' hover:text-green-500 font-bold',
							'px-3 py-2 rounded-md text-sm font-medium'
							)}
							aria-current={item.current ? 'page' : undefined}
						>
							{item.name}
						</a>
						))}
					</div>
					</div>
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						{navProfile}
				</div>
				</div>
			</div>

			<Disclosure.Panel className="sm:hidden">
				<div className="px-2 pt-2 pb-3 space-y-1">
				{navigation.map((item) => (
					<Disclosure.Button
					key={item.name}
					as="a"
					href={item.href}
					className={classNames(
						item.current ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-green-500 hover:text-white',
						'block px-3 py-2 rounded-md text-base font-medium'
					)}
					aria-current={item.current ? 'page' : undefined}
					>
					{item.name}
					</Disclosure.Button>
				))}
				</div>
			</Disclosure.Panel>
			</>
		)}
		</Disclosure>

			<div class="mx-auto w-full justify-center">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/order" element={<Order />} />
					<Route path="/" element={<Home />} />
				</Routes>	
			</div>			

		</div>
		

	);
}

export default App;
