"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Brand colors
const brandGreen = "#4CAF50";
const brandDark = "#323232";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await login(email, password);

      if (result.success) {
        router.push("/dashboard");
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md flex flex-col items-center mb-6">
        <Link href="/" className="mb-8 block">
          <Image
            src="/images/quickdash-logo.png"
            alt="QuickDash AI Logo"
            width={180}
            height={48}
            priority
            className="cursor-pointer"
          />
        </Link>
      </div>

      <Card
        className="w-full max-w-md border-t-4"
        style={{ borderTopColor: brandGreen }}
      >
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Log in to your QuickDash account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
                className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm hover:underline"
                  style={{ color: brandGreen }}
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
                className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full text-white"
              style={{ backgroundColor: brandGreen }}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium hover:underline"
                style={{ color: brandGreen }}
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
