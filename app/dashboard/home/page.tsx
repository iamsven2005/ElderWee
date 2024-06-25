"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ResponsiveBar } from "@nivo/bar"

const Home = () => {
    return (
        <div className="flex flex-wrap">
            <div>
                <div className="m-5 p-5 bg-slate-50 shadow-xl">
                    <h1 className="text-xl font-bold">
                        PayPal Balance
                    </h1>
                    <p className="text-3xl font-bold m-5">
                        $5,000.00
                    </p>
                    <p className="text-sm">
                        Avaliable
                    </p>
                    <div className="flex flex-row gap-5 m-5">
                        <Link href="/dashboard/transfer">
                            <Button className="rounded-full">
                                Transfer Funds
                            </Button>
                        </Link>
                        <Link href="/dashboard/transfer">
                            <Button className="rounded-full">
                                Top Up
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="m-5 p-5 bg-slate-50 shadow-xl w-64">
                    <h1 className="text-xl font-bold">
                        Transaction History
                    </h1>
                    <p>
                        See when funds come in and go out. You can find your recent Paypal activities here.
                    </p>
                    <Link href="/dashboard/transaction">
                        <Button className="rounded-full m-5">
                            Recent Transactions
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="m-5 p-5 bg-slate-50 shadow-xl">
                <h1 className="text-xl font-bold">
                    Money In/Out
                </h1>
                <Card className="h-full w-80 max-w-2xl">
                    <CardHeader>
                        <CardTitle>Income vs Expenses</CardTitle>
                        <CardDescription>
                            A bar graph showing money in (green) and money out (red) over the past few months.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <BarChart className="aspect-[16/9]" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
    
}
function BarChart(props: any) {
    return (
      <div {...props}>
        <ResponsiveBar
          data={[
            { name: "Jan", count: 111 },
            { name: "Feb", count: 157 },
            { name: "Mar", count: 129 },
            { name: "Apr", count: 150 },
            { name: "May", count: 119 },
            { name: "Jun", count: 72 },
          ]}
          keys={["count"]}
          indexBy="name"
          margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
          padding={0.3}
          colors={["#2563eb"]}
          axisBottom={{
            tickSize: 0,
            tickPadding: 16,
          }}
          axisLeft={{
            tickSize: 0,
            tickValues: 4,
            tickPadding: 16,
          }}
          gridYValues={4}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "12px",
                textTransform: "capitalize",
                borderRadius: "6px",
              },
            },
            grid: {
              line: {
                stroke: "#f3f4f6",
              },
            },
          }}
          tooltipLabel={({ id }) => `${id}`}
          enableLabel={false}
          role="application"
          ariaLabel="A bar chart showing data"
        />
      </div>
      )
    }
export default Home;