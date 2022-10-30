async function PageBlog() {
    const result = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
    return(
        <div>
            <h1>My Blog</h1>
            <ul>
            </ul>
        </div>
    )
}

export default PageBlog;