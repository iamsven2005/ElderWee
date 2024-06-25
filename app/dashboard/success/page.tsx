import { Button } from "@/components/ui/button";
import Link from "next/link";

const Transfer = () => {
    return ( 
        <div className="flex flex-col items-center m-5">
            <img src="/Logo2.png" className="size-10"/>
            <img src="/Tick.png"/>
            <h1 className="text-bold text-2xl">
            You have successfully transfer funds.
            </h1>
            <Button>
                <Link href="/dashboard/home">
                Done
                </Link>
            </Button>
        </div>
     );
}
 
export default Transfer;