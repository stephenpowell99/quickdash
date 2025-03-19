"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Layout, Plus, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Brand colors
const brandGreen = "#4CAF50";
const brandDark = "#323232";

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated (this is a fallback, middleware should handle this)
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/quickdash-logo.png"
                alt="QuickDash AI Logo"
                width={140}
                height={40}
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700 hidden md:inline">
              {user?.name || user?.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                await logout();
                router.push("/login");
              }}
              className="border-gray-300 hover:bg-gray-100 hover:text-gray-900 text-gray-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">My Dashboards</h2>
          <Button
            style={{ backgroundColor: brandGreen }}
            className="text-white hover:bg-green-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Dashboard
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example dashboard cards */}
          <Card className="hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center text-lg">
                <span>Analytics Dashboard</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-500 mb-4 text-sm">
                Last updated 2 days ago
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <Layout className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">4 widgets</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm hover:text-green-600"
                  style={{ color: brandGreen }}
                >
                  Open
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 border-dashed border-gray-300 bg-transparent flex items-center justify-center p-6">
            <div className="text-center">
              <div className="rounded-full bg-gray-100 p-3 mb-2 inline-block">
                <Plus className="h-6 w-6 text-gray-400" />
              </div>
              <p className="font-medium text-gray-500">Create New Dashboard</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
