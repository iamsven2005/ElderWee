import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <header className="bg-white flex items-center p-5 justify-between w-full">
        <Image
          src="/paypal.png"
          alt="paypal"
          width={100}
          height={50}
        />
        <div className="gap-2 flex">
          <Link href={`/login`} className="flex-none">
            <Button className="rounded-full" variant="outline">
              Log in
            </Button>
          </Link>
          <Link href={`/signup`} className="flex-none">
            <Button className="rounded-full bg-blue-500">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>
      <section className="w-full bg-blue-400 items-center justify-center flex h-[400px] p-5 flex-col text-center">
        <h1 className="text-4xl text-white m-5">
          Take care of you and yours at home, and we can take care of you online
        </h1>
        <Button className="bg-white text-blue-600 hover:bg-white rounded-full mx-auto p-5">
          <Link href={`/signup`} className="flex-none">
            Sign up now
          </Link>
        </Button>
      </section>
      <section className="bg-blue-600 h-[100px] w-full">
      </section>
      <section className="flex flex-row p-20 gap-10">
        <img src="/1.png" />
        <div className="flex flex-col">
          <h1 className="text-blue-400 text-4xl">
            The world is your shopping mall
          </h1>
          <p>
            From big brands to little boutiques, you can shop safely at over millions of online stores with Paypal
          </p>
        </div>
      </section>
      <section className="flex flex-row p-20 gap-10 bg-slate-50">
        <div className="flex flex-col">
          <h1 className="text-blue-400 text-4xl">
            Pay it the way you want
          </h1>
          <p>
            Link all your cards and choose which one to use at checkout. Shopping online has never been this easy.
          </p>
        </div>
        <img src="/2.png" />
      </section>
      <section className="flex flex-row p-20 gap-10">
        <img src="/3.png" />
        <div className="flex flex-col">
          <h1 className="text-blue-400 text-4xl">
            Shop online with confidence
          </h1>
          <p>
            Stay secure when shopping online - with 24/7 fraud monitoring, Buyer Protection ^. Terms apply.
          </p>
        </div>
      </section>
      <section className="text-center items-center justify-center bg-slate-50 p-20 w-full">
        <h1 className="text-blue-400 text-4xl ">
          Checkout with millions of brands you love
        </h1>
        <img src="/4.png" className="mx-auto" />
      </section>
      <section className="flex flex-col items-center justify-center p-20 w-full bg-blue-300">
        <h1 className="text-white text-center text-2xl">
          Join the global community of Paypal users who are sending spending and receiving money securely every day.
        </h1>
        <Link href={`/signup`} className="flex-none">
          <Button className="bg-white text-blue-600 hover:bg-white rounded-full m-5">
            Sign up now
          </Button>
        </Link>
        <div className="flex flex-row text-3xl font-bold gap-2">
          <div className="bg-white rounded-xl p-3">
            3
          </div>
          <div className="bg-white rounded-xl p-3">
            0
          </div>
          <div className="bg-white rounded-xl p-3">
            5
          </div>
          <div className="bg-white rounded-xl p-3">
            0
          </div>
          <div className="bg-white rounded-xl p-3">
            0
          </div>
          <div className="bg-white rounded-xl p-3">
            1
          </div>
          <div className="bg-white rounded-xl p-3">
            9
          </div>
          <div className="bg-white rounded-xl p-3">
            3
          </div>
          <div className="bg-white rounded-xl p-3">
            4
          </div>
        </div>
      </section>
      <section className="items-center justify-center bg-slate-50 p-20 w-full text-sm">
        <p>
          ^Reward schem terms may differ when using PayPal. Please refer to your card issuer.
        </p>
        <p>
          # For eligible orders within 180 days of payment. <Link href={`/terms`} className="text-blue-600">
            Terms and conditions apply</Link>
        </p>
        <div className="mt-6 flex flex-row font-bold gap-4">
          <Link href="https://www.paypal.com/sg/cshelp/personal">Help</Link>
          <Link href="https://www.paypal.com/sg/smarthelp/contact-us">Contact</Link>
          <Link href='https://www.paypal.com/sg/webapps/mpp/paypal-fees'>Fees</Link>
          <Link href="https://www.paypal.com/sg/webapps/mpp/paypal-safety-and-security">Security</Link>
          <Link href="https://www.paypal.com/sg/webapps/mpp/mobile-apps">Apps</Link>
          <Link href="https://www.paypal.com/sg/webapps/mpp/online-shopping">Shop</Link>
        </div>
        <hr />
      </section>
    </main>
  );
}
