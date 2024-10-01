import { Fragment, useContext } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { HiOutlineBell } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { AdminContext } from '../../Context/AdminContext'

export default function Header() {
	const { headerName } = useContext(AdminContext)
	const navigate = useNavigate()

	return (
		<div className="bg-white h-40 px-14 flex items-center justify-between ">
			<div className="relative">
				<div >
					<span className="text-4xl font-extrabold text-gray-900  pb-2 ">{headerName}</span>
					<div>
						<span>Welcome Back!</span>
					</div>

				</div>

			</div>
			<div className="flex items-center gap-2 mr-2">
				<Popover className="relative gap-4">
					{({ open }) => (
						<>
							<PopoverButton
								className={classNames(
									open ? 'text-gray-900' : 'text-gray-500',
									'group bg-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-neutral-400'
								)}
							>
								<HiOutlineBell fontSize={26} />
							</PopoverButton>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Notifications</strong>
										<div className="mt-2 py-1 text-sm">This is notification panel.</div>
									</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>
				<Menu as="div" className="relative inline-block text-left bg-white">
					<div >
						<MenuButton className="inline-flex gap-2 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<div className="ml-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
								<span className="sr-only">Open user menu</span>
								<div
									className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
									style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
								>
									<span className="sr-only">Marc Backes</span>
								</div>
							</div>
							<div className="text-left gap-2">
								<span className=" font-extrabold text-gray-900  pb-2">
									John Snow
								</span>
								<div>
									<span>Johnfleayer@gmail.com</span>
								</div>
							</div>

						</MenuButton>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<MenuItem>
								{({ active }) => (
									<button
										onClick={() => navigate('/profile')}
										className={classNames(
											active ? 'bg-gray-300' : '',
											'block px-4 py-2 text-sm text-gray-700 w-full text-left bg-white'
										)}
									>
										Your Profile
									</button>
								)}
							</MenuItem>
							<MenuItem>
								{({ active }) => (
									<button
										onClick={() => navigate('/logout')}
										className={classNames(
											active ? 'bg-gray-300' : '',
											'block px-4 py-2 text-sm text-gray-700 w-full text-left bg-white'
										)}
									>
										Settings
									</button>
								)}
							</MenuItem>
							<MenuItem>
								{({ active }) => (
									<button
										onClick={() => navigate('/logout')}
										className={classNames(
											active ? 'bg-gray-300' : '',
											'block px-4 py-2 text-sm text-gray-700 w-full text-left bg-white cursor-pointer'
										)}
									>
										Sign out
									</button>
								)}
							</MenuItem>
						</MenuItems>
					</Transition>
				</Menu>
			</div>
		</div>
	)
}
