export default function BlogPage({params}: {params: {slug: string}}) {
    return (
        <div>
            <h1>Post: {params.slug}</h1>
        </div>
    )
}