 import classes from "../Styles/Button.module.css";
 export default function Button({children}){
     return(
        <div className={classes.button}>
        <span>{children}</span>
       </div>

     );
}






// import classes from '../Styles/NewButton.module.css';
// export default function NewButton({children}){
//     return(
//         <button className={classes.button}>
//         <span>{children}</span>
//       </button>
//     );
// }