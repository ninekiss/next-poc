export default function ShopPage({params}: {params: {slug: string[]}}) {
    return (
        <div>
            <h1>Shop: {params.slug}</h1>
        </div>
    )
}