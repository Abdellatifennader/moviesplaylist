"use client";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { PinContainer } from "./ui/3d-pin";

export function Card({result}) {
  return (
    (<div className="  flex items-center justify-center ">
      <PinContainer title={result.name || result.title} href={`/movie/${result.id}`} key={result.id}>
        <div
          className="flex basis-full flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
       
          <div className="text-base !m-0 !p-0 font-normal items-center justify-center">
            <span className="text-slate-100 ">
            {result.title || result.name}
            </span>
            <p className='line-clamp-3 text-sm'>{result.overview}</p>
          </div>
          <div className="flex flex-1 w-full rounded-lg container" />
          <img
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={result.title || result.name}
          className='sm:rounded-t-lg group-hover:opacity-75  h-full transition-opacity duration-300
            w-full sm:h-36 object-cover
          '
        ></img>
        </div>
        
        <p className='flex items-center text-xs'>
            {result.release_date || result.first_air_date}
            <FiThumbsUp className='h-5 mr-1 ml-3' />
            {result.vote_count}
          </p>
      </PinContainer>
    </div>)
  );
}
