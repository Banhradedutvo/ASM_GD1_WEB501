import Banner from "../components/Banner";
import Constrols from "../components/Controls";
import Header from "../components/Header";
import { posts } from "../dataFake";

const HomePage = () => {
  return /*html */ `
  <header class="container header active" id="home">
  <div class="header-content">
      <div class="left-header">
          <div class="h-shape"></div>
          <div class="image">
              <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/anh1.jpg?raw=true" alt="Lỗi ảnh">
          </div>
      </div>
      <div class="right-header">
          <h1 class="name">
              Hi, I'm <span>Nguyễn Trung Kiên.</span>
              A Web Developer.
          </h1>
          <p>
              I'm a Web Developer, I love to create beautiful and functional websites.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
          </p>
          <div class="btn-con">
              <a href="" class="main-btn">
                  <span class="btn-text">Download CV</span>
                  <span class="btn-icon"><i class="fas fa-download"></i></span>
              </a>
          </div>
      </div>
  </div>
</header>
  ${Constrols()}
 `;
};

export default HomePage;
