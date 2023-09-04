export default function NiceLink(props: {
    text: string,
    href: string,
    left?: boolean,
    right?: boolean,
    className?: string,
}) {
    const {text, href, left, right, className} = props;

    return (
        <a
            className={"text-sky-600 hover:text-sky-800 duration-150 underline "
                    + (left ? "ml-1 " : "") + (right ? "mr-1 " : "") + className}
            target="_blank"
            rel="noreferrer"
            href={href}
        >
            {text}
        </a>
    )
}
