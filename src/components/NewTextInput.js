import classes from '../Styles/NewTextInput.module.css';
export default function NewTextInput({icon,...rest}){
    return(
        <div className={classes.NewTextInput}>
        <input {...rest} />
        <span 
        className="material-icons-outlined"> {icon} </span>
      </div>
    );
}