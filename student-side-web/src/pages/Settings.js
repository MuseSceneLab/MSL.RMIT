import GreetingHeading from "../components/GreetingHeading";
import { UserIcon, EditIcon, MSLLogo } from "../assets/Icons";
import { useEffect, useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const Settings = () => {

    // Get user role from local storage
    const userRole = localStorage.getItem('userRole');

    // State for setting category selected
    const [categorySelected, setCategorySelected] = useState('Profile');

    // State for setting language
    const [language, setLanguage] = useState('device');

    // State for setting privacy
    const [privacy, setPrivacy] = useState({
        strictlyNecessary: true,
        performance: true,
        functional: true,
        targeting: true
    });

    // State for account information
    const [editingEmail, setEditingEmail] = useState(false);
    const [editingPassword, setEditingPassword] = useState(false);
    const [editingUsername, setEditingUsername] = useState(false);

    const [accountInformation, setAccountInformation] = useState({
        email: 'dayana2000@gmail.com',
        password: '●●●●●●●●●●●●',
        username: 'DayanaConrocks',
    });

    // State for Profile
    const [editingProfile, setEditingProfile] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Dayana',
        lastName: 'Torres',
        institution: 'Boston Conservatory at Berklee',
        program: 'Master in Conducting'
    });

    // Function for selecting category
    const selectCategory = (category) => {
        setCategorySelected(category);
    }

    // Function for selecting language
    const selectLanguage = (language) => {
        setLanguage(language);
    }

    {/* Function for selecting privacy
      * @param {boolean} strictlyNecessary (default: true)
      * @param {boolean} performance (default: true)
      * @param {boolean} functional (default: true)
      * @param {boolean} targeting (default: true)
      * @return none
    */}
    const handlePrivacy = (strictlyNecessary, performance, functional, targeting) => {
        setPrivacy({
            strictlyNecessary: strictlyNecessary,
            performance: performance,
            functional: functional,
            targeting: targeting
        });
    }

    {/* Function for selecting account information
      * @param {string} email (default: '
      * @param {string} password (default: '
      * @param {string} username (default: '
      * @return none
    */}
    const handleAccountInformation = (event, type) => {
        setAccountInformation({
            email: type === 'email' ? event.target.value : accountInformation.email,
            password: type === 'password' ? event.target.value : accountInformation.password,
            username: type === 'username' ? event.target.value : accountInformation.username,
        });

        console.log (accountInformation[type]);
    }

    // Function for editing profile
    const handleEditingProfile = () => {
        setEditingProfile(!editingProfile);
    }

    {/* Function for selecting profile 
      * @param {string} name (default: '
      * @param {string} lastName (default: '
      * @param {string} institution (default: '
      * @param {string} program (default: '
      * @return none
    */}
    const editProfile = (event, type) => {
        setProfile({
            name: type === 'name' ? event.target.value : profile.name,
            lastName: type === 'lastName' ? event.target.value : profile.lastName,
            institution: type === 'institution' ? event.target.value : profile.institution,
            program: type === 'program' ? event.target.value : profile.program,
        });
    }

    // Function for editing email
    const editEmail = () => {
        setEditingEmail(!editingEmail);
    }

    // Function for editing password
    const editPassword = () => {
        setEditingPassword(!editingPassword);
    }

    // Function for editing username
    const editUsername = () => {
        setEditingUsername(!editingUsername);
    }
    

    useEffect(() => {
        console.log(language);
        if (language === 'device') {
            document.getElementById('device').checked = true;
        } else if (language === 'english-us') {
            document.getElementById('english-us').checked = true;
        } else if (language === 'english-uk') {
            document.getElementById('english-uk').checked = true;
        } else if (language === 'español') {
            document.getElementById('español').checked = true;
        }
    }, [language, privacy, accountInformation]);

    return (
    <div className="page">
        <div className="top-row">
            <GreetingHeading heading='Settings' />
            <div><UserIcon />{userRole}</div>
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
            
            <div className={categorySelected === "Profile" ? "upstage-category category-profile" : "d-none"}>
                <div className={!editingProfile ? "edit-profile-button" : "d-none"} onClick={handleEditingProfile}>
                    <div className="me-3">Edit profile</div>
                    <EditIcon />
                </div>
                <div className={editingProfile ? "edit-profile-button" : "d-none"} onClick={handleEditingProfile}>
                    <div className="me-3">Done</div>
                    <EditIcon />
                </div>

                <div className="profile">
                    <div className="profile-item">
                        <img src={ MSLLogo } />
                    </div>
                    
                    <div className="profile-item">
                        <div className="profile-item-title">Name</div>
                        <div className={editingProfile ? "d-none" : "profile-item-description"}>Dayana</div>
                        <input type="text" className={editingProfile ? "profile-item-description" : "d-none"} placeholder={profile.name} onChange={() => editProfile(event, "name")} />
                    </div>

                    <div className="profile-item">
                        <div className="profile-item-title">Last Name</div>
                        <div className={editingProfile ? "d-none" : "profile-item-description"}>Torres</div>
                        <input type="text" className={editingProfile ? "profile-item-description" : "d-none"} placeholder={profile.lastName} onChange={() => editProfile(event, "lastName")} />
                    </div>

                    <div className="profile-item">
                        <div className="profile-item-title">Institution</div>
                        <div className={editingProfile ? "d-none" : "profile-item-description"}>Boston Conservatory at Berklee</div>
                        <input type="text" className={editingProfile ? "profile-item-description" : "d-none"} placeholder={profile.institution} onChange={() => editProfile(event, "institution")} />
                    </div>

                    <div className="profile-item">
                        <div className="profile-item-title">Program</div>
                        <div className={editingProfile ? "d-none" : "profile-item-description"}>Master in Conducting</div>
                        <input type="text" className={editingProfile ? "profile-item-description" : "d-none"} placeholder={profile.program} onChange={() => editProfile(event, "program")} />
                    </div>
                </div>
            </div>

            <div className={categorySelected === "Account information" ? "upstage-category category-account-information" : "d-none"}>
                <div className="account-information-item">
                    <div className="account-information-item-left">
                        <div className="account-information-item-title">Email Address</div>
                        
                        <div className={!editingEmail ? "" : "d-none"}>{accountInformation.email}</div>
                        <input type="text" className={editingEmail ? "" : "d-none"} placeholder={accountInformation.email} onChange={() => handleAccountInformation(event, "email")} />
                    </div>
                    <div className={!editingEmail ? "account-information-item-right" : "d-none"} onClick={editEmail}>
                        <EditIcon />
                    </div>
                    <div className={editingEmail ? "account-information-item-right" : "d-none"} onClick={editEmail}>
                        Save
                    </div>
                </div> 

                <div className="account-information-item">
                    <div className="account-information-item-left">
                        <div className="account-information-item-title">Password</div>

                        <div className={!editingPassword ? "": "d-none"}>{accountInformation.password}</div>
                        <input type="text" className={editingPassword ? "" : "d-none"} placeholder={accountInformation.password} onChange={() => handleAccountInformation(event, "password")} />
                    </div>
                    <div className={!editingPassword ? "account-information-item-right" : "d-none"} onClick={editPassword}>
                        <EditIcon />
                    </div>
                    <div className={editingPassword ? "account-information-item-right" : "d-none"} onClick={editPassword}>
                        Save
                    </div>
                </div>

                <div className="account-information-item">
                    <div className="account-information-item-left">
                        <div className="account-information-item-title">Username</div>

                        <div className={!editingUsername ? "" : "d-none"}>{accountInformation.username}</div>
                        <input type="text" className={editingUsername ? "" : "d-none"} placeholder={accountInformation.username} onChange={() => handleAccountInformation(event, "username")} />
                    </div>
                    <div className={!editingUsername ? "account-information-item-right" : "d-none"} onClick={editUsername}>
                        <EditIcon />
                    </div>
                    <div className={editingUsername ? "account-information-item-right" : "d-none"} onClick={editUsername}>
                        Save
                    </div>
                </div>
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

            <div className={categorySelected === "Privacy & Security" ? "upstage-category category-privacy" : "d-none"}>
                <div>Review you Ad Choices and Read the Privacy Policy</div>
                <div>Read Terms of Use</div>

                <div className="privacy-settings">
                    <div className="privacy-item">
                        Strictly Necessary Cookies
                        <ToggleSwitch switchStatus={true} />
                    </div>

                    <div className="privacy-item">
                        Performance Cookies
                        <ToggleSwitch switchStatus={true} />
                    </div>

                    <div className="privacy-item">
                        Functional Cookies
                        <ToggleSwitch switchStatus={true} />
                    </div>

                    <div className="privacy-item">
                        Targeting Cookies
                        <ToggleSwitch switchStatus={true} />
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Settings;