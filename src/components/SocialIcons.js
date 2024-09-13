import {
    faGithub,
    faLinkedin,
    faTelegram,
    faVk,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class SocialIcons extends React.Component {
    render() {
        return (
            <div className="social">
                <a
                    href="https://github.com/NikitaBigHead"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://t.me/NikitaBHD"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTelegram} />
                </a>

                <a
                    href="https://vk.com/nikitasuperpuper"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faVk} />
                </a>
            </div>
        );
    }
}

export default SocialIcons;
