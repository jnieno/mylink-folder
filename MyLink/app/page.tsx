
import {
  FaGithub,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import {
  FiUser,
  FiExternalLink
} from "react-icons/fi";

const links = [
  {
    title: "GitHub",
    url: "https://github.com",
    icon: FaGithub
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/",
    icon: FaYoutube
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="profile">
        <header className="profile-header">
          <FiUser
            className="profile-icon"
            aria-hidden="true"
          />
          <h1>나의 마이링크</h1>
        </header>

        <nav className="link-list" aria-label="내 링크">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.title}
                className="link-card"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-content">
                  <Icon
                    className="brand-icon"
                    aria-hidden="true"
                  />
                  <span>{link.title}</span>
                </span>

                <FiExternalLink
                  className="external-icon"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>
      </section>
    </main>
  );
}
