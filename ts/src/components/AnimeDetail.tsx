import React from 'react';
import { Card } from 'primereact/card';

interface AnimeDetailProps {
    anime: Media;
}

interface AimeDetailStats {
    Format: string;
    Episodes: number | undefined;
    Status: string;
    StartDate: string;
    EndDate: string;
    Season: string;
    AverageScore: number;
    Genres: string[];
    Producers: string[];
    Studios: string[];
}

const AnimeDetail: React.FC<AnimeDetailProps> = ({ anime }) => {
    console.log(anime)

    const capitalizeFirstLetter = (str: string) => {
        return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const stats = (anime: Media) => {
        const s: AimeDetailStats = {
            Format: anime.format,
            Episodes: anime.episodes,
            Status: capitalizeFirstLetter(anime.status),
            StartDate: anime.startDate?.year,
            EndDate: anime.endDate?.year,
            Season: anime.seasonYear,
            AverageScore: anime.averageScore,
            Genres: anime.genres,
            Studios: anime.studios,
        }
        return s;
    }

    const z = (text: string | undefined) => {
        if (text != undefined) {
            const a = text.split('<br>')
            return a;
        }
        else {
            return [];
        }
    }

    const sun = stats(anime);

    return (
        <div className="p-grid p-dir-col">

            <div className="dkf">
                <img className="disc" src={anime.coverImage?.large} alt="Cover" />
                <div>
                    <h4>{anime.title?.romaji}</h4>
                    <div className="description">
                        {z(anime.description).map((item, i) => (
                            <div key={i}>{item}<br /></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="main-grid-detail">
                <div>
                    <div>
                        {Object.entries(sun).map(([key, value]) => (
                            Array.isArray(value) ? (
                                <div className="data-set" key={key}>
                                    <div className="type">{key}</div>
                                    <div className="values">
                                        {value.map((item, index) => (
                                            <div className="values" key={index}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="data-set" key={key}>
                                    <div className="type">{key}</div>
                                    <div className="value">{value}</div>
                                </div>
                            )
                        ))}
                    </div>
                    <div className="data-set">
                        <div className="type">Format</div>
                        <div className="value">TV</div>
                    </div>
                </div>
                <div>
                    <h2>Characters43</h2>
                    <div className="grid-wrap">
                        {anime.characters?.edges.slice(0, 6).map((character, index) => (
                            <div className="role-card" key={index}>

                                <div className="character">
                                    <a href="/character/123285/Asta" className="xz"
                                       style={{backgroundImage: `url(${character.node?.image?.medium})`}}></a>
                                    <div className="content">
                                        <div>{character.node?.name?.full}</div>
                                        <div>{capitalizeFirstLetter(character.role)}</div>
                                    </div>
                                </div>
                                <div className="staff">
                                    <a href="/character/123285/Asta" className="xz"
                                       style={{backgroundImage: `url(${character.voiceActors[0].image?.medium})`}}></a>
                                    <div className="content">
                                        <div>{character.voiceActors[0].name?.full}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;