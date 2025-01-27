"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddToFav({
  movieId,
  title,
  image,
  overview,
  releaseDate,
  voteCount,
}) {
  const [isFav, setIsFav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    if (isLoaded && isSignedIn && user) {
      setIsFav(user.publicMetadata?.favs?.includes(movieId));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [movieId, isLoaded, isSignedIn, user]);

  const handleFavClick = async () => {
    setIsLoading(true);
    if (!isSignedIn) {
      setIsLoading(false);
      router.push('/sign-in');
      return;
    }
    try {
      const res = await fetch('/api/user/fav', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieId,
          title,
          overview,
          releaseDate,
          voteCount,
          image,
        }),
      });

      if (res.ok) {
        setIsFav(!isFav);
      } else {
        console.error('Failed to update favorites');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleFavClick}
        className={`p-2 rounded  ${isFav ? 'bg-cyan-800 ' : ' bg-cyan-600'}`}
        disabled={isLoading}
      >
        {isLoading
          ? 'Loading...'
          : isFav
          ? 'Remove'
          : 'Add to List'}
      </button>
    </div>
  );
}