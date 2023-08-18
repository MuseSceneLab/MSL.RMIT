const GreetingHeading = (props) => {
    return (
    <>
        <div className='greeting-heading' >{props.heading}</div>
        <div className={props.subheading ? 'greeting-subheading' : 'd-none'}>{props.subheading ? props.subheading : ''}</div>
    </>
    )
}

export default GreetingHeading;