import Link from 'next/link'

export default function NotFound() {
    return <div>
        <h1>아무것도 없어요!</h1>
        <Link href="/">Return Home</Link>
    </div>
}