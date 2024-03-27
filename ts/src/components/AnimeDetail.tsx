import React from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

interface AnimeDetailProps {
    anime: Media;
}

const AnimeDetail: React.FC<AnimeDetailProps> = ({ anime }) => {
    return (
        <div className="p-grid p-dir-col">
            <div className="p-col">
                <Card title={anime.title?.romaji}>
                    <img src={anime.coverImage?.large} alt="Cover" />
                    <p>{anime.description}</p>
                </Card>
            </div>
            <div className="p-col">
                <div className="p-grid p-justify-center">
                    <div className="p-col">
                        <h3>Genres</h3>
                        {anime.genres.map((genre, index) => (
                            <Tag key={index} value={genre} />
                        ))}
                    </div>
                    <div className="p-col">
                        <h3>Format</h3>
                        <p>{anime.format}</p>
                    </div>
                    <div className="p-col">
                        <h3>Status</h3>
                        <p>{anime.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;