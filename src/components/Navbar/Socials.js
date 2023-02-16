import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center text-lg sm:text-xl lg:text-2xl">
      <div className="mr-2 lg:mr-3">
        <Link href="https://www.linkedin.com/in/george-akpovwovwo-8b1435109">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
      <div className="mr-2 lg:mr-3">
        <Link href="https://github.com/sansteelo17">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
      <div className="mr-2 lg:mr-3">
        <Link href="https://twitter.com/__georgeriley">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
