import React from 'react';

const ArticleCard: React.FC<{
    text: string;
    imageUrl: string;
    title: string;
    link: string;
}> = ({text, imageUrl, title, link}) => {
    return (
        <a href={link}>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg transform w-64">
                <img
                    alt={title}
                    src={imageUrl}
                    className="absolute w-full h-full"
                />

                <div className="relative bg-gradient-to-t from-gray-900/90 hover:from-gray-900/50 to-gray-900/25 pt-32">
                    <div className="p-4 sm:p-6">
                        <h3 className="mt-0.5 text-lg text-white">{title}</h3>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            {text}
                        </p>
                    </div>
                </div>
            </article>
        </a>
    );
};

export default ArticleCard;