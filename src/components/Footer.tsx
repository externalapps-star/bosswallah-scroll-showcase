import { Button } from "@/components/ui/button";
import youtubeIcon from "@/assets/youtube-logo.png";
import facebookIcon from "@/assets/facebook-logo.png";
import instagramIcon from "@/assets/instagram-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg md:text-2xl font-bold mb-4 gradient-text">
              Boss Wallah Media
            </h3>
            <p className="text-xs md:text-base text-background/80 leading-relaxed mb-6 max-w-md text-justify">
              Boss Wallah Media is #1 Social Media Platform in South India, reaching 18M+ followers and 330M+ monthly viewers across YouTube, Facebook, and Instagram. With six studios and a creative team delivering 200+ multilingual videos a week, Boss Wallah Media drives high-ROI campaigns for national and international brands alike. From social media boosts to influencer-style branded content, Boss Wallah Media is the go-to partner for brands seeking scale and impact especially in India's southern markets.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-4 text-background">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-xs md:text-base text-background/80 hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#channels" className="block text-xs md:text-base text-background/80 hover:text-primary transition-colors">
                Our Channels
              </a>
              <a href="#campaigns" className="block text-xs md:text-base text-background/80 hover:text-primary transition-colors">
                Marketing Campaigns
              </a>
              <a href="#testimonials" className="block text-xs md:text-base text-background/80 hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#news" className="block text-xs md:text-base text-background/80 hover:text-primary transition-colors">
                News
              </a>
              <a href="#blogs" className="block text-xs md:text-base text-background/80 hover:text-primary transition-colors">
                Blogs
              </a>
              <a href="#newsletter" className="block text-xs md:text-base text-background/80 hover:text-primary transition-colors">
                Newsletter
              </a>
              <a href="#contact" className="block text-xs md:text-base text-background/80 hover:text-primary transition-colors">
                Consult
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-4 text-background">Contact Info</h4>
            <div className="space-y-2 text-background/80">
              <p className="text-xs md:text-base">Email: brand@bosswallah.com</p>
              <div className="space-y-0.5">
                <p className="text-xs md:text-base">Phone: +91 7899571799</p>
                <p className="text-[10px] text-background/70 italic">[For business & marketing enquiries only]</p>
              </div>
              <p className="text-xs md:text-base">Languages: Telugu, Tamil, Kannada, Malayalam, Hindi, English</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-xs">
            © {currentYear} Boss Wallah Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://bosswallah.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="https://bosswallah.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary text-xs transition-colors">
              Terms of Use
            </a>
            <a href="https://bosswallah.com/refund-cancellation-policy" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary text-xs transition-colors">
              Refund & Cancellation
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;