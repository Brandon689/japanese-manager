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
                <div data-v-5776f768="" className="banner" style={{backgroundImage: `url(${anime.bannerImage})`}}>
                    <div data-v-5776f768="" className="shadow"></div>
                </div>
                <Card title={anime.title?.romaji}>
                    <img src={anime.coverImage?.large} alt="Cover"/>
                    <div>{anime.description}</div>
                </Card>
            </div>
            <div className="main-grid-detail">

                <div className="p-col">
                    <div className="p-col">
                        <div>Genres</div>
                        {anime.genres.map((genre, index) => (
                            <div key={index}>{genre}</div>
                        ))}
                    </div>
                    <div className="p-col">
                        <div>Format</div>
                        <div>{anime.format}</div>
                    </div>
                    <div className="">
                        <div>Status</div>
                        <div>{anime.status}</div>
                    </div>
                    <div className="">
                        <div>Episodes</div>
                        <div>{anime.episodes}</div>
                    </div>
                    <div className="">
                        <div>Episodes</div>
                        <div>{anime.seasonYear}</div>
                    </div>
                    <div className="">
                        <div>Episodes</div>
                        <div>{anime.season}</div>
                    </div>
                    <div className="">
                        <div>Episodes</div>
                        <div>{anime.startDate.year}</div>
                    </div>
                    <div className="">
                        <div>popularity</div>
                        <div>{anime.popularity}</div>
                    </div>
                    <div className="">
                        <div>sc</div>
                        <div>{anime.averageScore}</div>
                    </div>
                    <div className="">
                        <div>Episodes</div>
                        <div>{anime.duration}</div>
                    </div>
                    <div className="">
                        <div>Type</div>
                        <div>{anime.type}</div>
                    </div>
                </div>

                <div>
                    dww
                    {anime.characters?.edges.map((genre, index) => (
                        <div key={index}>{genre.node?.name?.first}{genre.id}{genre.node?.age}</div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default AnimeDetail;