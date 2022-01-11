import "./topbar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg"
                    src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/s480x480/101809666_10224075995313882_6084566806876389376_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=Bg4_FvQmaQQAX-W_PW_&_nc_ht=scontent.ftun1-2.fna&oh=00_AT8M432GtSpLNohmWIi_LLzdOqOgW2FhpQk2MTrQVBNuSg&oe=61FD69C8"
                    alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
