// use client가 있든 없든 컴포넌트는 최초에 서버에서 plain HTML로 렌더링된다.
// hydration이 일어나서 react component가 되는 것은 use client로 마크된 파일의 컴포넌트뿐이다.
// hook을 썼는데 use client를 쓰지 않았다면 에러가 난다.
// use client는 사실 use hydrate가 맞다.
// 인터랙티브할 필요가 없는 UI는 hydrate를 쓰지 않는다. 내려받을 자바스크립트의 양을 줄일 수 있다.
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