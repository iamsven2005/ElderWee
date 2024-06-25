import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const LoginPage = () => {
    return ( 
        <div className="flex flex-col rounded-lg shadow-lg m-10 p-10 items-center justify-center w-80 mx-auto">
            <img src="/Logo2.png" className="size-10"/>
            <div className="flex flex-col m-5">
            <Input placeholder="Email or Mobile Number" className="w-full"/>
            <p className="text-blue-500 text-sm">Forgot Email?</p>
            </div>

            <Button className="rounded-full w-60 m-5">
                <Link href={`/not-you`}>
                Next
                </Link>
            </Button>
            <Button className="rounded-full w-60"
            variant={"outline"}>
                <Link href={`/signup`}>
                Sign Up
                </Link>
            </Button>
        </div>
     );
}
 
export default LoginPage;