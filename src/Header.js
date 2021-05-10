import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function  Header() {
    return (
        <div className="header">
            <IconButton >
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>

            <img 
                className="header_logo"
                src="https://www.seekpng.com/png/full/55-558244_tinder-icon-logo-png-transparent-logo-tinder.png"
                alt=""
            />

            <IconButton >
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header;