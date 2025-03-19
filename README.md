# QuickDash

A barebones Next.js dashboard application with PostgreSQL and Prisma ORM.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- shadcn/ui (to be implemented)

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your PostgreSQL database
4. Update the `.env` file with your database connection string:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/dbname?schema=public"
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

Then deploy your application along with the database migrations:

```
npx prisma migrate deploy
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
