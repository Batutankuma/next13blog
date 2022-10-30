import './globals.css';
import { Suspense } from "react";
import BarNav from "./components/barnav";
import Error from "./error";
import Loading from './loading'

function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Next Blog</title>
            </head>
            <body className='p-10 px-52 text-center'>
                <header>
                    <h1 className='pb-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white text-center'>
                        <u>BATUTA NKUMA SAEL</u>
                    </h1>
                    <BarNav/>
                </header>

                <div fallback={<Error />}>
                    <Suspense fallback={<Loading/>}>
                        {children}
                    </Suspense>
                </div>
            </body>
        </html>
    )
}

export default RootLayout;