import Postcard from "@/components/Postcard";
import { data } from "@/utils/stamps";

export default function Home() {
  return (
    <main className="flex flex-col px-20 h-full">
      <h1 className="text-white text-4xl">Album</h1>
      <div className="flex flex-wrap mt-8 gap-4 justify-between">
        {data.map(({ stamp, date, eventName }) => {
          return (
            <div key={`${eventName}-${date}`} className="max-w-[180px]">
              <Postcard img={stamp} />
              <h1 className="font-bold px-1">{eventName}</h1>
              <p className="font-thin px-1">{date}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
