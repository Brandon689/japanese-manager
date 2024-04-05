export const SubtitleService = {
    async getSubtitlesData(search: string): Promise<AnitogoSubs[]> {
        try {
            const response = await fetch('http://127.0.0.1:8090/subtitles/' + search);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data: AnitogoSubs[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [] as AnitogoSubs[];
        }
    }
};


export async function fetchFileContent(anime: string, filename: string): Promise<string | null> {
    try {
        const response = await fetch(`http://127.0.0.1:8090/subtitles/${anime}/${filename}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
        }

        // Assuming the response is a text file, we use text() method to read it
        return await response.text();
    } catch (error) {
        console.error('Error fetching file:', error);
        return null;
    }
}

