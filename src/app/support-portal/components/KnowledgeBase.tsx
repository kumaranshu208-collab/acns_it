import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Article {
  id: string;
  title: string;
  category: string;
  views: number;
  helpful: number;
}

interface KnowledgeBaseProps {
  articles: Article[];
  onArticleClick: (articleId: string) => void;
  onSearchClick: () => void;
}

const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ articles, onArticleClick, onSearchClick }) => {
  const categories = ['All', 'Networking', 'Hardware', 'Software', 'Security'];

  return (
    <section className="py-12 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4 md:mb-0">
            Knowledge Base
          </h2>
          <button
            onClick={onSearchClick}
            className="flex items-center space-x-2 px-6 py-3 bg-card hover:bg-background border border-border rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300"
          >
            <Icon name="MagnifyingGlassIcon" size={20} className="text-text-secondary" />
            <span className="text-sm font-medium text-text-primary">Search Articles</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-card hover:bg-primary hover:text-primary-foreground text-text-secondary text-sm font-medium rounded-lg border border-border transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <button
              key={article.id}
              onClick={() => onArticleClick(article.id)}
              className="bg-card hover:bg-background p-6 rounded-xl border border-border shadow-subtle hover:shadow-elevated transition-all duration-300 text-left group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                  {article.category}
                </span>
                <Icon name="ArrowRightIcon" size={20} className="text-text-secondary group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="EyeIcon" size={16} />
                  <span>{article.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="HandThumbUpIcon" size={16} />
                  <span>{article.helpful}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;