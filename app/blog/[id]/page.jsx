async function DetailProduit({params}) {
    const result = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)).json();
    return (
        <div>
            <h1>{result.title}</h1>
            <p>{result.body}</p>
        </div>
    )
}

export default DetailProduit;