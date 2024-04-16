import PropTypes from "prop-types";

function SocialButton({ icon, link }) {
  return (
    <>
      <button>
        <a href={link} className={`fa ${icon}`}></a>
      </button>
    </>
  );
}

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired, // Mengharuskan icon berupa string
  link: PropTypes.string.isRequired, // Mengharuskan link berupa string
};

export default SocialButton;
