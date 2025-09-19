import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'te' | 'ta' | 'kn' | 'hi' | 'en' | 'ml';

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

// Complete translation dictionary for all 6 languages
const translations = {
  te: {
    // Navigation
    'nav.home': 'హోమ్',
    'nav.aboutUs': 'మా గురించి',
    'nav.channels': 'చానెల్స్',
    'nav.campaigns': 'ప్రచారాలు',
    'nav.brandReviews': 'బ్రాండ్ రివ్యూలు',
    'nav.news': 'వార్తలు',
    'nav.submitEnquiry': 'విచారణ పంపండి',
    'nav.login': 'లాగిన్',
    
    // Hero Section
    'hero.title': 'బాస్ వల్లా మీడియా',
    'hero.subtitle': 'భారత యొక్క ప్రముఖ మీడియా హౌస్',
    'hero.description': 'అన్ని సోషల్ మీడియా ప్లాట్‌ఫారమ్‌లలో ఎంగేజ్‌మెంట్ పెంచే, బ్రాండ్‌లను నిర్మించే మరియు కొలవగల ఫలితాలను అందించే శక్తివంతమైన డిజిటల్ ప్రచారాలను సృష్టిస్తాము.',
    'hero.cta': 'చానెల్స్ అన్వేషించండి',
    'hero.watchVideo': 'మా కథ చూడండి',
    
    // About Section
    'about.title': 'బాస్ వల్లా గురించి',
    'about.subtitle': 'మీ విజయమే మా మిషన్',
    'about.description': 'మేము సమగ్ర డిజిటల్ మార్కెటింగ్ సొల్యూషన్స్‌లో ప్రత్యేకత కలిగిన డైనమిక్ మీడియా హౌస్. కంటెంట్ క్రియేషన్ నుండి క్యాంపెయిన్ మేనేజ్‌మెంట్ వరకు, బ్రాండ్‌లకు శక్తివంతమైన ఆన్‌లైన్ ఉనికిని స్థాపించడంలో మేము సహాయపడతాము.',
    'about.experience': 'సంవత్సరాల అనుభవం',
    'about.campaigns': 'విజయవంతమైన ప్రచారాలు',
    'about.clients': 'సంతోషకర ఖాతాదారులు',
    'about.reach': 'మిలియన్+ రీచ్',
    
    // Channels Section  
    'channels.title': 'మా చానెల్స్',
    'channels.subtitle': 'మల్టీ-ప్లాట్‌ఫారమ్ ఎక్సలెన్స్',
    'channels.youtube.title': 'యూట్యూబ్ మార్కెటింగ్',
    'channels.youtube.desc': 'ప్రొఫెషనల్ వీడియో కంటెంట్ మరియు చానెల్ మేనేజ్‌మెంట్',
    'channels.facebook.title': 'ఫేస్‌బుక్ ప్రచారాలు',
    'channels.facebook.desc': 'లక్ష్యంగా చేసుకున్ న ప్రకటనలు మరియు కమ్యూనిటీ నిర్మాణం',
    'channels.instagram.title': 'ఇన్‌స్టాగ్రామ్ గ్రోత్',
    'channels.instagram.desc': 'విజువల్ స్టోరీటెలింగ్ మరియు ఇన్‌ఫ్లుయెన్సర్ పార్టనర్‌షిప్స్',
    'channels.exploreChannel': 'చానెల్ అన్వేషించండి',
    
    // Services Section
    'services.title': 'మా సేవలు',
    'services.subtitle': 'సమగ్ర డిజిటల్ పరిష్కారాలు',
    'services.brandBuilding': 'బ్రాండ్ నిర్మాణం',
    'services.brandDesc': 'సంపూర్ణ బ్రాండ్ గుర్తింపు మరియు స్థానికరణ వ్యూహాలు',
    'services.eventCampaign': 'ఈవెంట్ ప్రచారాలు',
    'services.eventDesc': 'ఎండ్-టు-ఎండ్ ఈవెంట్ ప్రమోషన్ మరియు నిర్వహణ',
    'services.indiaEntry': 'భారత మార్కెట్ ప్రవేశం',
    'services.indiaDesc': 'అంతర్జాతీయ బ్రాండ్ల కోసం వ్యూహాత్మక మార్కెట్ ప్రవేశం',
    'services.revenueGrowth': 'ఆదాయ వృద్ధి',
    'services.revenueDesc': 'వ్యాపార విస్తరణ కోసం డేటా ఆధారిత వ్యూహాలు',
    
    // Testimonials
    'testimonials.title': 'మా క్లయింట్లు ఏమంటున్నారు',
    'testimonials.subtitle': 'విజయ కథలు',
    
    // News Section
    'news.title': 'తాజా వార్తలు',
    'news.subtitle': 'నవీకరణలు పొందండి',
    'news.readMore': 'మరింత చదవండి',
    
    // Contact Section
    'contact.title': 'సంప్రదించండి',
    'contact.subtitle': 'మీ ప్రయాణం ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?',
    'contact.phone': 'ఇప్పుడే కాల్ చేయండి',
    'contact.email': 'ఇమెయిల్ పంపండి',
    'contact.whatsapp': 'వాట్సాస్అప్',
    
    // Footer
    'footer.description': 'అసాధారణమైన డిజిటల్ మార్కెటింగ్ సొల్యూషన్స్ అందించే భారత యొక్క ప్రముఖ మీడియా హౌస్.',
    'footer.quickLinks': 'శీఘ్ర లింక్‌లు',
    'footer.services': 'సేవలు',
    'footer.contact': 'సంప్రదింపు వివరాలు',
    'footer.followUs': 'మాకు ఫాలో చేయండి',
    'footer.rights': 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    
    // Login Modal
    'login.title': 'బాస్ వల్లా లోకి స్వాగతం',
    'login.subtitle': 'కొనసాగించడానికి సైన్ ఇన్ చేయండి',
    'login.email': 'ఇమెయిల్ చిరునామా',
    'login.phone': 'ఫోన్ నంబర్',
    'login.password': 'పాస్వర్డ్',
    'login.forgotPassword': 'పాస్వర్డ్ మర్చిపోయారా?',
    'login.signIn': 'సైన్ ఇన్',
    'login.noAccount': 'ఖాతా లేరు?',
    'login.signUp': 'సైన్ అప్',
    'login.continueWith': 'లేదా తో కొనసాగించండి',
    'login.emailTab': 'ఇమెయిల్',
    'login.phoneTab': 'ఫోన్',
    'login.enterEmail': 'మీ ఇమెయిల్ చిరునామా నమోదు చేయండి',
    'login.enterPhone': 'మీ ఫోన్ నంబర్ నమోదు చేయండి',
    'login.enterPassword': 'మీ పాస్వర్డ్ నమోదు చేయండి',
    
    // Language Selector
    'language.select': 'భాషను ఎంచుకోండి',
    'language.english': 'English',
    'language.hindi': 'हिन्दी',
    'language.marathi': 'मराठी',
    'language.gujarati': 'ગુજરાતી',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.aboutUs': 'எங்களைப் பற்றி',
    'nav.channels': 'சேனல்கள்',
    'nav.campaigns': 'பிரச்சாரங்கள்',
    'nav.brandReviews': 'பிராண்ட் மதிப்புரைகள்',
    'nav.news': 'செய்திகள்',
    'nav.submitEnquiry': 'விசாரணை அனுப்பவும்',
    'nav.login': 'உள்நுழைவு',
    
    // Hero Section
    'hero.title': 'பாஸ் வல்லா மீடியா',
    'hero.subtitle': 'இந்தியாவின் முன்னணி மீடியா ஹவுஸ்',
    'hero.description': 'அனைத்து சமூக ஊடக தளங்களிலும் ஈடுபாட்டை அதிகரிக்கும், பிராண்டுகளை உருவாக்கும் மற்றும் அளவிடக்கூடிய முடிவுகளை வழங்கும் சக்திவாய்ந்த டிஜிட்டல் பிரச்சாரங்களை உருவாக்குகிறோம்.',
    'hero.cta': 'சேனல்களை ஆராயுங்கள்',
    'hero.watchVideo': 'எங்கள் கதையைப் பாருங்கள்',
    
    // About Section
    'about.title': 'பாஸ் வல்லா பற்றி',
    'about.subtitle': 'உங்கள் வெற்றி எங்கள் பணி',
    'about.description': 'நாங்கள் விரிவான டிஜிட்டல் மார்க்கெட்டிங் தீர்வுகளில் சிறப்பு பெற்ற ஒரு இயக்கமுள்ள மீடியா ஹவுஸ். உள்ளடக்க உருவாக்கம் முதல் பிரச்சார மேலாண்மை வரை, பிராண்டுகளுக்கு வலுவான ஆன்லைன் இருப்பை நிறுவ உதவுகிறோம்.',
    'about.experience': 'ஆண்டுகள் அனுபவம்',
    'about.campaigns': 'வெற்றிகரமான பிரச்சாரங்கள்',
    'about.clients': 'மகிழ்ச்சியான வாடிக்கையாளர்கள்',
    'about.reach': 'மில்லியன்+ அடைவு',
    
    // Channels Section
    'channels.title': 'எங்கள் சேனல்கள்',
    'channels.subtitle': 'பல தள சிறப்பு',
    'channels.youtube.title': 'யூடியூப் மார்க்கெட்டிங்',
    'channels.youtube.desc': 'தொழில்முறை வீடியோ உள்ளடக்கம் மற்றும் சேனல் மேலாண்மை',
    'channels.facebook.title': 'பேஸ்புக் பிரச்சாரங்கள்',
    'channels.facebook.desc': 'இலக்கு விளம்பரங்கள் மற்றும் சமூக கட்டமைப்பு',
    'channels.instagram.title': 'இன்ஸ்டாகிராம் வளர்ச்சி',
    'channels.instagram.desc': 'காட்சி கதை சொல்லல் மற்றும் பாதிப்பாளர்கள் கூட்டாண்மை',
    'channels.exploreChannel': 'சேனலை ஆராயுங்கள்',
    
    // Services Section
    'services.title': 'எங்கள் சேவைகள்',
    'services.subtitle': 'விரிவான டிஜிட்டல் தீர்வுகள்',
    'services.brandBuilding': 'பிராண்ட் கட்டமைப்பு',
    'services.brandDesc': 'முழுமையான பிராண்ட் அடையாளம் மற்றும் நிலைநிறுத்தல் திட்டங்கள்',
    'services.eventCampaign': 'நிகழ்ச்சி பிரச்சாரங்கள்',
    'services.eventDesc': 'முழுமையான நிகழ்ச்சி விளம்பரம் மற்றும் மேலாண்மை',
    'services.indiaEntry': 'இந்தியா சந்தை நுழைவு',
    'services.indiaDesc': 'சர்வதேச பிராண்டுகளுக்கான திட்டமிடப்பட்ட சந்தை நுழைவு',
    'services.revenueGrowth': 'வருமான வளர்ச்சி',
    'services.revenueDesc': 'வணிக விரிவாக்கத்திற்கான தரவுத்தள திட்டங்கள்',
    
    // Testimonials
    'testimonials.title': 'எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்',
    'testimonials.subtitle': 'வெற்றி கதைகள்',
    
    // News Section
    'news.title': 'சமீபத்திய செய்திகள்',
    'news.subtitle': 'புதுப்பிப்புகளைப் பெறுங்கள்',
    'news.readMore': 'மேலும் படிக்க',
    
    // Contact Section
    'contact.title': 'தொடர்பு கொள்ளவும்',
    'contact.subtitle': 'உங்கள் பயணத்தைத் தொடங்க தயாரா?',
    'contact.phone': 'இப்போது அழைக்கவும்',
    'contact.email': 'மின்னஞ்சல் அனுப்பவும்',
    'contact.whatsapp': 'வாட்ஸ்அப்',
    
    // Footer
    'footer.description': 'சிறந்த டிஜிட்டல் மார்க்கெட்டிங் தீர்வுகளை வழங்கும் இந்தியாவின் முன்னணி மீடியா ஹவுஸ்.',
    'footer.quickLinks': 'விரைவு இணைப்புகள்',
    'footer.services': 'சேவைகள்',
    'footer.contact': 'தொடர்பு தகவல்',
    'footer.followUs': 'எங்களை பின்தொடரவும்',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    
    // Login Modal
    'login.title': 'பாஸ் வல்லா வரவேற்கிறது',
    'login.subtitle': 'தொடர sign in செய்யவும்',
    'login.email': 'மின்னஞ்சல் முகவரி',
    'login.phone': 'தொலைபேசி எண்',
    'login.password': 'கடவுச்சொல்',
    'login.forgotPassword': 'கடவுச்சொல் மறந்துவிட்டீர்களா?',
    'login.signIn': 'உள்நுழைய',
    'login.noAccount': 'கணக்கு இல்லை?',
    'login.signUp': 'பதிவு செய்யவும்',
    'login.continueWith': 'அல்லது தொடரவும்',
    'login.emailTab': 'மின்னஞ்சல்',
    'login.phoneTab': 'தொலைபேசி',
    'login.enterEmail': 'உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்',
    'login.enterPhone': 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
    'login.enterPassword': 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்',
    
    // Language Selector
    'language.select': 'மொழியை தேர்ந்தெடுக்கவும்',
    'language.english': 'English',
    'language.hindi': 'हिन्दी',
    'language.marathi': 'मराठी',
    'language.gujarati': 'ગુજરાતી',
  },
  kn: {
    // Navigation  
    'nav.home': 'ಮುಖ್ಯಪುಟ',
    'nav.aboutUs': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'nav.channels': 'ಚಾನೆಲ್‌ಗಳು',
    'nav.campaigns': 'ಪ್ರಚಾರಗಳು',
    'nav.brandReviews': 'ಬ್ರಾಂಡ್ ವಿಮರ್ಶೆಗಳು',
    'nav.news': 'ಸುದ್ದಿ',
    'nav.submitEnquiry': 'ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ',
    'nav.login': 'ಲಾಗಿನ್',
    
    // Hero Section
    'hero.title': 'ಬಾಸ್ ವಲ್ಲಾ ಮೀಡಿಯಾ',
    'hero.subtitle': 'ಭಾರತದ ಪ್ರಮುಖ ಮೀಡಿಯಾ ಹೌಸ್',
    'hero.description': 'ಎಲ್ಲಾ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ವೇದಿಕೆಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಯನ್ನು ಹೆಚ್ಚಿಸುವ, ಬ್ರಾಂಡ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುವ ಮತ್ತು ಅಳೆಯಬಹುದಾದ ಫಲಿತಾಂಶಗಳನ್ನು ನೀಡುವ ಶಕ್ತಿಶಾಲಿ ಡಿಜಿಟಲ್ ಪ್ರಚಾರಗಳನ್ನು ರಚಿಸುತ್ತೇವೆ.',
    'hero.cta': 'ಚಾನೆಲ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    'hero.watchVideo': 'ನಮ್ಮ ಕಥೆ ನೋಡಿ',
    
    // About Section
    'about.title': 'ಬಾಸ್ ವಲ್ಲಾ ಬಗ್ಗೆ',
    'about.subtitle': 'ನಿಮ್ಮ ಯಶಸ್ಸು ನಮ್ಮ ಗುರಿ',
    'about.description': 'ನಾವು ಸಮಗ್ರ ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಪರಿಹಾರಗಳಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿರುವ ಚುರುಕಾದ ಮೀಡಿಯಾ ಹೌಸ್. ವಿಷಯ ಸೃಷ್ಟಿಯಿಂದ ಪ್ರಚಾರ ನಿರ್ವಹಣೆಯವರೆಗೆ, ಬ್ರಾಂಡ್‌ಗಳಿಗೆ ಬಲವಾದ ಆನ್‌ಲೈನ್ ಹಾಜರಾತಿ ಸ್ಥಾಪಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
    'about.experience': 'ವರ್ಷಗಳ ಅನುಭವ',
    'about.campaigns': 'ಯಶಸ್ವಿ ಪ್ರಚಾರಗಳು',
    'about.clients': 'ಸಂತೋಷಕರ ಗ್ರಾಹಕರು',
    'about.reach': 'ಮಿಲಿಯನ್+ ತಲುಪುವಿಕೆ',
    
    // Channels Section
    'channels.title': 'ನಮ್ಮ ಚಾನೆಲ್‌ಗಳು',
    'channels.subtitle': 'ಬಹು-ಮಾಧ್ಯಮ ಶ್ರೇಷ್ಠತೆ',
    'channels.youtube.title': 'ಯೂಟ್ಯೂಬ್ ಮಾರ್ಕೆಟಿಂಗ್',
    'channels.youtube.desc': 'ವೃತ್ತಿಪರ ವೀಡಿಯೊ ವಿಷಯ ಮತ್ತು ಚಾನೆಲ್ ನಿರ್ವಹಣೆ',
    'channels.facebook.title': 'ಫೇಸ್ಬುಕ್ ಪ್ರಚಾರಗಳು',
    'channels.facebook.desc': 'ಲಕ್ಷ್ಯಿತ ಜಾಹೀರಾತುಗಳು ಮತ್ತು ಸಮುದಾಯ ನಿರ್ಮಾಣ',
    'channels.instagram.title': 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ವೃದ್ಧಿ',
    'channels.instagram.desc': 'ದೃಶ್ಯ ಕಥನ ಮತ್ತು ಪ್ರಭಾವಶಾಲಿ ಸಹಭಾಗಿತ್ವಗಳು',
    'channels.exploreChannel': 'ಚಾನೆಲ್ ಅನ್ವೇಷಿಸಿ',
    
    // Services Section
    'services.title': 'ನಮ್ಮ ಸೇವೆಗಳು',
    'services.subtitle': 'ಸಮಗ್ರ ಡಿಜಿಟಲ್ ಪರಿಹಾರಗಳು',
    'services.brandBuilding': 'ಬ್ರಾಂಡ್ ನಿರ್ಮಾಣ',
    'services.brandDesc': 'ಪೂರ್ಣ ಬ್ರಾಂಡ್ ಗುರುತು ಮತ್ತು ಸ್ಥಾನಮಾನ ತಂತ್ರಗಳು',
    'services.eventCampaign': 'ಕಾರ್ಯಕ್ರಮ ಪ್ರಚಾರಗಳು',
    'services.eventDesc': 'ಎಂಡ್-ಟು-ಎಂಡ್ ಕಾರ್ಯಕ್ರಮ ಪ್ರಚಾರ ಮತ್ತು ನಿರ್ವಹಣೆ',
    'services.indiaEntry': 'ಭಾರತ ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶ',
    'services.indiaDesc': 'ಅಂತರರಾಷ್ಟ್ರೀಯ ಬ್ರಾಂಡ್‌ಗಳಿಗೆ ತಂತ್ರಜ್ಞಾನದ ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶ',
    'services.revenueGrowth': 'ಆದಾಯ ವೃದ್ಧಿ',
    'services.revenueDesc': 'ವ್ಯಾಪಾರ ವಿಸ್ತರಣೆಗೆ ಡೇಟಾ ಚಾಲಿತ ತಂತ್ರಗಳು',
    
    // Testimonials
    'testimonials.title': 'ನಮ್ಮ ಗ್ರಾಹಕರು ಏನು ಹೇಳುತ್ತಾರೆ',
    'testimonials.subtitle': 'ಯಶಸ್ಸಿನ ಕಥೆಗಳು',
    
    // News Section
    'news.title': 'ಇತ್ತೀಚಿನ ಸುದ್ದಿ',
    'news.subtitle': 'ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ',
    'news.readMore': 'ಇನ್ನಷ್ಟು ಓದಿ',
    
    // Contact Section
    'contact.title': 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
    'contact.subtitle': 'ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?',
    'contact.phone': 'ಈಗ ಕರೆ ಮಾಡಿ',
    'contact.email': 'ಇಮೇಲ್ ಕಳುಹಿಸಿ',
    'contact.whatsapp': 'ವಾಟ್ಸ್‌ಆಪ್',
    
    // Footer
    'footer.description': 'ಅಸಾಧಾರಣ ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುವ ಭಾರತದ ಪ್ರಮುಖ ಮೀಡಿಯಾ ಹೌಸ್.',
    'footer.quickLinks': 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    'footer.services': 'ಸೇವೆಗಳು',
    'footer.contact': 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
    'footer.followUs': 'ನಮಗೆ ಅನುಸರಿಸಿ',
    'footer.rights': 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    
    // Login Modal
    'login.title': 'ಬಾಸ್ ವಲ್ಲಾ ಗೆ ಸ್ವಾಗತ',
    'login.subtitle': 'ಮುಂದುವರೆಯಲು ಸೈನ್ ಇನ್ ಮಾಡಿ',
    'login.email': 'ಇಮೇಲ್ ವಿಳಾಸ',
    'login.phone': 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ',
    'login.password': 'ಪಾಸ್ವರ್ಡ್',
    'login.forgotPassword': 'ಪಾಸ್ವರ್ಡ್ ಮರೆತಿರಾ?',
    'login.signIn': 'ಸೈನ್ ಇನ್',
    'login.noAccount': 'ಖಾತೆ ಇಲ್ಲವೇ?',
    'login.signUp': 'ಸೈನ್ ಅಪ್',
    'login.continueWith': 'ಅಥವಾ ಮುಂದುವರೆಯಿರಿ',
    'login.emailTab': 'ಇಮೇಲ್',
    'login.phoneTab': 'ದೂರವಾಣಿ',
    'login.enterEmail': 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
    'login.enterPhone': 'ನಿಮ್ಮ ದೂರವಾಣಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
    'login.enterPassword': 'ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ಅನ್ನು ನಮೂದಿಸಿ',
    
    // Language Selector
    'language.select': 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
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
    'nav.submitEnquiry': 'पूछताछ भेजें',
    'nav.login': 'लॉगिन',
    
    // Hero Section
    'hero.title': 'बॉस वल्लाह मीडिया',
    'hero.subtitle': 'भारत का अग्रणी मीडिया हाउस',
    'hero.description': 'शक्तिशाली डिजिटल अभियान बनाना जो जुड़ाव बढ़ाते हैं, ब्रांड्स का निर्माण करते हैं, और सभी सोशल मीडिया प्लेटफॉर्म पर मापने योग्य परिणाम देते हैं।',
    'hero.cta': 'चैनल एक्सप्लोर करें',
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
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.aboutUs': 'About Us',
    'nav.channels': 'Channels',
    'nav.campaigns': 'Campaigns',
    'nav.brandReviews': 'Brand Reviews',
    'nav.news': 'News',
    'nav.submitEnquiry': 'Submit Enquiry',
    'nav.login': 'Login',
    
    // Hero Section
    'hero.title': 'BOSS WALLAH MEDIA',
    'hero.subtitle': 'India\'s Leading Media House',
    'hero.description': 'Creating powerful digital campaigns that drive engagement, build brands, and deliver measurable results across all social media platforms.',
    'hero.cta': 'Explore Channels',
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
  ml: {
    // Navigation
    'nav.home': 'ഹോം',
    'nav.aboutUs': 'ഞങ്ങളെ കുറിച്ച്',
    'nav.channels': 'ചാനലുകൾ',
    'nav.campaigns': 'കാമ്പെയ്‌നുകൾ',
    'nav.brandReviews': 'ബ്രാൻഡ് റിവ്യൂകൾ',
    'nav.news': 'വാർത്തകൾ',
    'nav.submitEnquiry': 'അന്വേഷണം സമർപ്പിക്കുക',
    'nav.login': 'ലോഗിൻ',
    
    // Hero Section
    'hero.title': 'ബോസ് വല്ലാ മീഡിയ',
    'hero.subtitle': 'ഇന്ത്യയിലെ മുൻനിര മീഡിയ ഹൗസ്',
    'hero.description': 'എല്ലാ സോഷ്യൽ മീഡിയ പ്ലാറ്റ്‌ഫോമുകളിലും ഇടപെടൽ വർധിപ്പിക്കുന്ന, ബ്രാൻഡുകൾ നിർമ്മിക്കുന്ന, അളക്കാവുന്ന ഫലങ്ങൾ നൽകുന്ന ശക്തമായ ഡിജിറ്റൽ കാമ്പെയ്‌നുകൾ സൃഷ്ടിക്കുന്നു.',
    'hero.cta': 'ചാനലുകൾ പര്യവേക്ഷണം ചെയ്യുക',
    'hero.watchVideo': 'ഞങ്ങളുടെ കഥ കാണുക',
    
    // About Section
    'about.title': 'ബോസ് വല്ലാ കുറിച്ച്',
    'about.subtitle': 'നിങ്ങളുടെ വിജയം ഞങ്ങളുടെ ദൗത്യം',
    'about.description': 'നാം സമഗ്ര ഡിജിറ്റൽ മാർക്കറ്റിംഗ് പരിഹാരങ്ങളിൽ വിദഗ്ധതയുള്ള ഒരു സജീവ മീഡിയ ഹൗസ് ആണ്. ഉള്ളടക്കം സൃഷ്ടി മുതൽ കാമ്പെയ്ൻ മാനേജ്മെന്റ് വരെ, ബ്രാൻഡുകൾക്ക് ശക്തമായ ഓൺലൈൻ സാന്നിധ്യം സ്ഥാപിക്കാൻ സഹായിക്കുന്നു.',
    'about.experience': 'വർഷങ്ങളുടെ അനുഭവം',
    'about.campaigns': 'വിജയകരമായ കാമ്പെയ്‌നുകൾ',
    'about.clients': 'സന്തോഷമുള്ള ക്ലയന്റുകൾ',
    'about.reach': 'മില്യൺ+ എത്തുക',
    
    // Channels Section
    'channels.title': 'ഞങ്ങളുടെ ചാനലുകൾ',
    'channels.subtitle': 'മൾട്ടി-പ്ലാറ്റ്ഫോം മികവ്',
    'channels.youtube.title': 'യൂട്യൂബ് മാർക്കറ്റിംഗ്',
    'channels.youtube.desc': 'പ്രൊഫഷണൽ വീഡിയോ ഉള്ളടക്കം, ചാനൽ മാനേജ്മെന്റ്',
    'channels.facebook.title': 'ഫേസ്ബുക്ക് കാമ്പെയ്‌നുകൾ',
    'channels.facebook.desc': 'ലക്ഷ്യമിട്ട പരസ്യങ്ങൾ, കമ്മ്യൂണിറ്റി നിർമ്മാണം',
    'channels.instagram.title': 'ഇൻസ്റ്റാഗ്രാം വളർച്ച',
    'channels.instagram.desc': 'വിഷ്വൽ സ്റ്റോറി ടെല്ലിംഗ്, ഇൻഫ്ലുവൻസർ പങ്കാളിത്തം',
    'channels.exploreChannel': 'ചാനൽ പര്യവേക്ഷണം ചെയ്യുക',
    
    // Services Section
    'services.title': 'ഞങ്ങളുടെ സേവനങ്ങൾ',
    'services.subtitle': 'സമഗ്ര ഡിജിറ്റൽ പരിഹാരങ്ങൾ',
    'services.brandBuilding': 'ബ്രാൻഡ് നിർമ്മാണം',
    'services.brandDesc': 'പൂർണ്ണ ബ്രാൻഡ് ഐഡന്റിറ്റി, പൊസിഷനിംഗ് തന്ത്രങ്ങൾ',
    'services.eventCampaign': 'ഇവന്റ് കാമ്പെയ്‌നുകൾ',
    'services.eventDesc': 'എൻഡ്-ടു-എൻഡ് ഇവന്റ് പ്രമോഷൻ, മാനേജ്മെന്റ്',
    'services.indiaEntry': 'ഇന്ത്യ മാർക്കറ്റ് എൻട്രി',
    'services.indiaDesc': 'അന്താരാഷ്ട്ര ബ്രാൻഡുകൾക്കുള്ള തന്ത്രപരമായ മാർക്കറ്റ് പ്രവേശനം',
    'services.revenueGrowth': 'വരുമാന വർദ്ധന',
    'services.revenueDesc': 'ബിസിനസ് വിപുലീകരണത്തിനുള്ള ഡാറ്റാ-ചാലിത തന്ത്രങ്ങൾ',
    
    // Testimonials
    'testimonials.title': 'ഞങ്ങളുടെ ക്ലയന്റുകൾ പറയുന്നത്',
    'testimonials.subtitle': 'വിജയ കഥകൾ',
    
    // News Section
    'news.title': 'അടുത്തകാല വാർത്തകൾ',
    'news.subtitle': 'അപ്ഡേറ്റുകൾ നേടുക',
    'news.readMore': 'കൂടുതൽ വായിക്കുക',
    
    // Contact Section
    'contact.title': 'ബന്ധപ്പെടുക',
    'contact.subtitle': 'നിങ്ങളുടെ യാത്ര ആരംഭിക്കാൻ തയ്യാറാണോ?',
    'contact.phone': 'ഇപ്പോൾ വിളിക്കുക',
    'contact.email': 'ഇമെയിൽ അയയ്ക്കുക',
    'contact.whatsapp': 'വാട്ട്‌സ്ആപ്പ്',
    
    // Footer
    'footer.description': 'അസാധാരണ ഡിജിറ്റൽ മാർക്കറ്റിംഗ് പരിഹാരങ്ങൾ നൽകുന്ന ഇന്ത്യയിലെ മുൻനിര മീഡിയ ഹൗസ്.',
    'footer.quickLinks': 'ക്വിക്ക് ലിങ്കുകൾ',
    'footer.services': 'സേവനങ്ങൾ',
    'footer.contact': 'ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ',
    'footer.followUs': 'ഞങ്ങളെ പിന്തുടരുക',
    'footer.rights': 'എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.',
    
    // Login Modal
    'login.title': 'ബോസ് വല്ലാ-യിലേക്ക് സ്വാഗതം',
    'login.subtitle': 'തുടര സൈൻ ഇൻ ചെയ്യുക',
    'login.email': 'ഇമെയിൽ വിലാസം',
    'login.phone': 'ഫോൺ നമ്പർ',
    'login.password': 'പാസ്‌വേഡ്',
    'login.forgotPassword': 'പാസ്‌വേഡ് മറന്നോ?',
    'login.signIn': 'സൈൻ ഇൻ',
    'login.noAccount': 'അക്കൗണ്ട് ഇല്ലേ?',
    'login.signUp': 'സൈൻ അപ്പ്',
    'login.continueWith': 'അല്ലെങ്കിൽ തുടരണം',
    'login.emailTab': 'ഇമെയിൽ',
    'login.phoneTab': 'ഫോൺ',
    'login.enterEmail': 'നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക',
    'login.enterPhone': 'നിങ്ങളുടെ ഫോൺ നമ്പർ നൽകുക',
    'login.enterPassword': 'നിങ്ങളുടെ പാസ്‌വേഡ് നൽകുക',
    
    // Language Selector
    'language.select': 'ഭാഷ തിരഞ്ഞെടുക്കുക',
    'language.english': 'English',
    'language.hindi': 'हिन्दी',
    'language.marathi': 'मराठी',
    'language.gujarati': 'ગુજરાતી',
  }
};
