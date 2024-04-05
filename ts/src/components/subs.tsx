import { useEffect, useState } from "react";
import { SubtitleService, fetchFileContent } from "../api/fs/fs";
import { parseSync } from 'subtitle'

interface FolderName {
    name: Media;
}

const Subtitles: React.FC<FolderName> = (props) => {
    const [subtitles, setSubtitles] = useState<AnitogoSubs[]>([]);
    const [fileContent, setFileContent] = useState(null);
    useEffect(() => {
        async function fetchSubtitles() {
            try {
                const subtitlesData = await SubtitleService.getSubtitlesData(props.name.title?.romaji);
                console.log(subtitlesData)
                console.log(props.name.title?.romaji)
                for (var i = 0; i < subtitlesData.length; i++) {
                    subtitlesData[i].episode = parseInt(subtitlesData[i].episode_number);
                }
                subtitlesData.sort((a, b) => a.episode - b.episode);
                setSubtitles(subtitlesData);
            } catch (error) {
                console.error('Error fetching subtitles data:', error);
            }

            const x = await fetchFileContent("Wotaku ni Koi wa Muzukashii", "yuru_camp_ep7.srt")
            setFileContent(x);
    
        }
        fetchSubtitles();
    }, [props]);

    console.log("AYAY")
    if (fileContent === null) {
        return <div>Loading...</div>;
    }
    console.log("AAA")

    try {
        console.log(fileContent)
        const v = parseSync(fileContent)
        console.log(v)
    }
    catch (error) {
        console.log(error)
    }
    const lines = fileContent.split('\n');


    return (
        <div>
            <h2>Subtitles</h2>
            <ul>
                {subtitles.map((subtitle, index) => (
                    <li key={index}>{subtitle.anime_title} Episode {subtitle.episode_number}</li>
                ))}
            </ul>
            <div>
                {lines.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        </div>
    );
};

export default Subtitles;
