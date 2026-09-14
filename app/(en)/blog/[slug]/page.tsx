'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  readingTime: number;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  content: any[];
}

// Helper function to render Notion blocks
const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p key={id} className="mb-5 text-base leading-relaxed text-[#1b1b1b]/70">
          {value.rich_text.map((text: any, i: number) => {
            const content = text.plain_text;

            // Handle links
            if (text.href) {
              return (
                <a
                  key={i}
                  href={text.href}
                  className="text-[#6B2C2C] font-semibold underline hover:text-[#8B3C3C] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            }

            if (text.annotations.bold) {
              return <strong key={i} className="font-semibold text-[#1b1b1b]">{content}</strong>;
            }
            if (text.annotations.italic) {
              return <em key={i}>{content}</em>;
            }
            if (text.annotations.code) {
              return <code key={i} className="px-2 py-1 bg-[#6B2C2C]/10 text-[#6B2C2C] rounded font-mono text-sm">{content}</code>;
            }
            return <span key={i}>{content}</span>;
          })}
        </p>
      );

    case 'heading_1':
      return (
        <h1 key={id} className="text-2xl md:text-3xl font-bold text-[#1b1b1b] mb-5 mt-10 tracking-tight">
          {value.rich_text[0]?.plain_text || ''}
        </h1>
      );

    case 'heading_2':
      return (
        <h2 key={id} className="text-xl md:text-2xl font-bold text-[#1b1b1b] mb-4 mt-8 tracking-tight">
          {value.rich_text[0]?.plain_text || ''}
        </h2>
      );

    case 'heading_3':
      return (
        <h3 key={id} className="text-lg md:text-xl font-semibold text-[#1b1b1b] mb-3 mt-6 tracking-tight">
          {value.rich_text[0]?.plain_text || ''}
        </h3>
      );

    case 'bulleted_list_item':
      return (
        <li key={id} className="mb-2 text-base leading-relaxed text-[#1b1b1b]/70 ml-6 list-disc">
          {value.rich_text.map((text: any, i: number) => {
            const content = text.plain_text;
            if (text.annotations.bold) {
              return <strong key={i} className="font-semibold text-[#1b1b1b]">{content}</strong>;
            }
            return <span key={i}>{content}</span>;
          })}
        </li>
      );

    case 'numbered_list_item':
      return (
        <li key={id} className="mb-2 text-base leading-relaxed text-[#1b1b1b]/70 ml-6 list-decimal">
          {value.rich_text[0]?.plain_text || ''}
        </li>
      );

    case 'divider':
      return <hr key={id} className="my-8 border-[#1b1b1b]/10" />;

    case 'quote':
      return (
        <blockquote key={id} className="border-l-4 border-[#6B2C2C] pl-6 py-3 my-6 bg-[#6B2C2C]/5 rounded-r-lg">
          <p className="italic text-base md:text-lg text-[#1b1b1b]/80 leading-relaxed">
            {value.rich_text[0]?.plain_text || ''}
          </p>
        </blockquote>
      );

    case 'code':
      return (
        <pre key={id} className="bg-[#1b1b1b] text-white p-6 rounded-xl my-8 overflow-x-auto border border-[#1b1b1b]/10">
          <code className="font-mono text-sm leading-relaxed">{value.rich_text[0]?.plain_text || ''}</code>
        </pre>
      );

    default:
      return null;
  }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error('Article not found');
        }
        const data = await response.json();
        setArticle(data.article);
      } catch (err: any) {
        console.error('Error fetching article:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#eeede9]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B2C2C]"></div>
          <p className="mt-4 text-[#1b1b1b]/70">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#eeede9]">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-[#1b1b1b] mb-4">Article Not Found</h1>
          <p className="text-[#1b1b1b]/70 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B2C2C] text-white rounded-full font-semibold hover:bg-[#8B3C3C] transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eeede9] to-white">
      {/* Subtle Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#1b1b1b 1px, transparent 1px), linear-gradient(90deg, #1b1b1b 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Content Container */}
      <div className="relative">
        {/* Breadcrumbs & Back Navigation */}
        <div className="pt-24 pb-8 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#1b1b1b]/60 hover:text-[#6B2C2C] transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <header className="pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#6B2C2C]/10 text-[#6B2C2C] text-sm font-semibold rounded-full">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-6 leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-[#1b1b1b]/60 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex items-center gap-6 text-[#1b1b1b]/60 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6B2C2C] rounded-full flex items-center justify-center text-white font-semibold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#1b1b1b]">{article.author}</p>
                  <p className="text-xs">{article.authorRole}</p>
                </div>
              </div>
              <span>•</span>
              <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{article.readingTime} min read</span>
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#6B2C2C]/5 text-[#6B2C2C] rounded-lg text-sm font-medium hover:bg-[#6B2C2C]/10 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article Content Card */}
        <article className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.map((block: any) => renderBlock(block))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
