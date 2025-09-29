import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Github from "@/components/Github";
import Header from "@/components/Header";
import ImageRedirect from "@/components/ImageRedirect";
import LinkedIn from "@/components/Linkedin";

export default function Home() {
  return (
    <>
      <Header title="Home" />
      <div className="wrap">
        <main>
          <section className="hero" role="main">
            <ImageRedirect
              src="/profile.jpg"
              alt={"Profile Picture"}
              target="/about"
              width={500}
              height={500}
              className="profile-image"
            />
            <h1 className="name">Christian Jaena</h1>
            <p className="subtitle">A coder fueled by coffee and milk tea</p>

            <div className="social" aria-label="Social links">
              <LinkedIn />
              <Github />
              <Email />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

