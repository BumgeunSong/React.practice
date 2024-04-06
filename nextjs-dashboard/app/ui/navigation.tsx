// use client가 있든 없든 컴포넌트는 서버에서 HTML로 렌더링된다.
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname()
    console.log(path)
    return <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about-us">About us</Link>
            </li>
        </ul>
    </nav>
}