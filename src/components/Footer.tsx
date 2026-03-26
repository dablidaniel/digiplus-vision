import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src={logo} alt="DigiPlus Service" className="h-12 mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Agence digitale premium spécialisée dans la création web, le marketing digital, le design graphique et l'accompagnement IA.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Navigation</h4>
          <div className="flex flex-col gap-2">
            {["Accueil", "Services", "Blog", "Formations", "Contact"].map((item) => (
              <Link key={item} to={`/${item === "Accueil" ? "" : item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            {["Création de sites web", "E-commerce", "SEO & Blog", "Design graphique", "Montage vidéo", "IA & ChatGPT"].map((s) => (
              <span key={s} className="text-sm text-muted-foreground">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Recevez nos dernières actualités et offres exclusives.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Votre email" className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            <button className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium">
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 DigiPlus Service. Tous droits réservés.</p>
        <div className="flex gap-6">
          <Link to="/mentions-legales" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Mentions légales</Link>
          <Link to="/politique-confidentialite" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
