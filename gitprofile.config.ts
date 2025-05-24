// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'santhoshraghu26', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
        'santhoshraghu/PRAW_for_RedditAnalytics',
        'santhoshraghu/Estimating-Online-Site-Github-Statistics',
        'santhoshraghu/Image-Generation-with-GAN-on-MNIST-Dataset',
        'santhoshraghu/Yelp-Data-Challenge',
        'santhoshraghu/Question-Answering-Via-Reading-Comprehension',
      ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Santosh Oruganty',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'santoshoruganty',
    github: 'santhoshraghu',
    website: 'https://www.santoshoruganty.me',
    phone: '+1(774)-253-4846',
    email: 'orugantysantosh@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1D4EOpC6Ph0YP288aq15OogTLCtRaGNuD/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
  'Python',
  'SQL',
  'Git',
  'Docker',
  'AWS',
  'Azure',
  'GCP',
  'PostgreSQL',
  'Machine Learning',
  'Deep Learning',
  'RAG Applications',
],
educations: [ 
  { 
    institution: 'Worcester Polytechnic Institute', 
    degree: 'Master of Science - Data Science', 
    GPA: '4.0', 
    from: 'August 2023', 
    to: 'May 2025', 
    logo: '/assets/logos/wpi.png' // <-- add this path
  }, 
  { 
    institution: 'Anna University', 
    degree: 'Bachelor of Engineering - Mechanical Engineering', 
    GPA: '3.45', 
    from: 'August 2017', 
    to: 'June 2021', 
    logo: '/assets/logos/Anna.png' // <-- add this path
  }, 
],
  experiences: [
    {
      company: 'TRUELight Energy',
      position: 'Machine Learning Engineering Intern',
      from: 'September 2024',
      to: 'May 2025',
      companyLink: 'https://truelightenergy.com',
    },
    {
      company: 'Worcester Polytechnic Institute',
      position: 'Research Assistant',
      from: 'May 2024',
      to: 'May 2025',
      companyLink: 'https://www.wpi.edu/',
    },
    
    {
      company: 'Worcester Polytechnic Institute',
      position: 'Teaching Assistant - Artificial Intelligence & Database Management Systems',
      from: 'August 2024',
      to: 'May 2025',
      companyLink: 'https://www.wpi.edu/',
    },
    
    {
      company: 'XtraSensing Ltd',
      position: 'Machine Learning Researcher Researcher',
      from: 'August 2024',
      to: 'December 2024',
      companyLink: 'https://www.xtrasensing.com/',
    },
    
    {
      company: 'Tecra Systems',
      position: 'Artificial Intelligence Intern',
      from: 'June 2024',
      to: 'September 2024',
      companyLink: 'https://www.tecra.com/',
    },
    {
      company: 'Accenture',
      position: 'Application Development Associate',
      from: 'December 2021',
      to: 'August 2023',
      companyLink: 'https://www.accenture.com/',
    },
  ],
  Awards: [
    {
      name: 'Most Valuable Player Award',
      body: 'Graduate Qualifying Project - XtraSensing Ltd',
      year: 'December 2024',
      link: 'https://www.xtrasensing.com/',
      logo: '/assets/logos/mvp.jpg', // 👈 Add the path to the image here
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  
  themeConfig: {
    defaultTheme: 'black',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['black', 'light'],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

/**
  themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ], */

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
    class="text-primary" href="https://github.com/arifszn/gitprofile"
    target="_blank" rel="noreferrer">GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
