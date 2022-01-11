import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.6435-9/106422026_10224319995773741_2777972827846463260_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QgV-Qd-v8V4AX8pbpGv&_nc_ht=scontent.ftun2-1.fna&oh=00_AT9eWoBHkuO-2rCG3nLP5THZBxYsvXry59ZoggST7_nBdw&oe=6200153D"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia velit, necessitatibus natus accusamus iure suscipit.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twiter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}
