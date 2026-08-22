import Layout from "@/ui/components/Layout";
import Navigation from "@/ui/components/Navigation";
import Universities from "@/ui/components/Universities";
import MembershipSection from "@/ui/components/MembershipSection";

export const metadata = {
  title: 'Comunidade LACQ Feynman',
  description: 'Participe da comunidade nacional de clubes universitários de computação quântica.',
};

export default function ComunidadePage() {
  return (
    <Layout>
      <Navigation />
      <div id="main-content" tabIndex="-1">
        <Universities id="universities" />
        <MembershipSection id="membership" />
      </div>
    </Layout>
  );
}
