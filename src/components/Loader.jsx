import PropTypes from "prop-types";

const Loader = ({ children, loading, className = "" }) => {
  return (
    <>
      <div className={`relative bg-white p-8 shadow-lg ${className}`}>
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-300 bg-opacity-50">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-solid border-gray-100 border-l-teal-500"></div>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

export default Loader;
