import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LinkPage = () => {
    return (
        <div className="flex flex-col items-center mx-auto m-10">
            <h1 className="text-bold text-2xl">Link your card to deposit money</h1>
            <img src="/Logo2.png" className="size-10" />
            <div className="flex flex-row">
                <img src="/card.png" />
                <div className="flex flex-col">
                    <h1 className="text-blue-600 text-2xl">Link a debit or credit card</h1>
                    <p>
                        Keep your card infor secure when shopping
                    </p>
                </div>

            </div>
            <form className="flex flex-col gap-5">
                <Input placeholder="Debit or credit card number" />
                <Input placeholder="Card type" />
                <Input type="date" />
                <Input type="number" placeholder="cvv"/>
                <Input placeholder="Billing Address"/>
                <Button className="rounded-full bg-blue-700 hover:bg-blue-600">
                    <Link href="/dashboard/link-success">
                    Link Card
                    </Link>
                </Button>
            </form>
        </div>
    );
}

export default LinkPage;