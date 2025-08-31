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

const Navigation = () => {
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
      setActiveDropdown(null);
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
              <Link 
                href="/" 
                className="flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
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
                  pathname === '/' 
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
                  pathname.startsWith('/services')
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Services
              </Link>

              {/* Company Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                  className={`flex items-center px-3 py-2 text-sm font-medium ${
                    pathname.startsWith('/company')
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Company
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === 'company' ? 'transform rotate-180' : ''
                  }`} />
                </button>
                
                {/* Company Dropdown Menu */}
                {activeDropdown === 'company' && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1">
                      {navigationData[0].children?.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`block px-4 py-2 text-sm ${
                            pathname === item.path
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
              <div className="relative dropdown-container">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'contact' ? null : 'contact')}
                  className={`flex items-center px-3 py-2 text-sm font-medium ${
                    pathname.startsWith('/contact')
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Contact
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === 'contact' ? 'transform rotate-180' : ''
                  }`} />
                </button>
                
                {/* Contact Dropdown Menu */}
                {activeDropdown === 'contact' && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1">
                      {navigationData[1].children?.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`block px-4 py-2 text-sm ${
                            pathname === item.path
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
                aria-expanded="false"
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
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 w-5/6 max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full overflow-y-auto mobile-menu-container">
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b">
                <div className="flex items-center">
                  <ShieldCheck className="h-7 w-7 text-green-600" />
                  <span className="ml-2 text-xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    MarcViews
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="px-6 py-6 space-y-6">
                <Link
                  href="/"
                  className={`block py-2 text-base font-medium ${
                    pathname === '/' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                <Link
                  href="/services"
                  className={`block py-2 text-base font-medium ${
                    pathname.startsWith('/services') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                    className="flex items-center justify-between w-full py-2 text-base font-medium text-left text-gray-700 hover:text-green-600"
                  >
                    <span>Company</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeDropdown === 'company' ? 'transform rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === 'company' && (
                    <div className="mt-2 pl-4 space-y-2">
                      {navigationData[0].children?.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`block py-2 text-sm ${
                            pathname === item.path ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'contact' ? null : 'contact')}
                    className="flex items-center justify-between w-full py-2 text-base font-medium text-left text-gray-700 hover:text-green-600"
                  >
                    <span>Contact</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeDropdown === 'contact' ? 'transform rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === 'contact' && (
                    <div className="mt-2 pl-4 space-y-2">
                      {navigationData[1].children?.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`block py-2 text-sm ${
                            pathname === item.path ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add padding to account for fixed header */}
      <div className="h-16"></div>
    </header>
  );
};

export default Navigation;
