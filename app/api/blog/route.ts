import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const notionToken = process.env.NOTION_TOKEN;

    if (!databaseId || !notionToken) {
      return NextResponse.json(
        { error: 'Notion credentials not configured' },
        { status: 500 }
      );
    }

    // Initialize Notion client inside the function
    const notion = new Client({
      auth: notionToken,
    });

    // Query the Notion data source (v5 API uses dataSources instead of databases)
    const response = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published',
        },
      },
      sorts: [
        {
          property: 'Publish_Date',
          direction: 'descending',
        },
      ],
    });

    // Map Notion data to our article format
    const articles = response.results.map((page: any) => {
      const properties = page.properties;

      return {
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
      };
    });

    return NextResponse.json({ articles });
  } catch (error: any) {
    console.error('Error fetching from Notion:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles', details: error.message },
      { status: 500 }
    );
  }
}
