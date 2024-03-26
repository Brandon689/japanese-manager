import {useLoaderData, useLocation} from 'react-router-dom';

type Cat = {
    name: string;
}

export function loader() {
    console.log("***slime***")

    const contact: Cat = {
        name: "five*"
    };
    return contact;
}

export default function Contact() {
    const contact = useLoaderData() as Cat;
    const c = useLocation();
    console.log("so")
    console.log(c)
    console.log("what")
    return (
        <div id="contact">
            {contact.name} c
        </div>
    );
}
