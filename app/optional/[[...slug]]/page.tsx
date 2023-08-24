export default function OptionalPage({
  params,
}: {
  params: { slug: string[] } | null
}) {
  console.log("🚀 ~ file: page.tsx:6 ~ params:", params)
  return (
    <div>
      <h1>Optional: {params?.slug}</h1>
    </div>
  )
}
