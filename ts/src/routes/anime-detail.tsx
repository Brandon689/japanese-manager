import React from "react";
import {useLocation} from "react-router-dom";
import AnimeDetail from "components/AnimeDetail.tsx";
import FileUploader from "../components/file-upload";
import Subtitles from "../components/subs";
import Regent from "components/fetchsubtext.tsx";

const AnimeDetailPage: React.FC = () => {
    const location = useLocation();
    const anime = location.state as Media;

    return (
        <>
            {/*<div className="xfckljsd">{anime ? <AnimeDetail anime={anime} /> : <div>Anime not found</div>}</div>*/}
            {/*<FileUploader name={anime.title?.romaji} />*/}
            {/*<Subtitles name={anime} />*/}
            <Regent/>
        </>
    );
};

export default AnimeDetailPage;
