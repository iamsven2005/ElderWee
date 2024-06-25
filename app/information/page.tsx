
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
            <div className="flex flex-col text-center m-10">
            <h1 className="text-3xl">
                Personal Information
            </h1>
            <p>
                Make sure this matches your offical ID
            </p>
            </div>
            <form className="flex flex-col gap-5">
                <Input placeholder="Nationality" required/>
                <Input placeholder="Residing Country"required/>
                <Input placeholder="Given Name"required/>
                <Input placeholder="Surname"required/>
                <div className="flex flex-row">
                <Input placeholder="Id Type"required/>
                <Input placeholder="Id Number"required/>
                </div>
                <p className="text-xs">Date of birth:</p>
                <Input type="date"required/>

                <Button className="bg-blue-700 hover:bg-blue-700 rounded-full" type="submit">
                    <Link href={`/dashboard`}>
                        Next
                    </Link>
                </Button>
            </form>
        </div>
    );
}

export default Password;
