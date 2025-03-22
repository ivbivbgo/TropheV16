import React, { useState } from 'react';
import { Layout } from './Layout';
import { News } from './tabs/News';
import { Community } from './tabs/Community';
import { Looker } from './tabs/Looker';
import { Resources } from './tabs/Resources';
import { Help } from './tabs/Help';
import { Messages } from './tabs/Messages';
import { EleaChat } from './tabs/EleaChat';
import { Settings } from './tabs/Settings';
import { Profile } from './Profile';
import { Events } from './tabs/Events';
import { Opportunities } from './tabs/Opportunities';
import { ProfileB } from './tabs/ProfileB';

interface DashboardProps {
  activeTab: string;
}

const DEFAULT_USER = {
  displayName: "Thomas Martin",
  email: "thomas.martin@example.com",
  photoURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
};

export function Dashboard({ activeTab: initialTab }: DashboardProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showProfile, setShowProfile] = useState(false);

  if (showProfile) {
    return <Profile onBack={() => setShowProfile(false)} />;
  }

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onProfileClick={() => setShowProfile(true)}
      user={DEFAULT_USER}
    >
      {activeTab === 'news' && <News />}
      {activeTab === 'ok' && <Looker />}
      {activeTab === 'community' && <Community />}
      {activeTab === 'looker' && <Looker />}
      {activeTab === 'resources' && <Resources />}
      {activeTab === 'help' && <Help />}
      {activeTab === 'messages' && <Messages />}
      {activeTab === 'elea' && <EleaChat />}
      {activeTab === 'settings' && <Settings />}
      {activeTab === 'events' && <Events />}
      {activeTab === 'opportunities' && <Opportunities />}
      {activeTab === 'profile-b' && <ProfileB />}
    </Layout>
  );
}