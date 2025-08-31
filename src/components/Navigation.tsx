'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ChevronDown, Menu, X } from 'lucide-react';

type NavItem = {
  title: string;
  path: string;
  children?: NavItem[];
};

// Add global style for menu-open class
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    body.menu-open {
      overflow: hidden;
    }

    .mobile-menu-container {
      max-height: calc(100vh - 60px);
      overflow-y: auto;
    }
  `;
  document.head.appendChild(style);
}

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Navigation data
  const navigationData: NavItem[] = [
    {
      title: 'Company',
      path: '/company',
      children: [
        { title: 'About Us', path: '/company/about' },
        { title: 'Blogs', path: '/company/blogs' },
        { title: 'Careers', path: '/company/careers' },
        { title: 'FAQs', path: '/company/faqs' },
        { title: 'Leadership', path: '/company/leadership' },
        { title: 'Partners', path: '/company/partners' },
        // { title: 'Pay Here', path: '/company/payhere' },
      ],
    },
    {
      title: 'Contact',
      path: '/contact',
      children: [
        { title: 'Contact Us', path: '/contact/general' },
        { title: 'Appointments', path: '/contact/appointment' },
      ],
    },
  ];

  // Mobile menu links
  const mobileNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Company', href: '/company' },
    { name: 'Contact', href: '/contact/general' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return pathname === path || (path !== '/' && pathname.startsWith(path));
  };

  return (
    <header className="relative">
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <ShieldCheck className="h-7 w-7 text-green-600" />
                <span className="ml-2 text-xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  MarcViews
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {/* Home Link */}
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/') 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
              </Link>

              {/* Services Link */}
              <Link
                href="/services"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/services')
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Services
              </Link>

              {/* Company Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === 'company' ? null : 'company');
                  }}
                  className={`flex items-center px-3 py-2 text-sm font-medium ${
                    isActive('/company')
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Company
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {/* Company Dropdown Menu */}
                {(activeDropdown === 'company' || isMenuOpen) && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  >
                    <div className="py-1">
                      {navigationData[0].children?.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`block px-4 py-2 text-sm ${
                            isActive(item.path)
                              ? 'bg-green-50 text-green-700' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('contact')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === 'contact' ? null : 'contact');
                  }}
                  className={`flex items-center px-3 py-2 text-sm font-medium ${
                    isActive('/contact')
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Contact
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {/* Contact Dropdown Menu */}
                {(activeDropdown === 'contact' || isMenuOpen) && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  >
                    <div className="py-1">
                      {navigationData[1].children?.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`block px-4 py-2 text-sm ${
                            isActive(item.path)
                              ? 'bg-green-50 text-green-700' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Company submenu in mobile */}
            <div className="pl-4">
              <h3 className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Company
              </h3>
              {navigationData[0].children?.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.path)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            
            {/* Contact submenu in mobile */}
            <div className="pl-4">
              <h3 className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </h3>
              {navigationData[1].children?.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.path)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Add padding to account for fixed header */}
      <div className="h-16"></div>
    </header>
  );
};
