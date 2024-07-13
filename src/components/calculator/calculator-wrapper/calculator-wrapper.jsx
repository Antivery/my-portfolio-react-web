import './calculator-wrapper.scss'
import { Textfit } from 'react-textfit';


export const Screen = ({ value }) => {
    return(
        <Textfit className='ap-calc-screen'>
            {value}
        </Textfit>
    )
}

export const ButtonBox = ({ children }) => {
	return <div className="buttonBox">{children}</div>
}

export const Button = ({ className, value, onClick }) => {
	return(
		<button className={className} onClick={onClick}>
			{value}
		</button>
	)
}

export function CalcWrapper ({ children }) {
    return <div className="ap-calc-wrapper">{children}</div>;
}