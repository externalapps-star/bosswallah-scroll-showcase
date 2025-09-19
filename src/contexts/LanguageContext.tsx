import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'mr' | 'gu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('bosswallah-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('bosswallah-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.aboutUs': 'About Us',
    'nav.channels': 'Channels',
    'nav.campaigns': 'Campaigns',
    'nav.brandReviews': 'Brand Reviews',
    'nav.news': 'News',
    'nav.startCampaign': 'Start a Campaign',
    'nav.login': 'Login',
    
    // Hero Section
    'hero.title': 'BOSS WALLAH MEDIA',
    'hero.subtitle': 'India\'s Leading Media House',
    'hero.description': 'Creating powerful digital campaigns that drive engagement, build brands, and deliver measurable results across all social media platforms.',
    'hero.cta': 'Start Your Campaign',
    'hero.watchVideo': 'Watch Our Story',
    
    // About Section
    'about.title': 'About Boss Wallah',
    'about.subtitle': 'Your Success is Our Mission',
    'about.description': 'We are a dynamic media house specializing in comprehensive digital marketing solutions. From content creation to campaign management, we help brands establish a powerful online presence.',
    'about.experience': 'Years of Experience',
    'about.campaigns': 'Successful Campaigns',
    'about.clients': 'Happy Clients',
    'about.reach': 'Million+ Reach',
    
    // Channels Section
    'channels.title': 'Our Channels',
    'channels.subtitle': 'Multi-Platform Excellence',
    'channels.youtube.title': 'YouTube Marketing',
    'channels.youtube.desc': 'Professional video content and channel management',
    'channels.facebook.title': 'Facebook Campaigns',
    'channels.facebook.desc': 'Targeted advertising and community building',
    'channels.instagram.title': 'Instagram Growth',
    'channels.instagram.desc': 'Visual storytelling and influencer partnerships',
    'channels.exploreChannel': 'Explore Channel',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Digital Solutions',
    'services.brandBuilding': 'Brand Building',
    'services.brandDesc': 'Complete brand identity and positioning strategies',
    'services.eventCampaign': 'Event Campaigns',
    'services.eventDesc': 'End-to-end event promotion and management',
    'services.indiaEntry': 'India Market Entry',
    'services.indiaDesc': 'Strategic market entry for international brands',
    'services.revenueGrowth': 'Revenue Growth',
    'services.revenueDesc': 'Data-driven strategies for business expansion',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Success Stories',
    
    // News Section
    'news.title': 'Latest News',
    'news.subtitle': 'Stay Updated',
    'news.readMore': 'Read More',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to Start Your Journey?',
    'contact.phone': 'Call Now',
    'contact.email': 'Send Email',
    'contact.whatsapp': 'WhatsApp',
    
    // Footer
    'footer.description': 'India\'s leading media house delivering exceptional digital marketing solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Info',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    
    // Login Modal
    'login.title': 'Welcome to Boss Wallah',
    'login.subtitle': 'Sign in to continue',
    'login.email': 'Email Address',
    'login.phone': 'Phone Number',
    'login.password': 'Password',
    'login.forgotPassword': 'Forgot Password?',
    'login.signIn': 'Sign In',
    'login.noAccount': 'Don\'t have an account?',
    'login.signUp': 'Sign Up',
    'login.continueWith': 'Or continue with',
    'login.emailTab': 'Email',
    'login.phoneTab': 'Phone',
    'login.enterEmail': 'Enter your email address',
    'login.enterPhone': 'Enter your phone number',
    'login.enterPassword': 'Enter your password',
    
    // Language Selector
    'language.select': 'Select Language',
    'language.english': 'English',
    'language.hindi': 'हिन्दी',
    'language.marathi': 'मराठी',
    'language.gujarati': 'ગુજરાતી',
  },
  
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.aboutUs': 'हमारे बारे में',
    'nav.channels': 'चैनल',
    'nav.campaigns': 'अभियान',
    'nav.brandReviews': 'ब्रांड समीक्षा',
    'nav.news': 'समाचार',
    'nav.startCampaign': 'अभियान शुरू करें',
    'nav.login': 'लॉगिन',
    
    // Hero Section
    'hero.title': 'बॉस वल्लाह मीडिया',
    'hero.subtitle': 'भारत का अग्रणी मीडिया हाउस',
    'hero.description': 'शक्तिशाली डिजिटल अभियान बनाना जो जुड़ाव बढ़ाते हैं, ब्रांड्स का निर्माण करते हैं, और सभी सोशल मीडिया प्लेटफॉर्म पर मापने योग्य परिणाम देते हैं।',
    'hero.cta': 'अपना अभियान शुरू करें',
    'hero.watchVideo': 'हमारी कहानी देखें',
    
    // About Section
    'about.title': 'बॉस वल्लाह के बारे में',
    'about.subtitle': 'आपकी सफलता हमारा मिशन है',
    'about.description': 'हम एक गतिशील मीडिया हाउस हैं जो व्यापक डिजिटल मार्केटिंग समाधानों में विशेषज्ञता रखते हैं। कंटेंट निर्माण से लेकर अभियान प्रबंधन तक, हम ब्रांड्स को एक मजबूत ऑनलाइन उपस्थिति स्थापित करने में मदद करते हैं।',
    'about.experience': 'वर्षों का अनुभव',
    'about.campaigns': 'सफल अभियान',
    'about.clients': 'खुश ग्राहक',
    'about.reach': 'मिलियन+ पहुंच',
    
    // Channels Section
    'channels.title': 'हमारे चैनल',
    'channels.subtitle': 'मल्टी-प्लेटफॉर्म उत्कृष्टता',
    'channels.youtube.title': 'यूट्यूब मार्केटिंग',
    'channels.youtube.desc': 'पेशेवर वीडियो कंटेंट और चैनल प्रबंधन',
    'channels.facebook.title': 'फेसबुक अभियान',
    'channels.facebook.desc': 'लक्षित विज्ञापन और समुदायिक निर्माण',
    'channels.instagram.title': 'इंस्टाग्राम ग्रोथ',
    'channels.instagram.desc': 'विज़ुअल स्टोरीटेलिंग और प्रभावशाली साझेदारी',
    'channels.exploreChannel': 'चैनल एक्सप्लोर करें',
    
    // Services Section
    'services.title': 'हमारी सेवाएं',
    'services.subtitle': 'व्यापक डिजिटल समाधान',
    'services.brandBuilding': 'ब्रांड निर्माण',
    'services.brandDesc': 'पूर्ण ब्रांड पहचान और पोजिशनिंग रणनीतियां',
    'services.eventCampaign': 'इवेंट अभियान',
    'services.eventDesc': 'एंड-टू-एंड इवेंट प्रमोशन और प्रबंधन',
    'services.indiaEntry': 'भारत मार्केट एंट्री',
    'services.indiaDesc': 'अंतर्राष्ट्रीय ब्रांड्स के लिए रणनीतिक बाजार प्रवेश',
    'services.revenueGrowth': 'राजस्व वृद्धि',
    'services.revenueDesc': 'व्यावसायिक विस्तार के लिए डेटा-संचालित रणनीतियां',
    
    // Testimonials
    'testimonials.title': 'हमारे ग्राहक क्या कहते हैं',
    'testimonials.subtitle': 'सफलता की कहानियां',
    
    // News Section
    'news.title': 'नवीनतम समाचार',
    'news.subtitle': 'अपडेट रहें',
    'news.readMore': 'और पढ़ें',
    
    // Contact Section
    'contact.title': 'संपर्क में रहें',
    'contact.subtitle': 'अपनी यात्रा शुरू करने के लिए तैयार हैं?',
    'contact.phone': 'अभी कॉल करें',
    'contact.email': 'ईमेल भेजें',
    'contact.whatsapp': 'व्हाट्सऐप',
    
    // Footer
    'footer.description': 'भारत का अग्रणी मीडिया हाउस जो असाधारण डिजिटल मार्केटिंग समाधान प्रदान करता है।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.services': 'सेवाएं',
    'footer.contact': 'संपर्क जानकारी',
    'footer.followUs': 'हमें फॉलो करें',
    'footer.rights': 'सभी अधिकार सुरक्षित।',
    
    // Login Modal
    'login.title': 'बॉस वल्लाह में आपका स्वागत है',
    'login.subtitle': 'जारी रखने के लिए साइन इन करें',
    'login.email': 'ईमेल पता',
    'login.phone': 'फोन नंबर',
    'login.password': 'पासवर्ड',
    'login.forgotPassword': 'पासवर्ड भूल गए?',
    'login.signIn': 'साइन इन',
    'login.noAccount': 'कोई खाता नहीं है?',
    'login.signUp': 'साइन अप',
    'login.continueWith': 'या के साथ जारी रखें',
    'login.emailTab': 'ईमेल',
    'login.phoneTab': 'फोन',
    'login.enterEmail': 'अपना ईमेल पता दर्ज करें',
    'login.enterPhone': 'अपना फोन नंबर दर्ज करें',
    'login.enterPassword': 'अपना पासवर्ड दर्ज करें',
    
    // Language Selector
    'language.select': 'भाषा चुनें',
    'language.english': 'English',
    'language.hindi': 'हिन्दी',
    'language.marathi': 'मराठी',
    'language.gujarati': 'ગુજરાતી',
  },
  
  mr: {
    // Navigation
    'nav.home': 'मुख्यपृष्ठ',
    'nav.aboutUs': 'आमच्याबद्दल',
    'nav.channels': 'चॅनेल',
    'nav.campaigns': 'मोहिमा',
    'nav.brandReviews': 'ब्रँड पुनरावलोकने',
    'nav.news': 'बातम्या',
    'nav.startCampaign': 'मोहीम सुरू करा',
    'nav.login': 'लॉगिन',
    
    // Hero Section
    'hero.title': 'बॉस वल्लाह मीडिया',
    'hero.subtitle': 'भारताचे आघाडीचे मीडिया हाउस',
    'hero.description': 'शक्तिशाली डिजिटल मोहिमा तयार करणे जे सहभाग वाढवतात, ब्रँड तयार करतात आणि सर्व सोशल मीडिया प्लॅटफॉर्मवर मोजता येतील असे परिणाम देतात.',
    'hero.cta': 'तुमची मोहीम सुरू करा',
    'hero.watchVideo': 'आमची कहाणी पहा',
    
    // About Section
    'about.title': 'बॉस वल्लाह बद्दल',
    'about.subtitle': 'तुमचे यश आमचे ध्येय आहे',
    'about.description': 'आम्ही एक गतिशील मीडिया हाउस आहोत जो सर्वसमावेशक डिजिटल मार्केटिंग समाधानांमध्ये विशेषज्ञता करते. कंटेंट निर्मितीपासून ते मोहीम व्यवस्थापनापर्यंत, आम्ही ब्रँडना मजबूत ऑनलाइन उपस्थिती स्थापित करण्यास मदत करतो.',
    'about.experience': 'वर्षांचा अनुभव',
    'about.campaigns': 'यशस्वी मोहिमा',
    'about.clients': 'आनंदी ग्राहक',
    'about.reach': 'दशलक्ष+ पोहोच',
    
    // Channels Section
    'channels.title': 'आमचे चॅनेल',
    'channels.subtitle': 'मल्टी-प्लॅटफॉर्म उत्कृष्टता',
    'channels.youtube.title': 'यूट्यूब मार्केटिंग',
    'channels.youtube.desc': 'व्यावसायिक व्हिडिओ कंटेंट आणि चॅनेल व्यवस्थापन',
    'channels.facebook.title': 'फेसबुक मोहिमा',
    'channels.facebook.desc': 'लक्ष्यित जाहिराती आणि समुदाय निर्माण',
    'channels.instagram.title': 'इन्स्टाग्राम वाढ',
    'channels.instagram.desc': 'व्हिज्युअल स्टोरीटेलिंग आणि प्रभावशाली भागीदारी',
    'channels.exploreChannel': 'चॅनेल एक्सप्लोर करा',
    
    // Services Section
    'services.title': 'आमच्या सेवा',
    'services.subtitle': 'सर्वसमावेशक डिजिटल समाधाने',
    'services.brandBuilding': 'ब्रँड निर्माण',
    'services.brandDesc': 'संपूर्ण ब्रँड ओळख आणि पोजिशनिंग धोरणे',
    'services.eventCampaign': 'इव्हेंट मोहिमा',
    'services.eventDesc': 'एंड-टू-एंड इव्हेंट प्रमोशन आणि व्यवस्थापन',
    'services.indiaEntry': 'भारत मार्केट एन्ट्री',
    'services.indiaDesc': 'आंतरराष्ट्रीय ब्रँडसाठी धोरणात्मक बाजार प्रवेश',
    'services.revenueGrowth': 'महसूल वाढ',
    'services.revenueDesc': 'व्यावसायिक विस्तारासाठी डेटा-चालित धोरणे',
    
    // Testimonials
    'testimonials.title': 'आमचे ग्राहक काय म्हणतात',
    'testimonials.subtitle': 'यशाच्या कथा',
    
    // News Section
    'news.title': 'नवीनतम बातम्या',
    'news.subtitle': 'अपडेट राहा',
    'news.readMore': 'अधिक वाचा',
    
    // Contact Section
    'contact.title': 'संपर्कात राहा',
    'contact.subtitle': 'तुमचा प्रवास सुरू करण्यास तयार आहात?',
    'contact.phone': 'आता कॉल करा',
    'contact.email': 'ईमेल पाठवा',
    'contact.whatsapp': 'व्हाट्सअ‍ॅप',
    
    // Footer
    'footer.description': 'भारताचे आघाडीचे मीडिया हाउस जे अपवादात्मक डिजिटल मार्केटिंग समाधाने प्रदान करते.',
    'footer.quickLinks': 'त्वरित दुवे',
    'footer.services': 'सेवा',
    'footer.contact': 'संपर्क माहिती',
    'footer.followUs': 'आम्हाला फॉलो करा',
    'footer.rights': 'सर्व हक्क राखीव.',
    
    // Login Modal
    'login.title': 'बॉस वल्लाह मध्ये आपले स्वागत आहे',
    'login.subtitle': 'सुरू ठेवण्यासाठी साइन इन करा',
    'login.email': 'ईमेल पत्ता',
    'login.phone': 'फोन नंबर',
    'login.password': 'पासवर्ड',
    'login.forgotPassword': 'पासवर्ड विसरलात?',
    'login.signIn': 'साइन इन',
    'login.noAccount': 'खाते नाही?',
    'login.signUp': 'साइन अप',
    'login.continueWith': 'किंवा सह सुरू ठेवा',
    'login.emailTab': 'ईमेल',
    'login.phoneTab': 'फोन',
    'login.enterEmail': 'तुमचा ईमेल पत्ता टाका',
    'login.enterPhone': 'तुमचा फोन नंबर टाका',
    'login.enterPassword': 'तुमचा पासवर्ड टाका',
    
    // Language Selector
    'language.select': 'भाषा निवडा',
    'language.english': 'English',
    'language.hindi': 'हिन्दी',
    'language.marathi': 'मराठी',
    'language.gujarati': 'ગુજરાતી',
  },
  
  gu: {
    // Navigation
    'nav.home': 'મુખ્ય',
    'nav.aboutUs': 'અમારા વિશે',
    'nav.channels': 'ચેનલ',
    'nav.campaigns': 'અભિયાન',
    'nav.brandReviews': 'બ્રાન્ડ સમીક્ષા',
    'nav.news': 'સમાચાર',
    'nav.startCampaign': 'અભિયાન શરૂ કરો',
    'nav.login': 'લૉગિન',
    
    // Hero Section
    'hero.title': 'બોસ વલ્લાહ મીડિયા',
    'hero.subtitle': 'ભારતનું અગ્રણી મીડિયા હાઉસ',
    'hero.description': 'શક્તિશાળી ડિજિટલ અભિયાનો બનાવવા જે જોડાણ વધારે છે, બ્રાંડ્સ બનાવે છે, અને તમામ સોશિયલ મીડિયા પ્લેટફોર્મ પર માપી શકાય તેવા પરિણામો આપે છે.',
    'hero.cta': 'તમારું અભિયાન શરૂ કરો',
    'hero.watchVideo': 'અમારી વાર્તા જુઓ',
    
    // About Section
    'about.title': 'બોસ વલ્લાહ વિશે',
    'about.subtitle': 'તમારી સફળતા અમારું મિશન છે',
    'about.description': 'અમે એક ગતિશીલ મીડિયા હાઉસ છીએ જે વ્યાપક ડિજિટલ માર્કેટિંગ સોલ્યુશન્સમાં વિશેષતા ધરાવે છે. કન્ટેન્ટ નિર્માણથી લઈને અભિયાન વ્યવસ્થાપન સુધી, અમે બ્રાંડ્સને મજબૂત ઓનલાઇન હાજરી સ્થાપિત કરવામાં મદદ કરીએ છીએ.',
    'about.experience': 'વર્ષોનો અનુભવ',
    'about.campaigns': 'સફળ અભિયાનો',
    'about.clients': 'ખુશ ગ્રાહકો',
    'about.reach': 'મિલિયન+ પહોંચ',
    
    // Channels Section
    'channels.title': 'અમારા ચેનલ્સ',
    'channels.subtitle': 'મલ્ટિ-પ્લેટફોર્મ ઉત્કૃષ્ટતા',
    'channels.youtube.title': 'યૂટ્યુબ માર્કેટિંગ',
    'channels.youtube.desc': 'વ્યાવસાયિક વિડિયો કન્ટેન્ટ અને ચેનલ વ્યવસ્થાપન',
    'channels.facebook.title': 'ફેસબુક અભિયાનો',
    'channels.facebook.desc': 'લક્ષ્યાંકિત જાહેરાતો અને સમુદાય નિર્માણ',
    'channels.instagram.title': 'ઇન્સ્ટાગ્રામ વૃદ્ધિ',
    'channels.instagram.desc': 'વિઝ્યુઅલ સ્ટોરીટેલિંગ અને પ્રભાવશાળી ભાગીદારી',
    'channels.exploreChannel': 'ચેનલ શોધો',
    
    // Services Section
    'services.title': 'અમારી સેવાઓ',
    'services.subtitle': 'વ્યાપક ડિજિટલ સોલ્યુશન્સ',
    'services.brandBuilding': 'બ્રાંડ બિલ્ડિંગ',
    'services.brandDesc': 'સંપૂર્ણ બ્રાંડ ઓળખ અને પોઝિશનિંગ વ્યૂહરચનાઓ',
    'services.eventCampaign': 'ઇવેન્ટ અભિયાનો',
    'services.eventDesc': 'એન્ડ-ટુ-એન્ડ ઇવેન્ટ પ્રમોશન અને વ્યવસ્થાપન',
    'services.indiaEntry': 'ભારત માર્કેટ એન્ટ્રી',
    'services.indiaDesc': 'આંતરરાષ્ટ્રીય બ્રાંડ્સ માટે વ્યૂહાત્મક માર્કેટ પ્રવેશ',
    'services.revenueGrowth': 'રેવન્યુ વૃદ્ધિ',
    'services.revenueDesc': 'બિઝનેસ વિસ્તરણ માટે ડેટા-સંચાલિત વ્યૂહરચનાઓ',
    
    // Testimonials
    'testimonials.title': 'અમારા ગ્રાહકો શું કહે છે',
    'testimonials.subtitle': 'સફળતાની વાર્તાઓ',
    
    // News Section
    'news.title': 'નવીનતમ સમાચાર',
    'news.subtitle': 'અપડેટ રહો',
    'news.readMore': 'વધુ વાંચો',
    
    // Contact Section
    'contact.title': 'સંપર્કમાં રહો',
    'contact.subtitle': 'તમારી યાત્રા શરૂ કરવા તૈયાર છો?',
    'contact.phone': 'હમણાં કૉલ કરો',
    'contact.email': 'ઇમેઇલ મોકલો',
    'contact.whatsapp': 'વ્હોટ્સએપ',
    
    // Footer
    'footer.description': 'ભારતનું અગ્રણી મીડિયા હાઉસ જે અસાધારણ ડિજિટલ માર્કેટિંગ સોલ્યુશન્સ પ્રદાન કરે છે.',
    'footer.quickLinks': 'ઝડપી લિંક્સ',
    'footer.services': 'સેવાઓ',
    'footer.contact': 'સંપર્ક માહિતી',
    'footer.followUs': 'અમને ફોલો કરો',
    'footer.rights': 'તમામ અધિકારો આરક્ષિત.',
    
    // Login Modal
    'login.title': 'બોસ વલ્લાહમાં આપનું સ્વાગત છે',
    'login.subtitle': 'ચાલુ રાખવા માટે સાઇન ઇન કરો',
    'login.email': 'ઇમેઇલ સરનામું',
    'login.phone': 'ફોન નંબર',
    'login.password': 'પાસવર્ડ',
    'login.forgotPassword': 'પાસવર્ડ ભૂલી ગયા?',
    'login.signIn': 'સાઇન ઇન',
    'login.noAccount': 'કોઈ એકાઉન્ટ નથી?',
    'login.signUp': 'સાઇન અપ',
    'login.continueWith': 'અથવા સાથે ચાલુ રાખો',
    'login.emailTab': 'ઇમેઇલ',
    'login.phoneTab': 'ફોન',
    'login.enterEmail': 'તમારું ઇમેઇલ સરનામું દાખલ કરો',
    'login.enterPhone': 'તમારો ફોન નંબર દાખલ કરો',
    'login.enterPassword': 'તમારો પાસવર્ડ દાખલ કરો',
    
    // Language Selector
    'language.select': 'ભાષા પસંદ કરો',
    'language.english': 'English',
    'language.hindi': 'हिन्दी',
    'language.marathi': 'मराठी',
    'language.gujarati': 'ગુજરાતી',
  }
};