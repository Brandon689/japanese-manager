import { useEffect, useState } from "react";
import { SubtitleService, fetchFileContent } from "../api/fs/fs";
import { parseSync, stringifySync } from 'subtitle'

const Regent = () => {
    //const [fileContent, setFileContent] = useState(null);
    useEffect(() => {
        async function fetchSubtitles() {
            //try {
            //    const subtitlesData = await SubtitleService.getSubtitlesData(props.name.title?.romaji);
            //    console.log(subtitlesData)
            //    console.log(props.name.title?.romaji)
            //    for (var i = 0; i < subtitlesData.length; i++) {
            //        subtitlesData[i].episode = parseInt(subtitlesData[i].episode_number);
            //    }
            //    subtitlesData.sort((a, b) => a.episode - b.episode);
            //    setSubtitles(subtitlesData);
            //} catch (error) {
            //    console.error('Error fetching subtitles data:', error);
            //}

            const x = await fetchFileContent("Wotaku ni Koi wa Muzukashii", "yuru_camp_ep7.srt")
            const v = parseSync(x)
            //console.log(v)
            //console.log(x)
            //setFileContent(x);

            //console.log("AYAY")
            //if (fileContent === null) {
            //    return <div>Loading...</div>;
            //}
            //console.log("AAA")

            //try {
            //    console.log(fileContent)
            //    const v = parseSync(fileContent)
            //    console.log(v)
            //}
            //catch (error) {
            //    console.log(error)
            //}
        }
        fetchSubtitles();
    },[]);




    return (
        <div>
        The king wears a crown of thorns
        </div>
    );
};

export default Regent;