import React from "react";
import img from "../../assets/images/October.webp";
export const About = () => {

  return (
    <div className="grid grid-cols-7 grid-rows-2 p-5 gap-1">
      <div className="grid col-span-7 md:col-span-7 lg:col-span-3 mt-5">
        <img src={img} alt="img" />
      </div>

      <div className="p-4 col-span-7 md:col-span-7 lg:col-span-4">
        <h1 className="text-4xl font-bold">Establishment</h1>
        <p className="p-5 second-font text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          repellendus maiores perferendis eos, magnam expedita ratione repellat
          excepturi necessitatibus quis eaque odio facere adipisci laboriosam in
          corrupti, id debitis hic quisquam eligendi aspernatur incidunt quae.
          Aspernatur expedita quae quidem est harum magnam rem quo laudantium
          dignissimos dolor, dicta voluptatem atque ducimus, unde distinctio
          autem, iste quibusdam dolorum explicabo consectetur quisquam odit
          officia omnis corporis. Reprehenderit sint dolorem tempora ut autem?
        </p>
      </div>

      <div className="p-4 col-span-7 md:col-span-7 lg:col-span-4">
        <h1 className="text-4xl font-bold">Certificates</h1>
        <p className="p-5 second-font text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          repellendus maiores perferendis eos, magnam expedita ratione repellat
          excepturi necessitatibus quis eaque odio facere adipisci laboriosam in
          corrupti, id debitis hic quisquam eligendi aspernatur incidunt quae.
          Aspernatur expedita quae quidem est harum magnam rem quo laudantium
          dignissimos dolor, dicta voluptatem atque ducimus, unde distinctio
          autem, iste quibusdam dolorum explicabo consectetur quisquam odit
          officia omnis corporis. Reprehenderit sint dolorem tempora ut autem?
        </p>
      </div>

      <div className="grid col-span-7 md:col-span-7 lg:col-span-3">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
