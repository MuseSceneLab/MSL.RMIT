
/**
 * A functional component that renders a greeting heading and subheading.
 * @param {Object} props - The props object containing heading and subheading.
 * @param {string} props.heading - The main heading to be displayed.
 * @param {string} props.subheading - The subheading to be displayed (optional).
 * @returns {JSX.Element} - The JSX element containing the greeting heading and subheading.
 */

const GreetingHeading = (props) => {
    return (
    <>
        <div className='greeting-heading' >{props.heading}</div>
        <div className={props.subheading ? 'greeting-subheading' : 'd-none'}>{props.subheading ? props.subheading : ''}</div>
    </>
    )
}

export default GreetingHeading;