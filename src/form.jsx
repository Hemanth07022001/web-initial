import PropTypes from "prop-types";
import "./form.css"
function Form1({ setShow }) {
    let signOffForm = () => {
        
        setShow(false);
    };
    


    return (
        <>
            <div className="hidden-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="form_container animation">
                    <div className="img_container">
                        <span className="cross" onClick={signOffForm}>×</span>
                        <img src="virat-form.jpg" alt="logo" className="image" />
                    </div>
                    <form>
                        <div className="form_container2">
                            <label>Username:</label>
                            <input type="text" placeholder="Username" title="please fill the field" name="uname" />
                            <label>Password:</label>
                            <input type="password" placeholder="Password" title="please fill the field" />
                            <input type="checkbox" />Show Password
                            <button type="button" className="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Form1.propTypes = {
    setShow: PropTypes.func.isRequired,
    
};

export default Form1;
