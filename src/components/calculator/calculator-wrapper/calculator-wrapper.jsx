import './calculator-wrapper.scss'


export const Screen = ({ value }) => {
    return(
        <div className='ap-calc-screen'>
            {value}
        </div>
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