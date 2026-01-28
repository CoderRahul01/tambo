import { ExternalLink, Info, Star } from "lucide-react";
import React from "react";
import { z } from "zod";
import "../styles/components.css";

export const SearchResultCardSchema = z.object({
  id: z.string().describe("Unique identifier for the result"),
  title: z.string().describe("The main title or heading of the search result"),
  description: z
    .string()
    .optional()
    .describe("A brief summary or snippet of the result"),
  url: z.string().optional().describe("The source URL or link for the result"),
  imageUrl: z.string().optional().describe("An optional preview image URL"),
  category: z
    .string()
    .optional()
    .describe("Categorization label (e.g., 'Article', 'Product', 'Place')"),
  rating: z
    .number()
    .optional()
    .describe("Optional numerical rating from 0 to 5"),
});

export type SearchResultCardProps = z.infer<typeof SearchResultCardSchema>;


export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  title,
  description,
  url,
  imageUrl,
  category,
  rating,
}) => {
  return (
    <div className="result-card animate-fade-in">
      <div className="result-card-inner">
        {imageUrl && (
          <div className="result-card-image-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt={title} className="result-card-image" />
          </div>
        )}
        <div className="result-card-content">
          <div>
            <div className="result-card-header">
              {category && (
                <span className="result-card-category">{category}</span>
              )}
              {rating !== undefined && (
                <div className="result-card-rating">
                  <Star size={14} className="rating-star" fill="currentColor" />
                  {rating.toFixed(1)}
                </div>
              )}
            </div>
            <h3 className="result-card-title">{title}</h3>
            {description && (
              <p className="result-card-description">{description}</p>
            )}
          </div>

          {url && (
            <div className="result-card-footer">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="result-card-link"
              >
                View Details
                <ExternalLink size={16} />
              </a>
              <button className="info-button" title="More Information">
                <Info size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
