import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 hover:scale-105">
        <img src={post.image} alt="Post" className="h-48 w-full object-cover" />
        <div className="p-4">
          <div className="mb-2 flex items-center">
            <img src={post.avatar} alt="Avatar" className="mr-3 h-10 w-10 rounded-full" />
            <h3 className="text-lg font-semibold text-gray-800">
              {post.firstName} {post.lastName}
            </h3>
          </div>
          <p className="text-gray-600">{post.writeup}</p>
        </div>
      </div>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
