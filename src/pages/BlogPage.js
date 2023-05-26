import Constrols from "../components/Controls";

const BlogPage = () => {
  return /*html */ `
  <main> 
    <section class="container active" id="blogs">
    <div class="blogs-content">
        <div class="main-title">
            <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
        </div>
        <div class="blogs">
            <div class="blog">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img8.jpg?raw=true" alt="Lỗi ảnh">
                <div class="blog-text">
                    <h4>
                        How to Create Your Own Website
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
            <div class="blog">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img9.jpg?raw=true" alt="Lỗi ảnh">
                <div class="blog-text">
                    <h4>
                        How to Become an Expert in Web Design
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
            <div class="blog">
            <img src="https://github.com/Banhradedutvo/ASM_GD1_WEB501/blob/main/src/img/projects/img4.jpg?raw=true" alt="Lỗi ảnh">
                <div class="blog-text">
                    <h4>
                        Become a Web Designer in 10 Days
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
            <div class="blog">
            <img src="./src/img/projects/img9.jpg" alt="Lỗi ảnh">
                <div class="blog-text">
                    <h4>
                        Debbuging made easy with Web Inspector
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
            <div class="blog">
            <img src="./src/img/projects/img1.jpg" alt="Lỗi ảnh">
                <div class="blog-text">
                    <h4>
                        Get started with Web Design and UI Design
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
            <div class="blog">
            <img src="./src/img/projects/img1.jpg" alt="Lỗi ảnh">
                <div class="blog-text">
                    <h4>
                        This is what you need to know about Web Design
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
</main>
${Constrols()}
    `;
};
export default BlogPage;
