import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowBigDown, ChevronDown } from "lucide-react";
import Link from "next/link";

const SignupPage = () => {
    return ( 
        <div className="flex flex-col w-96 mx-auto m-10">
            <div className="flex flex-row justify-between">
            <div className="flex-0 flex flex-row justify-center items-center">
            <img src="/SG.png" className="size-10 "/>
            <ChevronDown/>
            </div>
            <img src="/Logo2.png" className="size-10"/>
            <Button className="rounded-full bg-blue-500 hover:bg-blue-500">
                <Link href={`/login`} >
                Log in
                </Link>
            </Button>
            </div>
            <h1 className="text-3xl text-center m-10">
                Sign up for PayPal
            </h1>
            <form className="flex flex-col gap-5">
            <Input placeholder="Your email" type="email"/>
            <Input placeholder="Create your username"/>
            <Button className="bg-blue-700 hover:bg-blue-700 rounded-full" type="submit">
                <Link href={`/phone`}>
                    Next
                </Link>
            </Button>
            </form>


        </div>
     );
}
 
export default SignupPage;