import GreetingHeading from "../components/GreetingHeading";
import { userIcon } from "../assets/Icons";
import { useEffect, useState } from "react";

const Settings = () => {

    const [categorySelected, setCategorySelected] = useState('Profile');

    const selectCategory = (category) => {
        setCategorySelected(category);
    }

    useEffect(() => {
        console.log(categorySelected);
    }, [categorySelected]);


    return (
    <div className="page">
        <div className="top-row">
            <GreetingHeading heading='Settings' />
            <div><img src={userIcon} className="user-icon" />Professor</div>
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
            
            <div className="category-upstage">

            </div>
        </div>
    </div>
    )
}

export default Settings;