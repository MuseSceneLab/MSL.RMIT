import GreetingHeading from "../components/GreetingHeading";
import { UserIcon, categoryTitle } from "../assets/Icons.js";

const FAQ = () => {

    // Get user role from local storage
    const userRole = localStorage.getItem('userRole');

    return (
    <div className="page">
        <div className="top-row">
            <GreetingHeading heading='Frequently Asked Questions' />
            <div><UserIcon />{userRole}</div>
        </div>

        <div className="d-flex flex-wrap faq-categories">
                <div className="faq-category"><img src={categoryTitle} alt="placeholder" /></div>
                <div className="faq-category"><img src={categoryTitle} alt="placeholder" /></div>
                <div className="faq-category"><img src={categoryTitle} alt="placeholder" /></div>
                <div className="faq-category"><img src={categoryTitle} alt="placeholder" /></div>
                <div className="faq-category"><img src={categoryTitle} alt="placeholder" /></div>
                <div className="faq-category"><img src={categoryTitle} alt="placeholder" /></div>
        </div>

        <div className="greeting-heading mt-5">Category/Topic</div>
        <hr className="thick-hr" />

        
        <details className="faq-topic-details">
            <summary className="faq-topic-summary">Common Question</summary>
            details will be displayed here
        </details>

        <hr />

        <details className="faq-topic-details">
            <summary className="faq-topic-summary">Common Question</summary>
            details will be displayed here
        </details>

        <hr />

        <details className="faq-topic-details">
            <summary className="faq-topic-summary">Common Question</summary>
            details will be displayed here
        </details>

        <hr />

        <details className="faq-topic-details">
            <summary className="faq-topic-summary">Common Question</summary>
            details will be displayed here
        </details>

    </div>
    );
}


export default FAQ;