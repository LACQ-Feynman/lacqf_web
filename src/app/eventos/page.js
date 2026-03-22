'use client';

import React from 'react';
import Layout from "@/ui/components/Layout";
import Navigation from "@/ui/components/Navigation";
import UpcomingEvents from "@/ui/components/UpcomingEvents";
import Events from "@/ui/components/Events";

export default function EventosPage() {
  const sections = [
    { id: 'upcomingEvents', title: 'Próximos Eventos' },
    { id: 'events', title: 'Eventos Realizados' },
  ];

  return (
    <Layout>
      <Navigation sections={sections} />
      <div id="main-content" tabIndex="-1">
        <UpcomingEvents id="upcomingEvents" />
        <Events id="events" />
      </div>
    </Layout>
  );
}
