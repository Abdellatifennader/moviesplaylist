import Image from "next/image";

export default function About() {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-2xl mx-auto p-2 text-center'>
           <Image src="/background.jpg" alt="background" width={1000} height={1000} className="rounded-md opacity-50 hover:scale-125 hover:opacity-70 "/>
          <div>
            <h1 className='text-3xl font-semibold text-center my-3 hover:scale-125'>
              About Us:
            </h1>
            <div className='text-md text-gray-200 flex flex-col gap-6 hover:scale-125'>
              <p>
              Movie Watcher is a sleek web application designed for movie enthusiasts to curate and manage their
              
              personal movie lists. Whether you're tracking favorites, planning what to watch next, or revisiting
            
            
              cinematic gems, Movie Watcher makes it simple and enjoyable to organize your movie collection in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }