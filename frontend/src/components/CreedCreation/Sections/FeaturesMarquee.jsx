import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// Define your feature data
const firstRow = [
  {
    title: "Apple Inc.",
    // desc: "Get premium services without",
    img: "https://img.freepik.com/free-vector/general-business-landing-page-template_23-2148994929.jpg?t=st=1744361708~exp=1744365308~hmac=6c0760e988711db668e103c394e25edd09f1333df0c244b55c7eadf9de9d81ac&w=1480"
  },
  {
    title: "Google LLC",
    // desc: "Your brand looks great on every device.",
    img: "https://img.freepik.com/free-vector/e-learning-concept-flat-landing-page_52683-7378.jpg?t=st=1744361368~exp=1744364968~hmac=610b7e5ce3c436867eeb4fd20562f1f55fae3ead5285f5acbb0c8dd426acefc5&w=1480"
  },
  {
    title: "Vercel",
    // desc: "Designs that wow and flows that convert.",
    img:"https://img.freepik.com/free-vector/travel-landing-page-with-photo_23-2148362640.jpg?t=st=1744361237~exp=1744364837~hmac=555c560cd6643f7c0063221375162f232c74a8419ad98a5b77dbcb90fae00701&w=1480"
  },

];

const FeatureCard = ({ title, desc, img }) => {
  return (
    <div
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-3xl border p-4",
        "border-gray-950/[.1] bg-[#dddddd]"
      )}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-between space-y-3">
          <div className="text-lg font-semibold text-gray-800">{title}</div>
          <p className="text-xs text-gray-600">{desc}</p>
          <img src={img} alt="" width={300} className="rounded-xl" />
          {/* <div className="bg-slate-200 h-52 w-72 rounded-md border border-zinc-700"></div> */}
        </div>
      </div>
    </div>
  );
};

export function FeaturesMarquee() {
  return (
    <section className="my-16">
      <div className="flex w-full text-white items-center justify-center pb-16 text-4xl md:text-6xl font-bold">
        See Our Projects
      </div>
      <div className="relative">
        {/* Gradient overlays for the entire container */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-zinc-800 via-zinc-800/50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-zinc-800 via-zinc-800/50 to-transparent" />

        {/* Marquee container */}
        <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden bg-zinc-800">
          {/* First Row */}
          <Marquee pauseOnHover className="py-4">
            {firstRow.map((item, index) => (
              <FeatureCard key={`row1-${index}`} {...item} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}