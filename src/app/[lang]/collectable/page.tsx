import Postcard from "@/components/Postcard";
import { data, userCollectedStickerts } from "@/utils/stamps";

export default function Collectable() {
  return (
    <main className="flex flex-col px-20 h-full">
      <h1 className="text-white text-4xl">Collectables</h1>
      <div className="flex flex-wrap mt-8 gap-4 justify-between">
        {data.map(({ stamp, date, eventName, id }) => {
          return (
            <div key={`${eventName}-${date}`} className="max-w-[180px]">
              <Postcard
                id={id}
                img={stamp}
                userCollectedStickerts={userCollectedStickerts}
              />
              <h1 className="font-bold px-1">{eventName}</h1>
              <p className="font-thin px-1">{date}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
