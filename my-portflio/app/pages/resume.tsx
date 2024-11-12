import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface ResumeItem {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  details: string[];
  tags?: string[];
}

interface ResumeSectionProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ResumeItem[];
  type: 'experience' | 'education';
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, icon: Icon, items, type }) => (
  <div className="mb-8 rounded-xl bg-white/10 p-6 transition-all">
    <h2 className="mb-6 flex items-center text-2xl font-bold text-white">
      <Icon className="mr-3 text-3xl text-violet-400" />
      <span className="items-center justify-center">{title}</span>
    </h2>
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="relative rounded-2xl bg-white/10 p-6 transition-all duration-300 hover:bg-white/15">
          <h3 className="mb-1 text-xl font-bold text-violet-400">{item.title}</h3>
          <p className="mb-2 font-semibold text-gray-300">
            {type === 'experience' ? item.company : item.institution}
          </p>
          <p className="mb-3 text-sm italic text-gray-400">{item.period}</p>
          <ul className="mb-4 space-y-2 text-sm text-gray-300">
            {item.details.map((detail, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-violet-400">•</span>
                {detail}
              </li>
            ))}
          </ul>
          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded bg-violet-600/75 px-2 py-1 text-xs font-mono text-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const RESUME_DATA: {
  experience: ResumeItem[];
  education: ResumeItem[];
} = {
  experience: [
    {
      title: 'Freelance Developer',
      company: 'Self Employed',
      period: 'Sep 2019 - Present',
      details: [
        'Designed and developed full-stack web applications for various clients',
        'Implemented machine learning algorithms for data-driven solutions',
        'Created visually appealing graphics using Adobe Photoshop',
        'Developed responsive UIs using React and Next.js',
        'Implemented pixel-perfect designs with Tailwind CSS',
        'Gained experience with large-scale codebases',
        'Managed multiple projects simultaneously',
        'Collaborated closely with clients'
      ],
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Git', 'Adobe Photoshop', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Bartender & Waiter',
      company: 'Felix Restaurant Ltd.',
      period: 'Nov 2016 - Present',
      details: [
        'Developed strong interpersonal skills through customer interactions',
        'Demonstrated excellent multitasking abilities',
        'Collaborated effectively with team members',
        'Maintained high customer satisfaction'
      ]
    }
  ],
  education: [
    {
      title: 'MSc Advanced Computer Science',
      institution: 'University of Sussex',
      period: 'Sep 2022 - Sep 2023',
      details: ['Graduated with Merit']
    },
    {
      title: 'BSc Computer Science with AI (Honors)',
      institution: 'University of Brighton',
      period: 'Sep 2019 - Sep 2022',
      details: ['Graduated with 2.1 (Honors)']
    },
    {
      title: 'BTEC Level 3 Extended Diploma Software Development',
      institution: 'University of Brighton',
      period: 'Sep 2016 - Jul 2019',
      details: ['Graduated with D* D* D*']
    }
  ]
};

const Resume: React.FC = () => {
  return (
    <section id="resume" className="min-h-screen px-3 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-center text-5xl font-bold text-white">My Journey</h1>
        <div className="grid gap-6 lg:grid-cols-2 backdrop-blur-sm">
          <ResumeSection
            title="Work Experience"
            icon={FaBriefcase}
            items={RESUME_DATA.experience}
            type="experience"
          />
          <ResumeSection
            title="Education"
            icon={FaGraduationCap}
            items={RESUME_DATA.education}
            type="education"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;