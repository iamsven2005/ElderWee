import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Phone = () => {
    return ( 
        <div className="flex flex-col w-96 mx-auto m-5">
            <div className="flex flex-row justify-between">
            <Link href="/signup">
            <ArrowLeft/>
            </Link>
            <img src="/Logo2.png" className="size-10"/>
            <div>
            {/* For spacing */}
            </div>
            </div>
            <h1 className="text-3xl text-center m-10">
                Sign up for PayPal
            </h1>
            <form className="flex flex-col gap-5">
            <Input placeholder="Phone number" type="tel" pattern="\+65[6|8|9]\d{7}"/>
            <p className="text-xs">
                By continuing, you confirm that you are authorized to use this phone number and agree to receive text mesages. Carrier fees may apply.
            </p>
            <Button className="bg-blue-700 hover:bg-blue-700 rounded-full" type="submit">
                <Link href={`/confirm`}>
                    Next
                </Link>
            </Button>
            </form>


        </div>
     );
}
 
export default Phone;