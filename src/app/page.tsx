import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">QuickDash</h1>
        <p className="text-muted-foreground">
          A barebones Next.js dashboard with PostgreSQL and Prisma ORM
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Set up your database and configuration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Update your database connection in the .env file and run
              migrations to get started.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="https://github.com/your-username/quickdash">
                View Documentation
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>PostgreSQL Database</CardTitle>
            <CardDescription>Connected with Prisma ORM</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The application uses PostgreSQL with Prisma ORM for database
              operations. Run migrations to set up your database schema.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="https://www.prisma.io/docs">Prisma Docs</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>shadcn/ui Components</CardTitle>
            <CardDescription>Beautiful UI components</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This project uses shadcn/ui for consistent and accessible UI
              components built with Radix UI and Tailwind CSS.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="https://ui.shadcn.com">shadcn/ui Docs</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <footer className="border-t pt-6 text-center text-sm text-muted-foreground">
        <p>QuickDash - Built with Next.js, Prisma, and PostgreSQL</p>
      </footer>
    </div>
  );
}
