import SocialButton from "./SocialButton";
function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton
          icon="fa-instagram"
          link="https://www.instagram.com/iqbaaldhoifulloh/"
        />
        <SocialButton
          icon="fa-code"
          link="https://www.codewars.com/users/iqbaald"
        />
        <SocialButton
          icon="fa-youtube"
          link="hhttps://www.youtube.com/@iqbaaldhoifulloh8270"
        />
      </div>
      <div className="social-buttons right">
        <SocialButton
          icon="fa-linkedin"
          link="https://www.linkedin.com/in/muhamad-iqbaal-dhoifulloh-8841b3295/"
        />
        <SocialButton icon="fa-github" link="https://github.com/iqbaald" />
      </div>
    </>
  );
}

export default Header;
