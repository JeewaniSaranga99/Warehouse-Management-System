import React, { useContext } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import AvatarImage from '../../images/LOGO 1 1.jpg';
import { AdminContext } from '../../Context/AdminContext'


const linkClass =
	'flex items-center gap-2 font-bold px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	const {HeaderName} = useContext(AdminContext)
	return (
		<div className=" w-72 p-10 flex flex-col" style={{ backgroundImage: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)' }}>

			<div className="avatar-container p-3 flex flex-col justify-center items-center" >
				<img
					src={AvatarImage}
					alt="Avatar"
					className="w-20 h-20 rounded-full" 
				/>
			</div>

			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} className={" rounded-full px-4 py-2 cursor-pointer" + link.label===HeaderName? " bg-gray-200 text-gray-900 focus:bg-gray-200":"text-white"} />
				))}
			</div>
			<div className="flex flex-col gap-0.9 pt-2 ">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-white')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-gray-200 text-gray-700 rounded-full' : 'text-white', linkClass,'active:bg-gray-200 px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200 ')+' rounded-full'}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
