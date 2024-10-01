import { useContext, useEffect } from "react";
import { AdminContext } from "../Context/AdminContext";
import UserNotificationCard from "../components/Dashbord/Customer/NotificationCard";

const notifications = [
    {
        key: 1,
        icon: "New Order",
        title: "New Order Placed",
        date: "2024-03-17",
        message: "You have received a new order from Nimal Jayasooriya.",
    },
    {
        key: 2,
        icon: "Payment Received",
        title: "Payment Received",
        date: "2024-03-12",
        message: "Congratulations! You have received a payment for your services.",
    },
    {
        key: 3,
        icon: "New Message",
        title: "New Message",
        date: "2024-03-03",
        message: "You have a new message from Kasun Rathnayake.",
    },
    {
        key: 4,
        icon: "Account Update",
        title: "Account Update",
        date: "2024-02-24",
        message: "Your account information has been updated successfully.",
    },
    {   key: 5,
        icon: "Order Shipped",
        title: "Order Shipped",
        date: "2024-02-20",
        message: "Order No.#125WC has been shipped.",
    },
];


export default function Customers() {
    const { setHeaderName } = useContext(AdminContext)
    useEffect(() => {
        setHeaderName("Customers");
    }, [])
    return (
        <div
            className="flex flex-col items-center justify-between gap-10 border-b border-gray-200 px-14"
        >
            <div className="flex items-center flex-1 w-full p-2 border border-gray-200 rounded-lg bg-primary">
                <span className="text-2xl text-white">Notifications</span>
                <div className="flex justify-end gap-2 ml-auto"></div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4">
                {notifications.map((notification) => (
                    <UserNotificationCard key={notification.key} notification={notification} />
                ))}
            </div>
        </div>
    )
}
