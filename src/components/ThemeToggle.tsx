import { Button } from "@/components/ui/button"
import whatsappIcon from "@/assets/whatsapp-icon-new.png"

export function ThemeToggle() {
  const openWhatsApp = () => {
    const phoneNumber = "919876543210"
    const message = "Hi! I'm interested in learning more about your services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={openWhatsApp}
      className="bg-secondary text-secondary-foreground border-border hover:bg-secondary/80 transition-all duration-300"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-6 w-6 object-contain" />
      <span className="sr-only">Contact WhatsApp</span>
    </Button>
  )
}