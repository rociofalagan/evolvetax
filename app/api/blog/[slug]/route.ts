import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const databaseId = process.env.NOTION_DATABASE_ID;
    const notionToken = process.env.NOTION_TOKEN;

    if (!databaseId || !notionToken) {
      return NextResponse.json(
        { error: 'Notion credentials not configured' },
        { status: 500 }
      );
    }

    const notion = new Client({
      auth: notionToken,
    });

    // Query all published articles
    const response = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published',
        },
      },
    });

    // Find the article with matching slug
    const page: any = response.results.find((page: any) => {
      const pageSlug = page.properties.Slug_EN?.rich_text?.[0]?.plain_text || '';
      return pageSlug === slug;
    });

    if (!page) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    const properties = page.properties;

    // Get the page content (blocks)
    const blocks = await notion.blocks.children.list({
      block_id: page.id,
    });

    const article = {
      id: page.id,
      title: properties.Title?.title?.[0]?.plain_text || 'Untitled',
      slug: properties.Slug_EN?.rich_text?.[0]?.plain_text || '',
      excerpt: properties.Excerpt_EN?.rich_text?.[0]?.plain_text || '',
      category: properties.Category?.select?.name || 'Uncategorized',
      date: properties.Publish_Date?.date?.start || new Date().toISOString(),
      author: properties.Author?.rich_text?.[0]?.plain_text || 'EvolveTax Team',
      authorRole: properties.Author_Role?.rich_text?.[0]?.plain_text || '',
      image: properties.Featured_Image?.url ||
             'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400',
      readingTime: properties.Reading_Time?.number || 5,
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      seoTitle: properties.SEO_Title_EN?.rich_text?.[0]?.plain_text || '',
      seoDescription: properties.SEO_Description_EN?.rich_text?.[0]?.plain_text || '',
      content: blocks.results,
    };

    return NextResponse.json({ article });
  } catch (error: any) {
    console.error('Error fetching article from Notion:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article', details: error.message },
      { status: 500 }
    );
  }
}
