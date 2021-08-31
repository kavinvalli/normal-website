import styles from "./Spotify.module.scss";

export default function Spotify({
  albumImageUrl,
  artist,
  isPlaying,
  songUrl,
  title,
}) {
  return (
    <div className={styles.spotifyDiv}>
      <h2>Listening To</h2>
      {isPlaying ? (
        <>
          <img
            src={albumImageUrl}
            height="150"
            width="150"
            alt={`${title} image`}
          />
          <a href={songUrl} target="_blank" rel="noreferrer">
            <strong>{title}</strong>
          </a>
          <p>{artist}</p>
        </>
      ) : (
        <p>Nothing</p>
      )}
    </div>
  );
}
