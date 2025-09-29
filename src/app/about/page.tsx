import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageRedirect from "@/components/ImageRedirect";

export const About = () => {
  return (
    <>
      <Header title="About" />
      <div className="wrap">
        <main>
          <section className="hero" role="main">
            <div className="about-content">
              <ImageRedirect
                src="/profile.jpg"
                alt={"Profile Picture"}
                target="/"
                width={500}
                height={500}
                className="profile-image"
              />
              <h1 className="name">About Me</h1>
              <div className="subtitle">
                <p>
                  👋 Hey there! I’m Christian Jaena, a Software Engineer
                  passionate about crafting clean, efficient, and scalable
                  solutions. My toolbox revolves around Java, Spring Boot, and
                  Microservices, where I thrive in building systems that not
                  only work but work well. ⚙️
                </p>
                <p>
                  My long-term goal? To level up into Software Architect, where
                  I can design solutions that are as elegant as they are
                  impactful. 🏗️
                </p>
                <p>
                  But coding for me isn’t just a career—it’s also a playground.
                  I love experimenting with projects that range from practical
                  side hustles to quirky, just-for-fun scripts. For me, code
                  should strike the perfect balance between functionality and
                  creativity.
                </p>
                <p>
                  Outside the IDE, I’m either tuning into podcasts (Diary of a
                  CEO is well recommended), checking out the latest tech and
                  gaming trends, or playing ball games with friends. 😂
                </p>
                <p>
                  So, whether it’s a deep dive into backend design or just
                  sharing a laugh, I’m always down to connect, learn, and build
                  something meaningful. 💻🚀
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
