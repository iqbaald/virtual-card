import PropTypes from "prop-types";

function Badge({ text, link }) {
  return (
    <button>
      <a className="height" href={link}>
        {text}
      </a>
    </button>
  );
}

function Highlight() {
  return (
    <>
      <div className="buttons">
        <Badge
          text="🔥 Codewars Everyday"
          link="https://github.com/iqbaald/180-day-coding-challenge"
        />
        <Badge
          text="🎨 UI Design"
          link="https://sites.google.com/view/iqbaalsite/portfolio?"
        />
      </div>
    </>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired, // Mengharuskan icon berupa string
  link: PropTypes.string.isRequired, // Mengharuskan link berupa string
};

export default Highlight;
