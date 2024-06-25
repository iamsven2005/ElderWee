import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function TabsDemo() {
    return (
        <Tabs defaultValue="account" className="w-[400px] flex mx-auto flex-col m-5">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Send</TabsTrigger>
                <TabsTrigger value="password">Contacts</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>Send payments to anyone</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name, username, email, mobile</Label>
                            <Input id="name" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="rounded-full">Next</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Contacts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Send to user</Label>
                            <Input id="current" />
                            <Input type="number" defaultValue={"$10.00"} />
                            <Textarea placeholder="what is this for? (optional)" />
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">DBS Visa Debit Card</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">POSB Debit Card</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3"><Input placeholder="Add a payment method"/></Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                    <CardFooter>
                    <Link href="/dashboard/success">
                        <Button className="rounded-full">Make a transfer</Button>
                    </Link>
                    </CardFooter>

                </Card>
            </TabsContent>
        </Tabs>
    )
}
