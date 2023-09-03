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

        <div className="faq-container">
            <div className="greeting-heading mt-5">Category/Topic</div>
            <hr className="thick-hr" />

            
            <details className="faq-topic-details">
                <summary className="faq-topic-summary">General</summary>
                <ul className="question"> What is MuseSceneLab?
                    <li className="answer">MuseSceneLab is an educational platform focused on music that offers a unique learning experience through Virtual Reality (VR), Augmented Reality (AR), and Artificial Intelligence. Our flagship product, MuseLab_Conductor, allows students to interact in a VR environment with an orchestra of avatars and then analyze their performance through educational and usage metrics on our web platform.</li>
                </ul>
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Features</summary>
                
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Technical Requirements</summary>
                details will be displayed here
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Platform Usage</summary>
                details will be displayed here
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Security and Privacy</summary>
                details will be displayed here
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Subscription and Pricing</summary>
                details will be displayed here
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Support</summary>
                
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Updates and Improvements</summary>
                details will be displayed here
            </details>

            <hr />
        </div>
    </div>
    );
}


export default FAQ;