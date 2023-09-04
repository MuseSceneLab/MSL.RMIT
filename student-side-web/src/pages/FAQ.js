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
                <ul className="question"> Who can use MuseSceneLab?
                    <li className="answer">MuseSceneLab is designed for students, teachers, and any music school interested in enhancing their educational experience.</li>
                </ul>
                <ul className="question"> In what languages is the platform available?
                    <li className="answer">The platform is currently available in English, with plans to add Spanish support by December 2023.</li>
                </ul>
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Features</summary>
                <ul className="question"> What features does MuseSceneLab offer?
                    <li className="answer">MuseSceneLab offers usage and educational metrics. One of our standout features is tempo analysis in a musical piece. Students can see in real-time whether their tempo is within the ideal range, helping them improve their technique. Teachers can also analyze student results and communicate with them through the platform. Direct communication through the platform is expected to be available in the coming months.</li>
                </ul>
                <ul className="question"> How does tempo analysis work?
                    <li className="answer">On the platform, students will see a graph that displays a green band representing the ideal tempo for a musical piece. An orange line will indicate the student's actual tempo. If the orange line stays within the green band, the student is within the correct range.</li>
                </ul>
                <ul className="question">Can teachers analyze student results?
                    <li className="answer">Yes, teachers have the ability to review each student's metrics, allowing them to provide more accurate and personalized feedback.</li>
                </ul>
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Technical Requlrements</summary>
                <ul className="question">What are the technical requlrements for using MuseSceneLab?
                    <li className="answer">For the VR tool, Meta Quest 2 is requlred. For the AR tool, a tablet or computer is needed. To access the web platform, a computer is necessary.</li>
                </ul>
                <ul className="question">Is there a tutorial on how to use the platform?
                    <li className="answer">Yes, you can familiarize yourself with the platform by clicking on the following tutorial link.</li>
                </ul>
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Platform Usage</summary>
                <ul className="question">How can I access MuseSceneLab?
                    <li className="answer">For the time being, MuseSceneLab is accessible through computers. We are working to make the platform responsive and accessible on other devices.</li>
                </ul>
                <ul className="question">How can I view my metrics?
                    <li className="answer">Once you have registered and completed a session in MuseLab_Conductor, you can access your metrics through the user dashboard on MuseSceneLab's web platform.</li>
                </ul>
                <ul className="question">Is there a chat or forum feature?
                    <li className="answer">We are in the process of developing a chat and forum feature to allow for better communication between students and teachers.</li>
                </ul>
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Security and Privacy</summary>
                <ul className="question">How is the security and privacy of my data handled?
                    <li className="answer">For more information, please consult our <a rel="noreferrer" href="https://musescenelab.com/privacidad-datos/" target="_blank">Privacy and Data Handling Policy</a>.</li>
                </ul>
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Subscription and Pricing</summary>
                <ul className="question">How does the subscription model work?
                    <li className="answer">Our business model focuses on music schools, which are our primary clients. We offer various subscription plans tailored to the needs of each school. We are also open to freelance teachers and enthusiastic students who wish to practice on their own. Currently, we are conducting pilot tests with several music schools.</li>
                </ul>
                <ul className="question">Are you conducting pilot tests?
                    <li className="answer">Yes, we are in the pilot testing phase with various music schools to further refine our offerings and features.</li>
                </ul>
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Support</summary>
                <ul className="question">How can I get technical support?
                    <li className="answer">For any questions or technical issues, you can contact us at info@musescenelab.com or directly reach out to Pedro Barboza at <a mailto="pedro@musescenelab.com">pedro@musescenelab.com</a>.</li>
                    <li className="answer">Additional support channels include:<ul>
                        <li><a rel="noreferrer" href="https://musescenelab.com/" target="_blank">Website</a></li>
                        <li><a rel="noreferrer" href="https://es.linkedin.com/company/muse-scene-lab" target="_blank">LinkedIn</a></li>
                        <li><a rel="noreferrer" href="https://twitter.com/musescenelab" target="_blank">Twitter</a></li>
                        <li>Phone: <a href="tel:+34665338965">+34 665338965</a></li>
                    </ul></li>
                </ul>
            </details>

            <hr />

            <details className="faq-topic-details">
                <summary className="faq-topic-summary">Updates and Improvements</summary>
                <ul className="question">How will updates or improvements be communicated?
                    <li className="answer">Updates or improvements to the platform will be communicated via email to registered users.</li>
                </ul>
            </details>

            <hr />
        </div>
    </div>
    );
}


export default FAQ;