import React from "react";
import Clients from "../assets/costumer.png";
import Group from "../assets/group.png";
import Projects from "../assets/project1.png";

export default function Card() {
  return (
    <div className="w-full py-[2rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-25 mx-auto mt-[-3rem] bg-white"
            src={Group}
            alt="team members"
          />
          <h2 className="text-2xl font-bold text-center py-8">50+</h2>
          <p className="text-center font-medium py-2 mb-8">Team Members</p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Projects}
            alt="projects"
          />
          <h2 className="text-2xl font-bold text-center py-8">100+</h2>
          <p className="text-center font-medium py-2 mb-8">Projects</p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Clients}
            alt="our clients"
          />
          <h2 className="text-2xl font-bold text-center py-8">15+</h2>
          <p className="text-center font-medium py-2 mb-8">Clients</p>
        </div>
      </div>
    </div>
  );
}
