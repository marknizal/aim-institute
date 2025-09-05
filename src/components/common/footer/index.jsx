import * as S from "./styles";
import { Section } from "../../shared";

import { FaLocationArrow, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import { NAV_LINKS, SOCIAL_LINKS, LEGAL_LINKS } from "./links";

const LinkList = ({ links }) => (
  <S.List>
    {links.map((link, index) => {
      const Icon = link.icon;

      return (
        <li key={index}>
          <S.Link href={link.href}>
            {Icon && <Icon />}
            {link.label}
          </S.Link>
        </li>
      );
    })}
  </S.List>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Wrapper role="contentinfo">
      <Section $bg="#163E71">
        <S.Grid>
          <S.Address aria-labelledby="footer-contact">
            <S.Title id="footer-contact">AIM Institute</S.Title>

            <S.Item>
              <FaLocationArrow />
              AIM Academic Center, Ortigas Avenue, Lucena, Quezon
            </S.Item>

            <S.Item>
              <FaPhoneAlt />
              <a href="tel:+63288121784">+639 81 628 2561</a>
            </S.Item>

            <S.Item>
              <FaInfoCircle />
              <a href="#">AIM Helpdesk</a>
            </S.Item>
          </S.Address>

          <S.Nav aria-labelledby="footer-nav">
            <S.Title id="footer-nav">Navigation</S.Title>
            <LinkList links={NAV_LINKS} />
          </S.Nav>

          <S.Box aria-labelledby="footer-social">
            <S.Title id="footer-social">Get Regular Updates</S.Title>
            <LinkList links={SOCIAL_LINKS} />
          </S.Box>

          <S.Box aria-labelledby="footer-legal">
            <S.Title id="footer-legal">Other Links</S.Title>
            <LinkList links={LEGAL_LINKS} />
          </S.Box>
        </S.Grid>
      </Section>

      <Section $bg="#030926">
        <S.Copyright>
          <span>
            Created by: <a href="https://marknizal.vercel.app/">Mark Nizal</a> —
            &copy;{currentYear} Academy of Innovation & Mastery Institute. All
            rights reserved.
          </span>

          <span>
            <a href="#">Privacy Policy</a>
          </span>
        </S.Copyright>
      </Section>
    </S.Wrapper>
  );
};

export default Footer;
