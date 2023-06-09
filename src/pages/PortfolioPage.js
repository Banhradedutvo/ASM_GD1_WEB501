import Constrols from "../components/Controls";
import { posts } from "../dataFake";

const PortfolioPage = () => {
  return /*html */ `
  <main> 
    <section class="container active" id="portfolio">
    <div class="main-title">
        <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
    </div>
    <p class="port-text">
        Here is some of my work that I've done in various programming languages.
    </p>
    <div class="portfolios">
        <div class="portfolio-item">
            <div class="image">
                <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img1.jpg?raw=true" alt="Lỗi ảnh">
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
        <div class="portfolio-item">
            <div class="image">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img2.jpg?raw=true" alt="Lỗi ảnh">
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
        <div class="portfolio-item">
            <div class="image">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img3.jpg?raw=true" alt="Lỗi ảnh">
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
        <div class="portfolio-item">
            <div class="image">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img4.jpg?raw=true" alt="Lỗi ảnh">
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
        <div class="portfolio-item">
            <div class="image">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img5.jpg?raw=true" alt="Lỗi ảnh">
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
        <div class="portfolio-item">
            <div class="image">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img6.jpg?raw=true" alt="Lỗi ảnh">
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
        <div class="portfolio-item">
            <div class="image">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img7.jpg?raw=true" alt="Lỗi ảnh">
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
    </div>
</section>
</main>
${Constrols()}
    `;
};

export default PortfolioPage;
