import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from '../../assets/logo_small.png';

interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

interface FooterLinkSection {
  title: string;
  links: string[] | SocialLink[];
}

export function Footer2(): React.JSX.Element {
  const currentYear: number = new Date().getFullYear();

  const footerLinks: FooterLinkSection[] = [
    {
      title: "Entreprise",
      links: [
        "À propos",
        "Carrières",
        "Presse",
        "Contact"
      ]
    },
    {
      title: "Légal",
      links: [
        "Conditions générales",
        "Politique de confidentialité",
        "Mentions légales",
        "Cookies"
      ]
    },
    {
      title: "Réseaux Sociaux",
      links: [
        { name: "LinkedIn", icon: Linkedin, href: "#", color: "#0A66C2" },
        { name: "Twitter", icon: Twitter, href: "#", color: "#1DA1F2" },
        { name: "Instagram", icon: Instagram, href: "#", color: "#E1306C" },
        { name: "Facebook", icon: Facebook, href: "#", color: "#4267B2" }
      ]
    }
  ];

  const isSocialLink = (link: string | SocialLink): link is SocialLink => {
    return typeof link !== 'string' && 'icon' in link;
  };

  return (
    <footer className="bg-stone-100 border-t border-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1.2fr] gap-8 space-y-8 md:space-y-0">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={Logo}
                alt="Trophenix Logo"
                className="w-8 mr-1"
              />
              <div className="text-xl font-bold text-gray-900">
                Trophenix
              </div>
            </div>
            <p className="text-stone-600 max-w-xs">
              Gérez votre carrière et votre reconversion sportive.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div
              key={index}
              className={`md:col-span-1 ${index === footerLinks.length - 1 ? 'md:ml-18' : ''}`}
            >
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  isSocialLink(link) ? (
                    <li key={linkIndex} className="flex items-center space-x-2">
                      <a
                        href={link.href}
                        className="flex items-center text-stone-600 hover:text-[#514be5] transition-colors text-sm"
                      >
                        <link.icon
                          size={18}
                          color={link.color}
                          className="mr-2"
                        />
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-stone-600 hover:text-[#514be5] transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  )
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-300 flex justify-center items-center">
          <p className="text-sm text-stone-600">
            © {currentYear} Trophenix. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}