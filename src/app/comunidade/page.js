'use client';

import React from 'react';
import Layout from "@/ui/components/Layout";
import Navigation from "@/ui/components/Navigation";
import Universities from "@/ui/components/Universities";
import MembershipSection from "@/ui/components/MembershipSection";

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
