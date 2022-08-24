import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavigationFooter = () => {
    return (<Fragment>
        <footer id="sticky-footer" className="flex-shrink-0 py-3 bg-dark text-white-50">
            <div className="container text-center">
                <small>Copyright &copy; PlayFit</small>
            </div>
        </footer>
    </Fragment>);
}


export default NavigationFooter;