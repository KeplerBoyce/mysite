import Link from "next/link"
import { useRouter } from "next/router";
import NavLink from "./NavLink";

export default function Header() {
	const router = useRouter();
    
    return (
        <div className="sticky top-0 bg-white bg-opacity-50 backdrop-blur flex gap-6 items-end p-2 pl-4 mx-4 border-b">
            <span className="font-bold text-xl hover:text-rose-600 duration-150">
                <Link href='/'>
                    Kepler Boyce
                </Link>
            </span>
            <span>•</span>
            <NavLink href='/speedcubing' name="Speedcubing" />
            <NavLink href='/programming' name="Programming projects" />
            <NavLink href='/blender-unity' name="Blender and Unity" />
            <NavLink href='/climbing' name="Rock climbing" />
        </div>
    )
}
