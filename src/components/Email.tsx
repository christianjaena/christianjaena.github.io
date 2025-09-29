import Link from "next/link";

export const Email = () => {
  return (
    <Link
      href="mailto:jaenachristian@gmail.com"
      title="Email"
      aria-label="Email"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ verticalAlign: "middle", marginRight: "6px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 13.065l-11.99-8.065h23.98l-11.99 8.065zm-12-7.065v14h24v-14l-12 8.065-12-8.065z" />
      </svg>
    </Link>
  );
};

export default Email;
