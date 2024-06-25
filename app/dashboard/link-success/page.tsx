import { Button } from "@/components/ui/button";
import Link from "next/link";

const LinkSuccess = () => {
    return ( 
        <div className="flex flex-col items-center m-5">
            <img src="/Logo2.png" className="size-10"/>
            <img src="/Tick.png"/>
            <h1 className="text-bold text-2xl">
                You linked your Visa Debit
            </h1>
            <p>
                **1234
            </p>
            <Button>
                <Link href="/dashboard/transfer">
                Done
                </Link>
            </Button>
        </div>
     );
}
 
export default LinkSuccess;