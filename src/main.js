import Navigo from "navigo";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import PostDetailPage from "./pages/PostDetailPage";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
  const app = document.querySelector("#app");
  app.innerHTML = content();
};
// Router
router.on("/", function () {
  render(HomePage);
});
router.on("/about", function () {
  render(AboutPage);
});
router.on("/portfolio", function () {
  render(PortfolioPage);
});
router.on("/blogs", function () {
  render(BlogPage);
});
router.on("/contact", function () {
  render(ContactPage);
});

router.on("/post/:id", function ({ data }) {
  render(() => PostDetailPage(data));
});

router.resolve();


