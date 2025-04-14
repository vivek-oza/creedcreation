import React from "react";
import myimg from "../../../assets/images/infinity.png";

export default function ImageDiv() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center border-b-2 border-slate-500 shadow-2xl px-5  h-screen bg-zinc-950 light:bg-slate-50 relative overflow-hidden"
    >
      <img src={myimg} alt="my image" width={100} className=""/>
    </section>
  );
}
