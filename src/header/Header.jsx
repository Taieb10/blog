import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://esquilo.io/wallpaper/wallpaper/20210704/hd-nature-wallpapers-hd-nature-pc-wallpapers-wallpaper-preview.webp"
                alt=""
            />
        </div>
    );
}
