import React from 'react';
import { ArrowLeft, Globe, MapPin, Phone, Mail, ExternalLink, Users, Trophy, Briefcase, GraduationCap, Target, CheckCircle } from 'lucide-react';
import { AUTHORIZED_INSTITUTIONS } from '../types/news';

interface InstitutionProfileProps {
  institutionId: number;
  onBack: () => void;
}

export function InstitutionProfile({ institutionId, onBack }: InstitutionProfileProps) {
  const institution = AUTHORIZED_INSTITUTIONS.find(i => i.id === institutionId);

  if (!institution) return null;

  const institutionDetails = {
    description: getInstitutionDescription(institution.name),
    address: getInstitutionAddress(institution.name),
    phone: getInstitutionPhone(institution.name),
    email: getInstitutionEmail(institution.name),
    stats: getInstitutionStats(institution.name),
    programs: getInstitutionPrograms(institution.name),
    achievements: getInstitutionAchievements(institution.name),
    partnerships: getInstitutionPartnerships(institution.name)
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Retour</span>
      </button>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center space-x-4">
            <img
              src={institution.logo}
              alt={institution.name}
              className="w-24 h-24 rounded-xl border-4 border-white object-cover"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold">{institution.name}</h1>
              <a 
                href={institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Site officiel</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {institutionDetails.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">À propos</h2>
            <p className="text-gray-600">{institutionDetails.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>{institutionDetails.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-500" />
                <span>{institutionDetails.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>{institutionDetails.email}</span>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Chiffres clés</h3>
              <div className="space-y-3">
                {institutionDetails.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nos programmes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {institutionDetails.programs.map((program, index) => (
                <div key={index} className="p-4 border border-gray-100 rounded-xl hover:border-indigo-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-2">{program.name}</h4>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nos partenaires</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {institutionDetails.partnerships.map((partner, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-700">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getInstitutionDescription(name: string): string {
  const descriptions: Record<string, string> = {
    'Ministère de la Jeunesse et des Sports': 'Le Ministère des Sports est chargé de la mise en œuvre de la politique nationale du sport, de la jeunesse et de la vie associative. Il soutient le développement du sport de haut niveau et promeut les activités physiques et sportives pour tous.',
    'INSEP': "L'Institut National du Sport, de l'Expertise et de la Performance est le principal centre de formation et d'entraînement des sportifs de haut niveau en France. Il accompagne les athlètes dans leur double projet sportif et professionnel.",
    'AFDAS': "L'AFDAS est l'opérateur de compétences (OPCO) des secteurs de la culture, des industries créatives, des médias, de la communication, des télécommunications, du sport, du tourisme, des loisirs et du divertissement.",
    'Groupe BPCE': "Le Groupe BPCE est le deuxième groupe bancaire en France, engagé dans le soutien aux athlètes de haut niveau à travers des programmes de reconversion et d'insertion professionnelle.",
    'CREPS': "Les CREPS sont des établissements publics nationaux de formation aux métiers du sport et de la jeunesse, contribuant à la préparation des sportifs de haut niveau.",
    'ESJ': "L'École Supérieure de Journalisme forme les futurs professionnels des médias, avec une expertise particulière dans le journalisme sportif.",
    'HEC Paris': "HEC Paris est une grande école de commerce proposant des programmes spécialisés pour les athlètes de haut niveau, combinant excellence académique et expertise sportive."
  };
  return descriptions[name] || '';
}

function getInstitutionAddress(name: string): string {
  const addresses: Record<string, string> = {
    'Ministère de la Jeunesse et des Sports': '95 avenue de France, 75013 Paris',
    'INSEP': '11 avenue du Tremblay, 75012 Paris',
    'AFDAS': '66 rue Stendhal, 75020 Paris',
    'Groupe BPCE': '50 avenue Pierre Mendès France, 75013 Paris',
    'CREPS': '1 rue du Docteur Le Savoureux, 92291 Châtenay-Malabry',
    'ESJ': '50 rue Gauthier de Châtillon, 59046 Lille',
    'HEC Paris': '1 rue de la Libération, 78350 Jouy-en-Josas'
  };
  return addresses[name] || '';
}

function getInstitutionPhone(name: string): string {
  const phones: Record<string, string> = {
    'Ministère de la Jeunesse et des Sports': '01 40 45 90 00',
    'INSEP': '01 41 74 41 00',
    'AFDAS': '01 44 78 39 39',
    'Groupe BPCE': '01 58 40 41 42',
    'CREPS': '01 41 87 20 30',
    'ESJ': '03 20 30 44 00',
    'HEC Paris': '01 39 67 70 00'
  };
  return phones[name] || '';
}

function getInstitutionEmail(name: string): string {
  const emails: Record<string, string> = {
    'Ministère de la Jeunesse et des Sports': 'contact@sports.gouv.fr',
    'INSEP': 'contact@insep.fr',
    'AFDAS': 'contact@afdas.com',
    'Groupe BPCE': 'sport@bpce.fr',
    'CREPS': 'contact@creps-idf.fr',
    'ESJ': 'contact@esj-lille.fr',
    'HEC Paris': 'sport@hec.fr'
  };
  return emails[name] || '';
}

function getInstitutionStats(name: string): Array<{ label: string; value: string }> {
  const stats: Record<string, Array<{ label: string; value: string }>> = {
    'Ministère de la Jeunesse et des Sports': [
      { label: 'Athlètes accompagnés', value: '15000+' },
      { label: 'Programmes actifs', value: '50+' },
      { label: 'Partenaires', value: '200+' }
    ],
    'INSEP': [
      { label: 'Athlètes formés', value: '800+' },
      { label: 'Médailles olympiques', value: '400+' },
      { label: 'Formations', value: '30+' }
    ],
    'AFDAS': [
      { label: 'Sportifs accompagnés', value: '5000+' },
      { label: 'Formations financées', value: '1000+' },
      { label: 'Taux de réussite', value: '92%' }
    ],
    'Groupe BPCE': [
      { label: 'Athlètes recrutés', value: '300+' },
      { label: 'Programmes', value: '15+' },
      { label: 'Taux d\'insertion', value: '95%' }
    ],
    'CREPS': [
      { label: 'Sportifs formés', value: '2000+' },
      { label: 'Formations', value: '45+' },
      { label: 'Sites en France', value: '12' }
    ],
    'ESJ': [
      { label: 'Diplômés', value: '500+' },
      { label: 'Spécialisations', value: '8' },
      { label: 'Taux d\'emploi', value: '89%' }
    ],
    'HEC Paris': [
      { label: 'Athlètes formés', value: '150+' },
      { label: 'Programmes', value: '12' },
      { label: 'Partenaires', value: '50+' }
    ]
  };
  return stats[name] || [];
}

function getInstitutionPrograms(name: string): Array<{ name: string; description: string }> {
  const programs: Record<string, Array<{ name: string; description: string }>> = {
    'Ministère de la Jeunesse et des Sports': [
      { name: 'Parcours Performance Fédéral', description: 'Accompagnement des athlètes de haut niveau dans leur double projet.' },
      { name: 'Soutien à la Reconversion', description: 'Aide financière et logistique pour la formation professionnelle.' }
    ],
    'INSEP': [
      { name: 'Formation Sport de Haut Niveau', description: 'Préparation physique et mentale des athlètes.' },
      { name: 'Reconversion Professionnelle', description: 'Accompagnement personnalisé vers une nouvelle carrière.' }
    ],
    'AFDAS': [
      { name: 'Formation Continue', description: 'Programmes de formation adaptés aux sportifs.' },
      { name: 'Certification Professionnelle', description: 'Validation des acquis et compétences.' }
    ],
    'Groupe BPCE': [
      { name: 'Athlètes & Carrières', description: 'Programme d\'insertion professionnelle dans la banque.' },
      { name: 'Mentorat d\'Excellence', description: 'Accompagnement par des cadres dirigeants.' }
    ],
    'CREPS': [
      { name: 'BPJEPS Sport', description: 'Formation aux métiers du sport et de l\'animation.' },
      { name: 'Performance Sportive', description: 'Préparation aux compétitions de haut niveau.' }
    ],
    'ESJ': [
      { name: 'Journalisme Sportif', description: 'Formation spécialisée aux médias sportifs.' },
      { name: 'Communication Sportive', description: 'Gestion de la communication dans le sport.' }
    ],
    'HEC Paris': [
      { name: 'MBA Sport & Business', description: 'Formation en management du sport.' },
      { name: 'Executive Education Sport', description: 'Programmes courts pour sportifs.' }
    ]
  };
  return programs[name] || [];
}

function getInstitutionAchievements(name: string): string[] {
  const achievements: Record<string, string[]> = {
    'Ministère de la Jeunesse et des Sports': [
      '80% de réussite dans l\'accompagnement des athlètes',
      'Plus de 1000 médailles internationales',
      'Réseau de 500+ experts du sport'
    ],
    'INSEP': [
      '40% des médailles olympiques françaises',
      '90% de réussite en double projet',
      'Centre d\'excellence mondial'
    ],
    'AFDAS': [
      'Premier financeur de formation dans le sport',
      '95% de satisfaction des bénéficiaires',
      'Réseau de 2000+ organismes partenaires'
    ],
    'Groupe BPCE': [
      'Leader dans l\'emploi des sportifs',
      '100+ athlètes recrutés par an',
      'Partenaire officiel des JO 2024'
    ],
    'CREPS': [
      'Excellence dans la formation sportive',
      'Réseau national de 12 établissements',
      'Taux d\'insertion de 85%'
    ],
    'ESJ': [
      'N°1 en formation journalistique sportive',
      'Réseau de 5000+ anciens élèves',
      'Partenariats médias majeurs'
    ],
    'HEC Paris': [
      'Top 3 des business schools mondiales',
      'Programme spécial athlètes depuis 10 ans',
      'Réseau international d\'alumni'
    ]
  };
  return achievements[name] || [];
}

function getInstitutionPartnerships(name: string): Array<{ name: string; logo: string }> {
  const partnerships: Record<string, Array<{ name: string; logo: string }>> = {
    'Ministère de la Jeunesse et des Sports': [
      { name: 'CNOSF', logo: 'https://images.unsplash.com/photo-1444069069607-20f8a0961b1b?w=50&h=50&auto=format&fit=crop' },
      { name: 'INSEP', logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=50&h=50&auto=format&fit=crop' },
      { name: 'Paris 2024', logo: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=50&h=50&auto=format&fit=crop' }
    ],
    'INSEP': [
      { name: 'Ministère des Sports', logo: 'https://images.unsplash.com/photo-1444069069607-20f8a0961b1b?w=50&h=50&auto=format&fit=crop' },
      { name: 'FFF', logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=50&h=50&auto=format&fit=crop' },
      { name: 'FFT', logo: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=50&h=50&auto=format&fit=crop' }
    ],
    'AFDAS': [
      { name: 'OPCO Sport', logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=50&h=50&auto=format&fit=crop' },
      { name: 'Pôle Emploi', logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=50&h=50&auto=format&fit=crop' },
      { name: 'APEC', logo: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=50&h=50&auto=format&fit=crop' }
    ],
    'Groupe BPCE': [
      { name: 'CNOSF', logo: 'https://images.unsplash.com/photo-1444069069607-20f8a0961b1b?w=50&h=50&auto=format&fit=crop' },
      { name: 'Paris 2024', logo: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=50&h=50&auto=format&fit=crop' },
      { name: 'Fédérations Sportives', logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=50&h=50&auto=format&fit=crop' }
    ],
    'CREPS': [
      { name: 'Ministère des Sports', logo: 'https://images.unsplash.com/photo-1444069069607-20f8a0961b1b?w=50&h=50&auto=format&fit=crop' },
      { name: 'Régions', logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=50&h=50&auto=format&fit=crop' },
      { name: 'Fédérations', logo: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=50&h=50&auto=format&fit=crop' }
    ],
    'ESJ': [
      { name: 'L\'Équipe', logo: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=50&h=50&auto=format&fit=crop' },
      { name: 'France TV Sport', logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=50&h=50&auto=format&fit=crop' },
      { name: 'RMC Sport', logo: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=50&h=50&auto=format&fit=crop' }
    ],
    'HEC Paris': [
      { name: 'INSEP', logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=50&h=50&auto=format&fit=crop' },
      { name: 'Grandes Entreprises', logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=50&h=50&auto=format&fit=crop' },
      { name: 'Fédérations', logo: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=50&h=50&auto=format&fit=crop' }
    ]
  };
  return partnerships[name] || [];
}