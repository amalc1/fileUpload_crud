import React from "react";
import { useState } from "react";
import data from "../data.json";

const NewTailwind = () => {
  const [items] = useState(data);
  return (
    <div>
      <section>
        <div className="bg-indigo-500 p-8 text-center text-white rounded-b-3xl">
          <h2 className="mb-10">Your Result</h2>
          <div className="flex justify-center">
            <p className="bg-indigo-600 rounded-full inline-block w-24 h-24 flex flex-col items-center justify-center gap-1 text-white text-3xl ">
              76 <p className="text-slate-200 text-base font-normal">of 100</p>
            </p>
          </div>
          <h2 className="mt-6">Great</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            delectus.
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-slate-700 mb-6 text-lg font-bold">Summary</h2>
          <div>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: `${item.color}15`,
                }}
              >
                <h3
                  style={{
                    color: item.color,
                  }}
                >
                  <img src={item.icon} alt={item.category} />
                </h3>
                <p>
                  <span>{item.score}</span>/ 100
                </p>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </div>
      </section>
    </div>
  );
};

export default NewTailwind;
