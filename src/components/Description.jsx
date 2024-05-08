import PropTypes from "prop-types"; // Import the PropTypes package

Description.propTypes = {
  desc: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.number,
};

function Description({ desc, className, type = 0 }) {
  if (!desc) return;
  const data = desc.split("$.");
  return (
    <ol className={className}>
      {data.map(
        (item, index) =>
          item.length > 1 && (
            <li key={index} className="mb-2" type={type}>
              {item}
            </li>
          )
      )}
    </ol>
  );
}

export default Description;
