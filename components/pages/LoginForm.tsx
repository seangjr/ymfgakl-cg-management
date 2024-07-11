'use client'

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
import { toast } from "sonner"

export function LoginForm({ formAction, error }: { formAction: string | ((formData: FormData) => void) | undefined, error?: string }) {

  if (error && error == "400") {
    toast.error("Invalid login credentials")

    // Clear the error
    setTimeout(() => {
      toast.dismiss()
    }, 2000)
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" placeholder="testing@ymfgakl.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input name="password" id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" formAction={formAction}>Sign in</Button>
      </CardFooter>
    </Card>
  )
}
