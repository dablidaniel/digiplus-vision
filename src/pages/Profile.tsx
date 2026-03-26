import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Phone, Save, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";

const ProfilePage = () => {
  const { user, profile, loading, refreshProfile } = useAuth();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [loading, user, navigate]);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "");
      setPhone(profile.phone || "");
    }
  }, [profile]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName, phone })
      .eq("id", user.id);

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      await refreshProfile();
      toast({ title: "Profil mis à jour", description: "Vos informations ont été sauvegardées." });
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <Button variant="ghost" className="mb-4 gap-2" onClick={() => navigate("/dashboard")}>
              <ArrowLeft size={16} /> Retour au tableau de bord
            </Button>

            <h1 className="text-2xl font-heading font-bold mb-6">Mon profil</h1>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt="" className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    (fullName?.[0] || user?.email?.[0] || "U").toUpperCase()
                  )}
                </div>
                <div>
                  <div className="font-heading font-semibold">{fullName || "Utilisateur"}</div>
                  <div className="text-sm text-muted-foreground">{user?.email}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <User size={14} /> Nom complet
                  </Label>
                  <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Mail size={14} /> Email
                  </Label>
                  <Input value={user?.email || ""} disabled className="opacity-60" />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Phone size={14} /> Téléphone
                  </Label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+33 6 12 34 56 78" />
                </div>
              </div>

              <Button
                className="w-full h-11 bg-gradient-primary text-primary-foreground font-semibold gap-2"
                onClick={handleSave}
                disabled={saving}
              >
                <Save size={16} />
                {saving ? "Sauvegarde..." : "Sauvegarder"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProfilePage;
