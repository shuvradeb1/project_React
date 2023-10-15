import classes from '../Styles/NewIllustration.module.css';
import LoginImage from '../assets/image/login.svg';

export default function NewIllustration(){
    return(
        <div className={classes.NewIllustration}>
            <img src={LoginImage} alt="Login" />
          </div>

    );
}