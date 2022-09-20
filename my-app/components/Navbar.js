import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <h1>Captur</h1>
      </Link>
      <ul>
          <li>
              <Link href="/home">
                  Home
            </Link>
          </li>
          <li>
              <Link href="/#gallery">
                  Gallery
            </Link>
          </li>
          <li>
              <Link href="/work">
                  Work
            </Link>
          </li>
          <li>
              <Link href="/contact">
                  Contact
            </Link>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;