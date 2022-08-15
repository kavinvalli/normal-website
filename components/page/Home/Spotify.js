import Image from "next/image";
import styles from "./Spotify.module.scss";

export default function Spotify({
  albumImageUrl,
  artist,
  isPlaying,
  songUrl,
  title,
}) {
  return (
    <a href={songUrl} target="_blank" rel="noreferrer">
      <div className={styles.spotifyDiv}>
        <div className={styles.spotifyCard}>
          {isPlaying ? (
            <>
              <Image
                src={albumImageUrl}
                height="150"
                width="150"
                alt={`${title} image`}
              />
              <div className={styles.spotifyCardMeta}>
                <div style={{ color: "var(--black)" }}>
                  <span className={styles.barWrapper}>
                    <span className={`${styles.bar} ${styles.bar1}`}></span>
                    <span className={`${styles.bar} ${styles.bar2}`}></span>
                    <span className={`${styles.bar} ${styles.bar3}`}></span>
                  </span>
                  Now playing
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <strong>{title}</strong>
                  <p style={{ fontSize: "12px", color: "var(--black)" }}>
                    {artist}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <strong style={{ padding: "6px" }}>
              I&apos;m not listening to any song currently
            </strong>
          )}
        </div>
      </div>
    </a>
  );
}
