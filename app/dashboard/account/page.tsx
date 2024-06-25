
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8">
      <div className="flex flex-col items-center space-y-6 sm:space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-muted-foreground">Account #12345678</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="space-y-4">
            <div>
              <Label htmlFor="bank-card">Bank Card</Label>
              <Input id="bank-card" type="text" defaultValue="**** **** **** 1234" readOnly />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" rows={3} defaultValue="123 Main St, Anytown USA" readOnly />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 555-5555" readOnly />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" readOnly />
            </div>
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="text" defaultValue="January 1, 1980" readOnly />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" type="text" defaultValue="United States" readOnly />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-muted-foreground">
                Forget Password
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Change Password</DialogTitle>
                <DialogDescription>
                  Enter your current password and a new password to update your account.
                </DialogDescription>
              </DialogHeader>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <DialogFooter>
                  <div>
                    <Button type="submit">Update Password</Button>
                  </div>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}