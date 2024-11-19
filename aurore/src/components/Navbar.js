import Link from 'next/link';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
];

const Navbar = () => (
    <nav className="bg-gray-900 text-white p-4 flex justify-around">
        {links.map(link => (
            <Link href={link.href} key={link.href} className="hover:text-gray-400">
                {link.label}
            </Link>
        ))}
    </nav>
);

export default Navbar;
