import SignupImage from "../assets/image/signup.svg";
import classes from "../Styles/Illustration.module.css";

export default function Illustration(){
    return(
        <div className={classes.illustration}>
        <img src={SignupImage} alt="Signup" />
      </div>

    );
}