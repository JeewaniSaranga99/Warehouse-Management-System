import TransactionChart from './Analysis/TransactionChart'
import PopularProducts from './Analysis/PopularProducts'
import AreaChartCustomers from './Analysis/AreaChartCustomers'
import LatestCustomers from './Analysis/LatestCustomers'

export default function DataAnalysis() {
    return (
        <div className="bg-white h-100 px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10">
            <div className="bg-primary  rounded-lg p-2 flex-1 border border-gray-200 flex items-center w-full">
                <span className="text-2xl text-white "> Data Analysis </span>
            </div>

            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />

            </div>
            <div className="flex flex-row gap-10 w-full">
                <PopularProducts />
                <PopularProducts />
                <PopularProducts />
            </div>

            <div className="flex flex-row gap-4 w-full">
                <AreaChartCustomers />
                <LatestCustomers />
            </div>

            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                {/* <AreaChartFarmers/> */}
                <LatestCustomers />
            </div>

            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                {/* <AreaChartDrivers/> */}
                <LatestCustomers />
            </div>

        </div>
    )
}