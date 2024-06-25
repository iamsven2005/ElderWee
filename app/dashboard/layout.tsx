import { Bell } from "lucide-react";
import Link from "next/link";

type Props = {
 children: React.ReactNode
}
const Layout = ({children}: Props) => {
    return ( 
        <div>
            <div className="h-20 bg-blue-700 text-white justify-between items-center flex flex-row p-5">
            <img src="/Logo2.png" className="size-10"/>
            <Link href="/dashboard/home">Home</Link>
            <Link href="/dashboard/transfer">Transfer</Link>
            <Link href="/dashboard/transaction">Transaction History</Link>
            <Link href="/dashboard/account">My Account</Link>
            <Link href="/" className="flex flex-row"><Bell/><p>Logout</p></Link>
            </div>
            {children}
        </div>
    );
}
export default Layout