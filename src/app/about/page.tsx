import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Christy Kettering | Kettering Productions",
  description: "Writer, creator, and star of From Chaos to Clarity. Entrepreneur, IT consultant, and storyteller bringing authentic middle-aged women's experiences to the screen.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function About() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000000, #111827)",
        color: "#ffffff",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
      }}
    >
      {/* Header with logo */}
      <header
        style={{
          marginBottom: "clamp(2rem, 5vh, 3rem)",
          textAlign: "center",
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
          <Image
            src="/brand/kettering-logo-rose.svg"
            alt="Kettering Productions"
            width={320}
            height={80}
            priority
            style={{ display: "block" }}
          />
        </Link>
      </header>

      {/* Main content container */}
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Hero image section - PLACEHOLDER for professional photos */}
        <div
          style={{
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          {/* TODO: Replace with actual professional photo from Portsmouth shoot */}
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              aspectRatio: "3/4",
              background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9ca3af",
              fontSize: "1.1rem",
            }}
          >
            <Image
              src="/images/Kettering-0394.jpg"
              alt="Christy Kettering - Creator of From Chaos to Clarity"
              width={600}
              height={800}
              style={{
                borderRadius: "12px",
                objectFit: "cover",
                width: "100%",
                height: "auto",
                maxWidth: "600px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Main bio content */}
        <section style={{ marginBottom: "3rem" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              color: "#fecdd3",
              marginBottom: "1.5rem",
              textAlign: "center",
              letterSpacing: "0.05em",
            }}
          >
            About Christy Kettering
          </h1>

          <div
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#d1d5db",
              marginBottom: "2rem",
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>
              I'm the founder of <strong style={{ color: "#fecdd3" }}>Kettering Productions LLC</strong> and the creator behind <em>From Chaos to Clarity</em>—a 7-season scripted dramedy series that I wrote, and yes, I'm starring in it too. Because when you've lived the chaos, you know exactly how to tell the story.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              This isn't some sanitized personal growth fantasy. This is the real deal: a two-year "just friends" situationship with a yacht owner that spiraled into swinger parties, three states, international travel, and a SWAT call that ended with my arrest. Then I walked into court and met Ethan—the prosecutor handling my case—and everything changed. Immediate chemistry. Mutual respect. The kind of partnership I didn't know I was missing.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <em>From Chaos to Clarity</em> isn't just about romance. It's about recognizing when you're settling for someone who can't match your vision, and finding the courage to choose differently. It's sharp, funny, and made for women who've lived a few lives—women who know that consequences, not wisdom, often drive the best changes.
            </p>
          </div>
        </section>

        {/* Why This Story section */}
        <section
          style={{
            background: "rgba(31, 41, 55, 0.5)",
            borderRadius: "12px",
            padding: "2rem",
            marginBottom: "3rem",
            borderLeft: "4px solid #fecdd3",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "#fecdd3",
              marginBottom: "1rem",
            }}
          >
            Why I'm Telling This Story
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#d1d5db",
              marginBottom: "1rem",
            }}
          >
            Middle-aged women deserve to see themselves in stories that don't sanitize the mess. We deserve entertainment that's as complex, funny, and resilient as we are. No more "perfect mom" narratives or "empty nester finds herself" clichés. This is about a woman who had wild, fun, chaotic adventures, made questionable choices, and came out the other side with clarity about what she actually wants.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#d1d5db",
            }}
          >
            I'm positioning this as premium streaming content comparable to <em>Fleabag</em>, <em>Jane the Virgin</em>, and <em>The Good Place</em>—entertainment with meaningful themes underneath. Authentic. Unfiltered. Built for the audience that's been waiting for it.
          </p>
        </section>

        {/* Background section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "#fecdd3",
              marginBottom: "1.5rem",
            }}
          >
            The Journey to Kettering Productions
          </h2>
          <div
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#d1d5db",
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>
              I'm a 52-year-old entrepreneur running multiple ventures under <strong style={{ color: "#fecdd3" }}>KetteringPro Enterprise</strong>—including SwipeAShift (a staffing platform), Groovin' Fly (travel experiences for women 40+), and several others. I spent years as an IT consultant solving complex problems, and now I'm applying that same strategic thinking to building businesses and telling stories.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The show mirrors my professional tagline: <em>from chaos to clarity</em>. Seasons 1-5 focus on the relationship chaos with Ryder. Season 6 pivots to empire-building with my business ventures, and Ethan enters at the very end. Season 7 is the Ethan season—a partner who actually supports my vision, champions my success, and gets out of the way while I build my empire.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I'm following the path of creators like Rachel Bloom, Phoebe Waller-Bridge, and Donald Glover—people who didn't wait for permission to tell their stories. I registered Season 1 with the U.S. Copyright Office, built a professional pitch deck, launched this site, and started pitching to agents and production companies. Because this story deserves to be told, and I'm the only one who can tell it right.
            </p>
          </div>
        </section>

        {/* Secondary image - PLACEHOLDER */}
        <div
          style={{
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          {/* TODO: Replace with secondary photo from Portsmouth shoot - maybe waterfront or alley shot */}
          <div
            style={{
              width: "100%",
              maxWidth: "700px",
              margin: "0 auto",
              aspectRatio: "16/9",
              background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9ca3af",
              fontSize: "1.1rem",
            }}
          >
            <Image
              src="/images/Kettering-0449.jpg"
              alt="Christy Kettering in downtown Portsmouth"
              width={700}
              height={394}
              style={{
                borderRadius: "12px",
                objectFit: "cover",
                width: "100%",
                height: "auto",
                maxWidth: "700px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* What's Next section */}
        <section
          style={{
            background: "rgba(31, 41, 55, 0.5)",
            borderRadius: "12px",
            padding: "2rem",
            marginBottom: "3rem",
            borderLeft: "4px solid #fecdd3",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "#fecdd3",
              marginBottom: "1rem",
            }}
          >
            What's Next
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#d1d5db",
              marginBottom: "1rem",
            }}
          >
            Season 1 is fully developed with copyrighted materials including the pilot script, episode breakdowns, one-sheet, and professional pitch deck. I'm conducting strategic outreach to production companies and literary agents.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#d1d5db",
            }}
          >
            This project is ready. The materials are professional. The story is authentic. And I'm here to bring it to life.
          </p>
        </section>

        {/* CTA section */}
        <section
          style={{
            textAlign: "center",
            padding: "3rem 1.5rem",
            background: "linear-gradient(135deg, rgba(254, 205, 211, 0.1) 0%, rgba(254, 205, 211, 0.05) 100%)",
            borderRadius: "12px",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "#fecdd3",
              marginBottom: "1.5rem",
            }}
          >
            Let's Talk
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#d1d5db",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Interested in learning more about <em>From Chaos to Clarity</em>? Want to see the full pitch materials? Let's connect.
          </p>
          <a
            href="mailto:info@ketteringproductions.com"
            style={{
              display: "inline-block",
              background: "#fecdd3",
              color: "#000000",
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            Get In Touch
          </a>
        </section>
      </article>

      {/* Footer */}
      <footer
        style={{
          fontSize: "0.8rem",
          color: "#9ca3af",
          textAlign: "center",
          marginTop: "3rem",
          paddingTop: "2rem",
          borderTop: "1px solid #374151",
          lineHeight: 1.6,
        }}
      >
        <Link
          href="/"
          style={{
            color: "#fecdd3",
            textDecoration: "underline",
            marginRight: "1rem",
          }}
        >
          ← Back to Home
        </Link>
        <br />
        <br />
        © 2025 <span style={{ color: "#fecdd3" }}>Kettering Productions LLC</span> · All Rights Reserved
        <br />
        <a
          href="mailto:info@ketteringproductions.com"
          style={{ color: "#fecdd3", textDecoration: "underline" }}
        >
          info@ketteringproductions.com
        </a>
      </footer>
    </main>
  );
}