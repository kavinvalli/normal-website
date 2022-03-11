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
      {isPlaying && (
        <div style={{ display: "flex" }}>
          <span className={styles.barWrapper}>
            <span className={`${styles.bar} ${styles.bar1}`}></span>
            <span className={`${styles.bar} ${styles.bar2}`}></span>
            <span className={`${styles.bar} ${styles.bar3}`}></span>
          </span>
          Now playing
        </div>
      )}
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
        <strong>Nothing</strong>
      )}
    </div>
  );
}
