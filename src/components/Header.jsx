import SocialButton from "./SocialButton";
function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton
          icon="fa-instagram"
          link="https://www.instagram.com/iqbaaldhoifulloh/"
        />
        <SocialButton icon="fa-facebook" link="https://www.facebook.com/" />
        <SocialButton icon="fa-twitter" link="https://twitter.com/" />
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
