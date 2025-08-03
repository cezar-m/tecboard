import './label.estilos.css'

export function Label({ children, htmlFor }) {
//function label(props) {
	return (
		<label htmlFor={htmlFor} className='label'>
			{children}
		</label>
	)
}