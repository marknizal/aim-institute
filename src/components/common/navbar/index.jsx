import * as S from "./styles";

const menuItems = [
  {
    key: "admissions",
    label: (
      <span>
        Admissions <S.ArrowIcon />
      </span>
    ),
    children: [
      { key: "admission-requirements", label: "Admission Requirements" },
      { key: "online-application", label: "Online Application" },
      { key: "alternative-payment", label: "Alternative Payment Service" },
      { key: "financial-assistance", label: "Financial Assistance Programs" },
    ],
  },
  {
    key: "programs",
    label: (
      <span>
        Programs <S.ArrowIcon />
      </span>
    ),
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
    label: (
      <span>
        Alumni <S.ArrowIcon />
      </span>
    ),
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
    label: (
      <span>
        About AIM <S.ArrowIcon />
      </span>
    ),
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

const Navbar = () => {
  return <S.Menu mode="horizontal" items={menuItems} />;
};

export default Navbar;
