// src/app/api/comments/route.ts
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

interface Comment {
  id: number;
  vendorId: string;
  comment: string;
  createdAt: Date;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const vendorId = searchParams.get('vendorId');
  
    if (!vendorId) {
      return NextResponse.json({ error: 'Missing vendor id' }, { status: 400 });
    }
  
    try {
      const result = await pool.query<Comment>(
        `SELECT * FROM comments WHERE vendorId = $1 ORDER BY createdAt DESC`,
        [vendorId]
      );
      return NextResponse.json(result.rows, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Error fetching comments' }, { status: 500 });
    }
  }
  

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { vendorId, comment } = body as { vendorId: string; comment: string };

    if (!vendorId || !comment) {
      return NextResponse.json({ error: 'Missing vendor id or comment' }, { status: 400 });
    }

    const result = await pool.query<Comment>(
      `INSERT INTO comments (vendorId, comment, createdAt) VALUES ($1, $2, NOW()) RETURNING *`,
      [vendorId, comment]
    );
    return NextResponse.json(result.rows[0], { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error adding comment' }, { status: 500 });
  }
}
