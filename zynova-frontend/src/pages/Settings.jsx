import React,{useEffect,useContext} from 'react'
import Profile from '../components/Settings/Profile'
import { AdminContext } from '../Context/AdminContext'


export default function Settings() {
	const { setHeaderName } = useContext(AdminContext)
	useEffect(()=>{
		setHeaderName("Setting");
	},[])
	return (
		<div className="flex flex-col gap-4">
			< Profile/>
			{/* <div>
				<div className="flex flex-row gap-4 w-full">
					<TransactionChart />
					<PopularProducts />
				</div>
				<div className="flex flex-row gap-4 w-full">
					<TransactionChart />
					<PopularProducts />
				</div>
				< AreaChart/>
			</div> */}
		</div>
	)
}
