import { posts } from "../dataFake";
const PostDetailPage = ({ id }) => {
  const post = posts.find((post) => post.id === +id);
  if (!post) return "<h1>Post not found </h1>";
  return /*html */ `
  <div class="portfolio-item">
  <div class="image">
  <img src="${post.img}" alt="Lỗi ảnh">
  </div>
  <div class="hover-items">
      <h3>Project Source</h3>
      <div class="icons">
          <a href="#" class="icon">
              <i class="fab fa-github"></i>
          </a>
          <a href="#" class="icon">
              <i class="fab fa-behance"></i>
          </a>
          <a href="#" class="icon">
              <i class="fab fa-youtube"></i>
          </a>
      </div>
  </div>
</div>
            `;
};
export default PostDetailPage;
