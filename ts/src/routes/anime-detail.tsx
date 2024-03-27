import {useLoaderData, useLocation} from 'react-router-dom';

type Cat = {
    name: string;
}

export function loader() {
    const contact: Cat = {
        name: "five"
    };
    return contact;
}

export default function AnimeDetail() {
    //const contact = useLoaderData() as Cat;
    const c = useLocation();
    const anime = c.state as Media;
    return (
        <div id="contact">
            {anime.id}
        </div>
    );
}
