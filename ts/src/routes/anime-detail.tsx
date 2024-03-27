import React from "react";
import {useLocation} from "react-router-dom";
import AnimeDetail from "components/AnimeDetail.tsx";

const AnimeDetailPage: React.FC = () => {
    const location = useLocation();
    const anime = location.state as Media;

    return (
        <div className="p-grid p-justify-center">
            <div className="p-col-10">
                <h1>Anime Detail</h1>
                {anime ? <AnimeDetail anime={anime} /> : <div>Anime not found</div>}
            </div>
        </div>
    );
};

export default AnimeDetailPage;
