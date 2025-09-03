import * as S from "./styles";

const NAV_ITEMS = [
  {
    key: "admissions",
    label: "Admissions",
    children: [
      { key: "admission-requirements", label: "Admission Requirements" },
      { key: "online-application", label: "Online Application" },
      { key: "alternative-payment", label: "Alternative Payment Service" },
      { key: "financial-assistance", label: "Financial Assistance Programs" },
    ],
  },
  {
    key: "programs",
    label: "Programs",
    children: [
      { key: "college-programs", label: "College Programs" },
      { key: "senior-high-school", label: "Senior High School" },
    ],
  },
  { key: "campuses", label: "Campuses" },
  { key: "life-at-aim", label: "Life at AIM" },
  { key: "aim-blog", label: "AIM Blog" },
  {
    key: "alumni",
    label: "Alumni",
    children: [
      { key: "alumni-stories", label: "Alumni Stories" },
      { key: "academic-docs", label: "Academic Document Request" },
      { key: "verification-records", label: "Verification of Records" },
      { key: "alumni-association", label: "AIM Alumni Association" },
      { key: "i-cares", label: "I-Cares" },
    ],
  },
  {
    key: "about-aim",
    label: "About AIM",
    children: [
      { key: "about-aim-page", label: "About AIM" },
      { key: "one-aim", label: "ONE AIM Learning Model" },
      { key: "campus-safety", label: "Campus Safety" },
      { key: "e2e-system", label: "E2E System" },
      { key: "aim-foundation", label: "AIM Foundation" },
      { key: "quality-management", label: "AIM Quality Management System" },
      { key: "company-disclosures", label: "Company Disclosures" },
      { key: "careers", label: "Careers" },
    ],
  },
];

const Navbar = ({ isMobile }) => {
  const items = NAV_ITEMS.map((item) => ({
    ...item,
    label:
      item.children && !isMobile ? (
        <S.Span>
          {item.label} <S.ArrowIcon />
        </S.Span>
      ) : (
        item.label
      ),
  }));

  return isMobile ? (
    <S.MobileMenu mode="inline" items={items} />
  ) : (
    <S.DesktopMenu mode="horizontal" items={items} />
  );
};

export default Navbar;
