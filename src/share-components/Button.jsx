import React from 'react'; 

const Button = ({children, onClick, type, className}) => {
return<button type={type} className={'button  border-solid border-2 border-gray-700 ' + className} onClick={onClick}>{children}</button>
}
export default Button;