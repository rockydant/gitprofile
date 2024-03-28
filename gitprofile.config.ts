// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rockydant', // Your GitHub org/user name. (This is the only required config)
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
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Dot.DirectMail',
          description:
            'A legacy system plagued by several issues: it suffers from scalability limitations, poses challenges in maintenance, heavily relies on Unix and network dependencies, involves extensive manual processes, and lacks the capability to integrate with partner APIs. This project represents a major initiative for our company, as it involves integration with key clients such as Lob, CalOptima, Kaiser Permanente, and Verizon…'
            + '\n\nIn my capacity as a team leader and senior developer, I played a pivotal role in this project by orchestrating collaboration with our partners to seamlessly integrate their APIs and services. Furthermore, I spearheaded the design and execution of a sophisticated distributed cloud architecture utilizing cutting-edge technologies such as Azure, ASP.NET Core, SQL Server, RabbitMQ, Prometheus, Angular, TypeScript, EF & Dapper, Hangfire, Power BI, Python, and Jenkins.'
            + '\n\nThe results of this project have significantly influenced the company\'s core profitability and facilitated partnerships with major clients. We have observed a notable increase in order volume, elevating daily order processing from 20,000 to 70,000, and exceeding 300,000 orders during peak periods. This enhancement has streamlined processes, enabling automated processing and mitigating errors inherent in manual labor.',
          imageUrl:
            'https://cdn-icons-png.flaticon.com/512/2361/2361843.png',
          link: '',
        },
        {
          title: 'Dot.Security',
          description:
            'The company\'s software system exhibits weaknesses in cybersecurity, with vulnerabilities present in both legacy applications and outdated systems, rendering them susceptible to exploitation. It is imperative to address these shortcomings, especially considering the stringent security standards and integration requirements demanded by valuable partners.'
            + '\n\nIn my role, I lead the exploration and strategic planning of the cybersecurity landscape, overseeing engagements with third-party vendors for penetration testing. I am responsible for fortifying the security of on-premises servers through the deployment and configuration of Suricata, while ensuring the integrity of API security utilizing Owasp Zap. Additionally, I orchestrate the implementation and oversight of Microsoft Defender for Azure cloud security, alongside the establishment of Prowler for comprehensive vulnerability management. My proficiency in these areas is underscored by the completion of the AZ-400 certificate training'
            + '\n\nAs a result of this project, we have achieved HITRUST and HIPAA compliance, attained an A+ rating in Security Scorecard assessments, and bolstered confidence in cybersecurity among our clients, establishing a foundation of trust and reliability.',
          imageUrl:
            'https://www.shutterstock.com/image-vector/security-logo-600nw-526382002.jpg',
          link: '',
        },
        {
          title: 'Gearment ERP',
          description:
            'The company\'s challenges stemmed from rapid expansion and growth, highlighting the limitations of the existing CRM and ERP systems in accommodating scalable operations amidst high volume demands. The lack of standardized processes rendered maintenance arduous, particularly in the context of distribution across multiple locations. Moreover, system downtimes during peak sales seasons led to dissatisfaction among end-users, prompting complaints.'
            + '\n\nIn my multifaceted role as a project manager, business analyst, and technical leader, I successfully led a team of four professionals (2 seniors and 2 juniors) in the implementation of the Odoo solution as the core ERP system. This initiative involved designing and developing satellite applications and systems tailored to integrate seamlessly with production machinery and processes. Leveraging technologies such as Odoo, Python, Asp.net Core 6, SQL Server, Blazor, Datadog, and Prometheus, we ensured the seamless orchestration of operations across various facets of the organization.'
            + '\n\nThe project has resulted in maintaining system stability, expanding the capacity to accommodate additional product lines, streamlining setup processes for seamless distribution to new locations, automating various processes, tripling the system\'s capability to handle high volume demand during peak seasons, and enhancing integration capabilities with emerging systems.',
          imageUrl:
            'https://www.ejaftech.com/wp-content/uploads/2020/03/odoo-erp.jpg',
          link: '',
        },
        {
          title: 'Leading Edge Group',
          description:
            'This project aimed at bolstering a group buying online ecommerce company catering to over 400 retail stores and small businesses. The existing system suffered from fragmentation due to reliance on outdated applications, with many processes still dependent on manual labor. Additionally, the management of transaction and invoice data was constrained by reliance on physical hard copies.'
            + '\n\nIn this project, I served as a team leader and subsequently assumed the role of application manager, overseeing a team of five members and leveraging both Scrum and Kanban methodologies for efficient project management. My responsibilities included collaborating closely with the accounting and finance departments to conduct a comprehensive analysis of the existing systems, gathering client requirements, and architecting and designing a solution to reorganize and incorporate new technologies for system modernization. Additionally, I spearheaded strategic planning initiatives, delegated tasks to team members, and ensured the successful execution of the project. The technologies utilized in this endeavor encompassed Microsoft Dynamics CRM and GP, Scribe, ASP.NET Web Form MVC and Web API, SQL Server, LINQ, Entity Framework, AngularJS, jQuery, JavaScript, HTML, CSS, SCSS, Semantic-UI, Bootstrap, SSIS, and version control systems such as GitHub and Bitbucket, with continuous integration and continuous deployment (CI/CD) practices in place.'
            + '\n\nThe culmination of this project resulted in substantial cost savings for the client, totaling approximately 3 million dollars annually. The implemented system demonstrated robust scalability, ease of maintenance, and seamless integration with emerging technologies. Additionally, my contributions to the project were acknowledged with the prestigious Employee of the Year award.',
          imageUrl:
            'https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Bao Dang',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'dtquocbao',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.dtquocbao.com',
    phone: '',
    email: 'dtquocbao@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1MJjyi3zM6E2yfhLhY2kR20g2vJDPm_tH/edit?usp=sharing&ouid=109856236342900031154&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  headlines: [
    'Developer',
    'Cyber Security Enthusiast',
    'Data Science & Machine Learning Dreamer',
    'BJJ Practitioner',
  ],
  skills: [
    'C#',
    'Python',
    'Asp.net Core',
    'FastAPI',
    'Angular',
    'Blazor',
    'React',
    'Sql Server',
    'Postgres',
    'Docker',
    'K8s',
    'Grafana',
    'Prometheus',
    'RabbitMQ',
    'Azure Cloud',
    'AWS cloud'
  ],
  experiences: [
    {
      company: 'The Dot Corp',
      position: 'Senior Software Engineer / Team Leader	',
      description: 'A 43 years-old US company (founded in 1980) leading in Direct Mail Industry, Healthcare Supply Chain and E-commerce Fulfillment; 3 locations (2 in Santa Ana and 1 in Irvine), over 200 employees with Hi-Trust Certificate and HIPAA Compliance. ',
      from: 'December 2022',
      to: 'Present',
      companyLink: 'https://www.thedotcorp.com',
    },
    {
      company: 'Gearment LLC',
      position: 'Project Manager / Onsite Support Team Leader',
      description: 'A dynamic print-on-demand startup boasting a workforce of approximately 200 employees. Four warehouse facilities strategically located in California, Texas, and Germany, along with an office in Vietnam. Processing an impressive volume of 4000 orders daily, the company exemplifies efficiency and scale in its operations.',
      from: 'January 2021',
      to: 'November 2022',
      companyLink: 'https://gearment.com',
    },
    {
      company: 'Aswhite Global',
      position: 'Team Leader / Application Support Manager',
      description: 'A global company with 7 offices in Australia, Vietnam, Malaysia, Thailand and the Philippines, over 1500 employees and $50m annual turnover.',
      from: 'January 2014',
      to: 'December 2018',
      companyLink: 'https://aswhiteglobal.com',
    },
  ],
  certifications: [
    {
      name: 'Leadership and Critical Thinking',
      body: 'RMIT University',
      year: '',
      link: '',
    },
    {
      name: 'DevOps: Docker, Kubernetes, Terraform and Azure DevOps',
      body: 'Udemy',
      year: '2014',
      link: 'https://www.udemy.com/certificate/UC-09ca6327-446d-4166-bffc-c64dbb8f0fad/',
    },
    {
      name: 'The Complete Guide to Becoming a Software Architect',
      body: 'Udemy',
      year: '2014',
      link: 'https://www.udemy.com/certificate/UC-02daaf21-694b-4893-b92c-a0626e84978a/',
    },
    {
      name: 'A.I. & Machine Learning, Data Science Bootcamp',
      body: 'Udemy',
      year: '2014',
      link: 'https://www.udemy.com/certificate/UC-a31b7858-8835-416d-a6ec-72d7b0f85b22/',
    },
  ],
  educations: [
    {
      institution: 'FPT University, Ho Chi Minh City, Viet Nam',
      degree: ' B.S. Software Engineering',
      from: '2008',
      to: '2012',
    },
    {
      institution: 'WestCliff University, California, US',
      degree: 'Master in Business Administration',
      from: '2017',
      to: '2019',
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
    id: 'G-28G3XJNG47', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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
    ],

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
