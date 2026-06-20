import '../Styles/NotFound.css';
import { Link } from 'react-router-dom';
import {Emoji_NotFoundPage} from "./ImageImporter.js"

export default function NotFound() {
    return <>
        <div className="WholePage">
            <img src={Emoji_NotFoundPage} alt="Huh it didn't load L"/>
            <h2>This is not even a page...</h2>

            <Link to={"/game"} >
                <a>Head Back???</a>
            </Link>
        </div>
    </>
}