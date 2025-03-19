import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Check users
    const userCount = await prisma.user.count();
    const users = await prisma.user.findMany();
    
    // Check dashboards
    const dashboardCount = await prisma.dashboard.count();
    
    // Check widgets
    const widgetCount = await prisma.widget.count();
    
    return NextResponse.json({
      status: 'success',
      counts: {
        users: userCount,
        dashboards: dashboardCount,
        widgets: widgetCount
      },
      users: users
    });
  } catch (error) {
    console.error('Error checking database:', error);
    return NextResponse.json(
      { error: 'Failed to check database', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 