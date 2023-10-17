import classes from '../Styles/Summary.module.css';
import image from '../assets/image/success.png';
export default function Summary(){
    return(
        <div className={classes.summary}>
          <div className={classes.point}>
            <p className={classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={classes.badge}>
            <img src={image} alt="Success" />
          </div>
        </div>

    );
}