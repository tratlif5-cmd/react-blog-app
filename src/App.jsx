import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app">
          <Header title="Code & Coffee" />
          <main className="main">
            <Routes>
              <Route path="/" element={<BlogPostsPage />} />
              <Route path="/posts/:id" element={<IndividualPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<p>Page not found. Go back to Home.</p>} />
            </Routes>
          </main>
          <Footer owner="Chase Ratliff" />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
