import { Button } from "@/components/ui/button";
import Link from "next/link";

const MainPage = () => {
    return ( 
        <div className="flex flex-wrap m-5 p-5 mx-auto items-center justify-center">
            <img src="/guy.png" className="rounded-xl"/>
            <div className="m-5 w-60">
                <h1 className="font-bold text-2xl mb-5">
                    Protext Yourself Against Scams
                </h1>
                <p>
                Deep Fakes are on the rise, more than ever, individuals like yourselves will need the know-how to identify and prevent scams from happening.
                <br/>
                Test out our <span className="font-bold">Deep Fake Detection (DFD)
                    </span> system today! 
                </p>
                <Link href="/dashboard/scanner">
                <Button className="font-bold mt-5">
                    Try Now
                </Button>
                </Link>
            </div>
        </div>
     );
}
 
export default MainPage;