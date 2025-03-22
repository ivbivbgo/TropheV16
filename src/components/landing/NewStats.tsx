import React from 'react';
import { Trophy, Users, Target, Clock } from 'lucide-react';

export function NewStats() {
  const stats = [
    {
      icon: Trophy,
      value: "1000+",
      label: "Athlètes accompagnés",
      color: "text-blue-500"
    },
    {
      icon: Users,
      value: "500+",
      label: "Experts disponibles",
      color: "text-purple-500"
    },
    {
      icon: Target,
      value: "95%",
      label: "Taux de réussite",
      color: "text-green-500"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support disponible",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}