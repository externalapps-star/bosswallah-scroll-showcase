import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, User, Menu, X } from "lucide-react";
import LoginModal from "@/components/LoginModal";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
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

  const languages: Array<{ code: Language; name: string; nativeName: string }> = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const scrollToSection = (sectionId: string) => {
    let targetId = sectionId;
    
    // Map navigation items to actual section IDs
    if (sectionId === 'testimonials') {
      // Since TestimonialsSection doesn't have an ID, scroll to services section
      targetId = 'services';
    } else if (sectionId === 'news') {
      // Scroll to where NewsSection is rendered
      targetId = 'services'; // Will need to add news ID later
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'testimonials' || sectionId === 'news') {
      // If sections don't have IDs, scroll to a position based on viewport height
      const sections = ['home', 'about', 'services'];
      const baseHeight = window.innerHeight;
      let scrollPosition = 0;
      
      if (sectionId === 'testimonials') {
        scrollPosition = baseHeight * 2.5; // After services
      } else if (sectionId === 'news') {
        scrollPosition = baseHeight * 3; // After testimonials
      }
      
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container-custom mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">BW</span>
                </div>
                <h1 className="text-xl font-bold gradient-text">
                  Boss Wallah
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.aboutUs')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.channels')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.campaigns')}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.brandReviews')}
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.news')}
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>{currentLanguage?.nativeName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border-border z-50">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`cursor-pointer ${
                        language === lang.code ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      {lang.nativeName}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <ThemeToggle />

              {/* Start Campaign CTA */}
              <Button 
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-2"
              >
                {t('nav.startCampaign')}
              </Button>

              {/* Login Button */}
              <Button 
                variant="outline"
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                {t('nav.login')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {t('nav.home')}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {t('nav.aboutUs')}
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {t('nav.channels')}
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {t('nav.campaigns')}
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {t('nav.brandReviews')}
                </button>
                <button 
                  onClick={() => scrollToSection('news')}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {t('nav.news')}
                </button>
                
                {/* Mobile Start Campaign CTA */}
                <Button 
                  onClick={() => {
                    scrollToSection('services');
                    setIsMobileMenuOpen(false);
                  }}
                  className="mx-4 mb-2"
                >
                  {t('nav.startCampaign')}
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
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => setLanguage(lang.code)}
                          className={`cursor-pointer ${
                            language === lang.code ? 'bg-accent text-accent-foreground' : ''
                          }`}
                        >
                          {lang.nativeName}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Mobile Login Button */}
                  <Button 
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full justify-start gap-2"
                  >
                    <User className="h-4 w-4" />
                    {t('nav.login')}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;