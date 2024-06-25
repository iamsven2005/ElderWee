import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Password = () => {
    return (
        <div className="flex flex-col w-96 mx-auto">
            <div className="flex flex-row justify-between items-center mb-5">
                <ArrowLeft />
                <img src="/logo2.png" className="h-10" alt="Logo"/>
                <div></div>
            </div>
            <h1 className="text-3xl text-center m-10">
                Create a password
            </h1>
            <form className="flex flex-col gap-5">
                <Input
                    placeholder="Create password"
                    type="password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
                    title="Password must be at least 8 characters long and contain at least two of the following: letters, numbers, or symbols."
                    required
                />
                <ul className="text-xs">
                    <li>8 or more characters</li>
                    <li>Use 2 of the following: letters, numbers, or symbols</li>
                </ul>
                <Button className="bg-blue-700 hover:bg-blue-700 rounded-full" type="submit">
                    <Link href={`/information`}>
                        Next
                    </Link>
                </Button>
            </form>
        </div>
    );
}

export default Password;