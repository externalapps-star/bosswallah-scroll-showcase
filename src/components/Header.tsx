import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe, User, Menu, X, ExternalLink } from "lucide-react";
import LoginModal from "@/components/LoginModal";
import bossWallahLogo from "@/assets/boss-wallah-logo.svg";
const Header = () => {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > heroHeight * 0.8);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const languages: Array<{
    code: Language;
    name: string;
    nativeName: string;
  }> = [{
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు'
  }, {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்'
  }, {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ'
  }, {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം'
  }, {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी'
  }, {
    code: 'en',
    name: 'English',
    nativeName: 'English'
  }];
  const currentLanguage = languages.find(lang => lang.code === language);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <>
      {/* Fixed Logo - Always Visible */}
      <div className="fixed top-2 left-4 z-50">
        <div className="flex items-center gap-3">
          <img src={bossWallahLogo} alt="Boss Wallah" className="h-12 w-auto rounded-lg px-4 py-3 bg-white/90 backdrop-blur-sm" />
        </div>
      </div>

      {/* Fixed Theme Toggle - Only visible when nav is hidden */}
      {!isVisible && <div className="fixed top-2 right-4 z-50">
          <ThemeToggle />
        </div>}

      <header className={`fixed top-0 left-0 right-0 z-40 bg-orange-50/95 backdrop-blur-md border-b-2 border-white shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container-custom mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left spacer */}
            <div className="flex-1"></div>

            {/* Desktop Navigation - Center aligned */}
            <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                {t('nav.aboutUs')}
              </button>
              <button onClick={() => scrollToSection('channels')} className="text-foreground hover:text-primary transition-colors">
                {t('nav.channels')}
              </button>
              <button onClick={() => scrollToSection('campaigns')} className="text-foreground hover:text-primary transition-colors">
                {t('nav.campaigns')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">
                {t('nav.brandReviews')}
              </button>
              <button onClick={() => scrollToSection('news')} className="text-foreground hover:text-primary transition-colors">
                {t('nav.news')}
              </button>
            </nav>

            {/* Desktop Actions - Extreme right */}
            <div className="hidden md:flex items-center space-x-2 flex-1 justify-end">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>{currentLanguage?.nativeName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border-border z-50">
                  {languages.map(lang => <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className={`cursor-pointer ${language === lang.code ? 'bg-accent text-accent-foreground' : ''}`}>
                      {lang.nativeName}
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Submit Enquiry CTA */}
              <Button onClick={() => scrollToSection('contact')} className="flex items-center gap-2">Start Campaign</Button>

              {/* Official Website Button */}
              <Button variant="outline" onClick={() => window.open('https://bosswallah.com', '_blank')} className="flex items-center gap-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary hover:text-primary font-medium transition-all duration-200">
                <ExternalLink className="h-4 w-4" />
                Official Website
              </Button>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.home')}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.aboutUs')}
                </button>
                <button onClick={() => scrollToSection('channels')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.channels')}
                </button>
                <button onClick={() => scrollToSection('campaigns')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.campaigns')}
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.brandReviews')}
                </button>
                <button onClick={() => scrollToSection('news')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.news')}
                </button>
                
                {/* Mobile Submit Enquiry CTA */}
                <Button onClick={() => {
              scrollToSection('contact');
              setIsMobileMenuOpen(false);
            }} className="mx-4 mb-2">
                  Start A Campaign
                </Button>
                
                <div className="px-4 py-2 border-t border-border">
                  {/* Mobile Language Selector */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-start gap-2 mb-2">
                        <Globe className="h-4 w-4" />
                        <span>{currentLanguage?.nativeName}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background border-border z-50">
                      {languages.map(lang => <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className={`cursor-pointer ${language === lang.code ? 'bg-accent text-accent-foreground' : ''}`}>
                          {lang.nativeName}
                        </DropdownMenuItem>)}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Mobile Official Website Button */}
                  <Button onClick={() => {
                window.open('https://bosswallah.com', '_blank');
                setIsMobileMenuOpen(false);
              }} className="w-full justify-start gap-2 mb-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary hover:text-primary font-medium transition-all duration-200" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                    Official Website
                  </Button>

                  {/* Mobile Theme Toggle */}
                  <div className="flex justify-start">
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </div>}
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>;
};
export default Header;