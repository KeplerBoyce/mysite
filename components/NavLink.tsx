import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavLink(props: {href: string, name: string}) {
    const { href, name } = props;
    const { pathname } = useRouter();

    return (
        <Link href={href}>
            {pathname === href ? (
                <p className="font-bold">
                    {name}
                </p>
            ) : (
                <button className="hover:text-rose-600 duration-150">
                    {name}
                </button>
            )}
        </Link>
    );
}