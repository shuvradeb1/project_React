import classes from '../Styles/NewForm.module.css';
export default function NewForm({children,className,...rest}){
    return(
        <form className={`${className} ${classes.NewForm}`} action="#"{...rest}>
            {children}
            </form>


    );
}