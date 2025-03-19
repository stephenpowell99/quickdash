import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Set passwords for existing users that don't have one
  const usersWithoutPassword = await prisma.user.findMany({
    where: {
      password: null
    }
  });

  console.log(`Found ${usersWithoutPassword.length} users without passwords`);

  // Set a default password for existing users
  const defaultPassword = 'password123'; // This is just for testing
  const hashedPassword = await hash(defaultPassword, 10);

  for (const user of usersWithoutPassword) {
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword }
    });
    console.log(`Updated password for user: ${user.email}`);
  }

  // Only seed if no users exist
  const userCount = await prisma.user.count();
  
  if (userCount === 0) {
    // Clean existing data
    await prisma.widget.deleteMany({});
    await prisma.dashboard.deleteMany({});
    await prisma.user.deleteMany({});

    console.log('Seeding database...');

    // Create a test user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        password: hashedPassword,
      },
    });

    console.log(`Created user: ${user.name} (${user.email})`);

    // Create a dashboard
    const dashboard = await prisma.dashboard.create({
      data: {
        name: 'My First Dashboard',
        description: 'A sample dashboard with widgets',
        userId: user.id,
      },
    });

    console.log(`Created dashboard: ${dashboard.name}`);

    // Create some widgets
    const widgets = await Promise.all([
      prisma.widget.create({
        data: {
          name: 'Statistics',
          type: 'chart',
          position: { x: 0, y: 0, w: 6, h: 4 },
          data: { type: 'bar', labels: ['Jan', 'Feb', 'Mar'], datasets: [{ data: [10, 20, 30] }] },
          dashboardId: dashboard.id,
        },
      }),
      prisma.widget.create({
        data: {
          name: 'Notes',
          type: 'text',
          position: { x: 6, y: 0, w: 6, h: 4 },
          data: { content: 'This is a sample note widget' },
          dashboardId: dashboard.id,
        },
      }),
      prisma.widget.create({
        data: {
          name: 'Todo List',
          type: 'list',
          position: { x: 0, y: 4, w: 12, h: 4 },
          data: { items: ['Create dashboard', 'Add widgets', 'Share with team'] },
          dashboardId: dashboard.id,
        },
      }),
    ]);

    console.log(`Created ${widgets.length} widgets`);
  } else {
    console.log(`Database already contains ${userCount} users. Skipping seed.`);
  }
  
  console.log('Database seeding completed');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 