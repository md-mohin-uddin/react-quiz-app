import image from "../assets/images/images.jpeg";
import classes from "../styles/Video.module.css";

export default function Video() {
  return (
    <div className={classes.video}>
      <img src={image} alt="Video Title" />
      <p>React Learning with Bangla Language</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}
