import PropTypes from "prop-types";

const Banner = ({ bgImage, title }) => {
    return (
        <div className="banner" style={{ backgroundImage: `linear-gradient(
            102.82deg,
            rgba(0, 0, 0, 0.76) 30.08%,
            rgba(114, 24, 27, 0.488772) 69.81%,
            rgba(237, 50, 55, 0.6384) 94.64%
        ), url(${bgImage})` }}>
            <h1>{title}</h1>
        </div>
    );
};

Banner.propTypes = {
    bgImage: PropTypes.string.isRequired, // Требуется строка
    title: PropTypes.string.isRequired, // Требуется строка
};
export default Banner;
