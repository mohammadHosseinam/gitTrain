import Link from 'next/link'
export default function About(){
    return (
        <>
           <h1 className="text-slate-900 h-screen bg-orange-100 flex justify-center items-center text-2xl grow">about page</h1>
           <Link href="/">home page</Link>
        </>
    )
}
