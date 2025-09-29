import Link from "next/link";

export const LinkedIn = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/christian-jaena-45490218b"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn"
      aria-label="LinkedIn"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ verticalAlign: "middle" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" />
      </svg>
    </Link>
  );
};

export default LinkedIn;
