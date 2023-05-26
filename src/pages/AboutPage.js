import Constrols from "../components/Controls";
import Header from "../components/Header";

const AboutPage = () => {
  return /*html */ `
  <main> 
  <section class="container about active" id="about">
  <div class="main-title">
      <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
  </div>
  <div class="about-container">
      <div class="left-about">
          <h4>Information About me</h4>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet labore nihil obcaecati consequatur. Debitis error doloremque,
              vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
              delectus dolore fugiat exercitationem a,
              ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Harum non necessitatibus deleniti eum soluta.
          </p>
          <div class="btn-con">
              <a href="#" class="main-btn">
                  <span class="btn-text">Download CV</span>
                  <span class="btn-icon"><i class="fas fa-download"></i></span>
              </a>
          </div>
      </div>
      <div class="right-about">
          <div class="about-item">
              <div class="abt-text">
                  <p class="large-text">30+</p>
                  <p class="small-text">Projects <br /> Completed</p>
              </div>
          </div>
          <div class="about-item">
              <div class="abt-text">
                  <p class="large-text">1+</p>
                  <p class="small-text">Years of <br /> experience</p>
              </div>
          </div>
          <div class="about-item">
              <div class="abt-text">
                  <p class="large-text">30+</p>
                  <p class="small-text">Happy <br /> Clients</p>
              </div>
          </div>
          <div class="about-item">
              <div class="abt-text">
                  <p class="large-text">40+</p>
                  <p class="small-text">Customer <br /> reviews</p>
              </div>
          </div>
      </div>
  </div>
  <div class="about-stats">
      <h4 class="stat-title">My Skills</h4>
      <div class="progress-bars">
          <div class="progress-bar">
              <p class="prog-title">html5</p>
              <div class="progress-con">
                  <p class="prog-text">Expert</p>
                  <div class="progress">
                      <span class="html"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">css3</p>
              <div class="progress-con">
                  <p class="prog-text">Expert</p>
                  <div class="progress">
                      <span class="css"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">javascript</p>
              <div class="progress-con">
                  <p class="prog-text">Expert</p>
                  <div class="progress">
                      <span class="js"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">ReactJS</p>
              <div class="progress-con">
                  <p class="prog-text">Expert</p>
                  <div class="progress">
                      <span class="react"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">NodeJS</p>
              <div class="progress-con">
                  <p class="prog-text">Expert</p>
                  <div class="progress">
                      <span class="node"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">Python</p>
              <div class="progress-con">
                  <p class="prog-text">Expert</p>
                  <div class="progress">
                      <span class="python"></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <h4 class="stat-title">My Timeline</h4>
  <div class="timeline">
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2022 - present</p>
          <h5>Web Developer<span> -  FPT polytechnich</span></h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
          </p>
      </div>
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2022-2023</p>
          <h5>Software Engineer<span> - Google, Inc.</span></h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
          </p>
      </div>
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2023-2024</p>
          <h5>C++ Programmer<span> -  FPT polytechnich</span></h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
          </p>
      </div>
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2022-2023</p>
          <h5>Business Degree<span> -  FPT polytechnich</span></h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
          </p>
      </div>
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2022-2023</p>
          <h5>Computer Science Degree<span> -  FPT polytechnich</span></h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
          </p>
      </div>
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2022 - present</p>
          <h5>3d Animation<span> - FPT polytechnich</span></h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
          </p>
      </div>
  </div>
</section>
</main>
${Constrols()}
    `;
};
export default AboutPage;
