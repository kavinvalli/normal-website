import AboutCard from "../components/page/Home/AboutCard";
import Hero from "../components/page/Home/Hero";
import Spotify from "../components/page/Home/Spotify";
import { getNowPlaying } from "../lib/spotify";

export default function Home({
  albumImageUrl,
  artist,
  isPlaying,
  songUrl,
  title,
}) {
  return (
    <>
      <Hero />
      <AboutCard />
      <Spotify
        albumImageUrl={albumImageUrl}
        artist={artist}
        isPlaying={isPlaying}
        songUrl={songUrl}
        title={title}
      />
    </>
  );
}

export async function getStaticProps() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return {
      props: {
        spotifyData: {
          isPlaying: false,
        },
      },
    };
  }

  const song = await response.json();
  console.log(song);
  const isPlaying = song.is_playing;
  const title = song.currently_playing_type !== "ad" ? song.item.name : "AD";
  const artist =
    song.currently_playing_type !== "ad"
      ? song.item.artists.map((_artist) => _artist.name).join(", ")
      : "Spotify";
  const albumImageUrl =
    song.currently_playing_type !== "ad"
      ? song.item.album.images[0].url
      : "https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png";
  const songUrl =
    song.currently_playing_type !== "ad" ? song.item.external_urls.spotify : "";

  return {
    props: {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    },
  };
}
