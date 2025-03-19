# QuickDash AI

QuickDash AI is a SaaS application that connects to QuickBooks Online to create AI-powered financial dashboards and reports. Users can generate custom dashboards using natural language prompts and share them with team members.

## Features

- **AI-Powered Dashboard Creation**: Create custom financial reports using simple text prompts.
- **QuickBooks Online Integration**: Securely connect to your accounting data.
- **Team Permissions**: Share dashboards with controlled access.
- **Responsive Design**: Works on desktop, tablet, and mobile.

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: (To be implemented)
- **AI**: (To be implemented)
- **QuickBooks Integration**: (To be implemented)

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your PostgreSQL database
4. Update the `.env` file with your database connection string:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/quickdash?schema=public"
   ```
5. Generate Prisma client:
   ```
   npx prisma generate
   ```
6. Run database migrations:
   ```
   npx prisma migrate dev --name init
   ```
7. Start the development server:
   ```
   npm run dev
   ```
8. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Schema

The application uses the following database schema:

- **User**: Represents application users
- **Dashboard**: Represents dashboards created by users
- **Widget**: Represents widgets that can be added to dashboards

## Creating Migrations

To create a new migration after modifying the schema:

```
npx prisma migrate dev --name migration_name
```

## Generating Types

After changing the Prisma schema, generate updated TypeScript types:

```
npx prisma generate
```

## Deployment

Before deploying to production, build the application:

```
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
