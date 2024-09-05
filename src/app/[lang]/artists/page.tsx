import StickerAlbum from "@/components/StickerAlbum";

export default function Home() {
  return (
    <main className="flex flex-col px-4 lg:px-20 min-h-dvh h-full justify-center items-center">
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">STMPD Artists</h1>
      </section>
      <StickerAlbum />
    </main>
  );
}
