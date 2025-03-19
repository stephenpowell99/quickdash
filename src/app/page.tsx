import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Logo colors from the provided image
const logoGreen = "#4CAF50";
const logoDark = "#323232";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/quickdash-logo.png"
              alt="QuickDash AI Logo"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-[#4CAF50]"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-[#4CAF50]"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-600 hover:text-[#4CAF50]"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-[#4CAF50]"
            >
              Log In
            </Link>
            <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                AI-Powered QuickBooks Dashboards in Seconds
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Create custom financial reports and dashboards using simple
                prompts. Connect to QuickBooks Online and transform your
                accounting data into actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-8 py-6 text-lg">
                  Start Your Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10 px-8 py-6 text-lg"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#4CAF50]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
                <div className="text-gray-400 text-center p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto mb-4 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                  <p>Dashboard Preview</p>
                  <p className="text-sm mt-2">
                    Financial insights powered by AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Powerful Features for Financial Insights
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your QuickBooks data into clear, actionable insights
              using AI-powered analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4CAF50]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI-Powered Creation
              </h3>
              <p className="text-gray-600">
                Create custom dashboards and reports using natural language
                prompts. No design skills needed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4CAF50]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Seamless QuickBooks Integration
              </h3>
              <p className="text-gray-600">
                Connect securely to your QuickBooks Online account with
                real-time data synchronization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4CAF50]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Team Permissions
              </h3>
              <p className="text-gray-600">
                Share dashboards with your team and control access with granular
                permission settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How QuickDash AI Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Connect QuickBooks
              </h3>
              <p className="text-gray-600">
                Securely link your QuickBooks Online account with just a few
                clicks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Describe Your Dashboard
              </h3>
              <p className="text-gray-600">
                Tell our AI what insights you need using simple language.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Share with Your Team
              </h3>
              <p className="text-gray-600">
                Invite team members and set permissions for each dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by Financial Professionals
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              See what our customers are saying about QuickDash AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-[#4CAF50]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "QuickDash AI has transformed how we analyze our financial data.
                What used to take days now takes minutes, and the insights are
                more actionable than ever."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3">
                  {/* Placeholder for testimonial avatar */}
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">CFO, TechStart Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-[#4CAF50]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The ability to create custom reports with simple prompts has
                made financial reporting accessible to everyone on our team, not
                just the accounting department."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3">
                  {/* Placeholder for testimonial avatar */}
                </div>
                <div>
                  <p className="font-medium text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-600">
                    Owner, Chen Consulting
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-[#4CAF50]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As an accountant serving multiple clients, QuickDash AI has
                become an essential tool for providing high-value insights
                alongside our traditional services."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3">
                  {/* Placeholder for testimonial avatar */}
                </div>
                <div>
                  <p className="font-medium text-gray-900">Alicia Rodriguez</p>
                  <p className="text-sm text-gray-600">
                    Partner, Rodriguez & Associates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Starter
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                $29
                <span className="text-lg font-normal text-gray-600">
                  /month
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for small businesses just getting started.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Connect 1 QuickBooks account
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Up to 5 dashboards</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">3 team members</span>
                </li>
              </ul>
              <Button className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-[#4CAF50] relative">
              <div className="absolute top-0 right-0 bg-[#4CAF50] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                $79
                <span className="text-lg font-normal text-gray-600">
                  /month
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                For growing businesses with advanced reporting needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Connect 3 QuickBooks accounts
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Unlimited dashboards</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">10 team members</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Advanced AI features</span>
                </li>
              </ul>
              <Button className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                $199
                <span className="text-lg font-normal text-gray-600">
                  /month
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                For larger organizations with complex reporting needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Unlimited QuickBooks accounts
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Unlimited dashboards</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Unlimited team members</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#4CAF50] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4CAF50] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Reporting?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using QuickDash AI to get actionable
            insights from their QuickBooks data.
          </p>
          <Button className="bg-white text-[#4CAF50] hover:bg-gray-100 px-8 py-6 text-lg">
            Start Your Free 14-Day Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/images/quickdash-logo.png"
                alt="QuickDash AI Logo"
                width={150}
                height={40}
                className="h-10 w-auto mb-4 brightness-[1.75] filter"
                priority
              />
              <p className="text-sm">
                AI-powered financial dashboards for QuickBooks Online users.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    API Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 QuickDash AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
