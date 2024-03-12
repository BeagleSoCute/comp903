import React from 'react'; 

const Button = ({children, onEvent, className}) => {
return<button className={'button  border-solid border-2 border-gray-700 ' + className} onClick={()=> onEvent}>{children}</button>
}
export default Button;