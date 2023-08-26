import GreetingHeading from "../components/GreetingHeading";
import { userIcon } from "../assets/Icons";
import { useEffect, useState } from "react";

const Settings = () => {

    // Get user role from local storage
    const userRole = localStorage.getItem('userRole');

    // State for setting category selected
    const [categorySelected, setCategorySelected] = useState('Profile');

    // State for setting language
    const [language, setLanguage] = useState('device');

    // Function for selecting category
    const selectCategory = (category) => {
        setCategorySelected(category);
    }

    // Function for selecting language
    const selectLanguage = (language) => {
        setLanguage(language);
        console.log (language);
    }

    return (
    <div className="page">
        <div className="top-row">
            <GreetingHeading heading='Settings' />
            <div><img src={userIcon} className="user-icon" />{userRole}</div>
        </div>

        <div className="settings-content">
            <div className="categories">
                <div className={categorySelected === 'Profile' ? 'category-selected' : 'category'} onClick={() => selectCategory('Profile')}>
                    Profile</div>
                <div className={categorySelected === 'Account information' ? 'category-selected' : 'category'} onClick={() => selectCategory('Account information')}>
                    Account information</div>
                <div className={categorySelected === 'Language & Accessibility' ? 'category-selected' : 'category'} onClick={() => selectCategory('Language & Accessibility')}>
                    Language & Accessibility</div>
                <div className={categorySelected === 'Privacy & Security' ? 'category-selected' : 'category'} onClick={() => selectCategory('Privacy & Security')}>
                    Privacy & Security</div>
            </div>
            
            <div className={categorySelected === "Profile" ? "upstage-category" : "d-none"}>
                profile
            </div>

            <div className={categorySelected === "Account information" ? "upstage-category" : "d-none"}>
                account 
            </div>

            <div className={categorySelected === "Language & Accessibility" ? "upstage-category category-language" : "d-none"}>
                Choose what language you want to use in the website
                <form className="select-language">
                    <div className="d-flex">
                        <input type='radio' id='device' name= 'language' value='device' onClick={() => selectLanguage("device")} />
                        <label for='device'>Same as device language</label><br />
                    </div>
                    
                    <div className="d-flex">
                        <input type='radio' id='english-us' name= 'language' value='english-us' onClick={() => selectLanguage("english-us")} />
                        <label for='english-us'>English (US)</label><br />
                    </div>
                    
                    <div className="d-flex">
                        <input type='radio' id='english-uk' name= 'language' value='english-uk' onClick={() => selectLanguage("english-uk")} />
                        <label for='english-uk'>English (UK)</label><br />
                    </div>
                    
                    <div className="d-flex">
                        <input type='radio' id='español' name= 'language' value='español' onClick={() => selectLanguage("español")} />
                        <label for='español'>Español (España)</label><br />
                    </div>
                    
                </form>
            </div>

            <div className={categorySelected === "Privacy & Security" ? "upstage-category" : "d-none"}>
                privacy
            </div>

        </div>
    </div>
    )
}

export default Settings;