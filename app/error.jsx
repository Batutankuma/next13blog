'use client';

function Error({error,reset}) {
    return(
        <>
            <p>Error {error.message}</p>
            <button onClick={()=> reset()}></button>
        </>
    )
}

export default Error;