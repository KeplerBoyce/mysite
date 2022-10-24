export default function NiceLink(props: {text: string, href: string}) {
    const {text, href} = props;

    return (
        <a className="text-sky-500 hover:text-sky-700 duration-150 underline" target="_blank" rel="noreferrer" href={href}>
            {text}
        </a>
    )
}
