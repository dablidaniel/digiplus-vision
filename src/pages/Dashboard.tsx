import { motion } from "framer-motion";
import { BookOpen, Download, MessageCircle, User, Settings, LogOut, BarChart3 } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const menuItems = [
  { icon: BarChart3, label: "Tableau de bord", active: true },
  { icon: BookOpen, label: "Mes formations" },
  { icon: Download, label: "Téléchargements" },
  { icon: MessageCircle, label: "Support" },
  { icon: User, label: "Mon profil" },
  { icon: Settings, label: "Paramètres" },
];

const formations = [
  { title: "WordPress Mastery", progress: 65, status: "En cours" },
  { title: "SEO Expert", progress: 100, status: "Terminée" },
  { title: "IA & Prompt Engineering", progress: 20, status: "En cours" },
];

const DashboardPage = () => (
  <PageLayout>
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="p-6 rounded-2xl bg-gradient-card border border-border">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                U
              </div>
              <div>
                <div className="font-heading font-semibold">Utilisateur</div>
                <div className="text-xs text-muted-foreground">user@email.com</div>
              </div>
            </div>
            <nav className="space-y-1">
              {menuItems.map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    item.active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors mt-4">
                <LogOut size={18} />
                Déconnexion
              </button>
            </nav>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-2xl font-heading font-bold mb-1">Tableau de bord</h1>
              <p className="text-muted-foreground text-sm">Bienvenue dans votre espace personnel.</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Formations", value: "3", sub: "2 en cours" },
                { label: "Téléchargements", value: "12", sub: "Ce mois" },
                { label: "Support", value: "0", sub: "Tickets ouverts" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-glass"
                >
                  <div className="text-3xl font-heading font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm font-medium mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Formations */}
            <div className="p-6 rounded-2xl bg-gradient-card border border-border">
              <h3 className="font-heading font-semibold mb-4">Mes formations</h3>
              <div className="space-y-4">
                {formations.map((f, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{f.title}</span>
                        <span className="text-xs text-muted-foreground">{f.status}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-gradient-primary transition-all"
                          style={{ width: `${f.progress}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-heading font-bold text-primary">{f.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default DashboardPage;
