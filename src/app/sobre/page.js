'use client';

import React from 'react';
import Layout from "@/ui/components/Layout";
import Navigation from "@/ui/components/Navigation";
import Patronum from "@/ui/components/Patronum";
import CoreValues from "@/ui/components/CoreValues";

export default function SobrePage() {
  return (
    <Layout>
      <Navigation />
      <div id="main-content" tabIndex="-1">
        <Patronum id="patronum" />
        <CoreValues id="values" />
      </div>
    </Layout>
  );
}
