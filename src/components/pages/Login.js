import NewForm from "../NewForm";
import NewIllustration from "../NewIllustration";
import classes from '../../Styles/Login.module.css';
import NewTextInput from "../NewTextInput";
import NewButton from "../NewButton";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>

      <div class="column">
        <NewIllustration />
        <NewForm className={`${classes.Login}`}>

          <NewTextInput type="text"
          placeholder="Enter email"
          icon="alternate_email"/>

         <NewTextInput type="password"
          placeholder="Enter password"
          icon="lock"/>

          <NewButton><span>Submit Now</span></NewButton>

          <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
          
        
          </NewForm>

      </div>
    </>

  );
}

