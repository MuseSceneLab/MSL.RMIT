const ProfessorLoginForm = () => {
    let userRole = "";

    if (localStorage.getItem('userRole') !== null) {
        userRole = localStorage.getItem('userRole');
    }
    else {
        userRole = "";
    }

    return (
        <div>PROG LOG IN</div>
    )

}

export default ProfessorLoginForm;