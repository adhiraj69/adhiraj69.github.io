// gitprofile.config.js


const config = {
  github: {
    username: 'adhiraj69', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 0, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'adhiraj-banerjee-0051b01',
    phone: '+919123087150',
    email: 'adhirajbanerjee35@gmail.com',
    wemail: 'adhiraj@iitk.ac.in',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/127hvfsAZanzhp57dRaPzNjJ3pdw4-mmO/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['LaTeX','python', 'pytorch', 'transformers', 'librosa', 'Montreal-Forced-Aligner', 'tslearn', 'fuzzysearch', 'hmmlearn', 'pandas', 'sklearn'],
  experiences: [
    {
      company: '2024 IEEE International Conference on Acoustics, Speech and Signal Processing Main Conference',
      position: 'Reviewer',
      //from: 'September 2021',
      //to: 'Present',
      companyLink: 'https://2024.ieeeicassp.org',
    },

        {
      company: '2023 IEEE International Workshop on Machine Learning for Signal Processing Main Conference',
      position: 'Reviewer',
      //from: 'September 2021',
      //to: 'Present',
      companyLink: 'https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385',
    },

            {
      company: 'IEEE Transactions on Neural Networks and Learning Systems (TNNLS) Journal',
      position: 'Reviewer',
      //from: 'September 2021',
      //to: 'Present',
      companyLink: '',
    },
    //{
     // company: 'Company Name',
      //position: 'Position',
      //from: 'July 2019',
      //to: 'August 2021',
      //companyLink: 'https://example.com',
   // },
  ],
  certifications: [
       {
      body: 'IEEE Signal Processing Cup, 2020',
      name: '6th position',
      year: '2020',
      //link: 'https://example.com',
    },
   {
      body: 'IEEE Signal Processing Cup, 2021',
      name: '2nd position',
      year: '2021',
      //link: 'https://example.com',
    },

       {
      body: 'Financial Aid to attend ICML 2022 conference Baltimore, Maryland',
      name: 'Travel grant from ICML DEI',
      year: '2022',
      link: 'https://icml.cc/Conferences/2022',
    },

           {
      body: 'Financial Aid to attend ICLR 2023 conference Kigali, Rwanda',
      name: 'Travel grants from ICLR DEI and Google India Research',
      year: '2023',
      link: 'https://iclr.cc/Conferences/2023',
    },
           {
      body: 'Financial Aid to attend INTERSPEECH 2023 conference Dublin, Ireland',
      name: 'Travel grant from Microsoft India Research',
      year: '2023',
      link: 'https://interspeech2023.org',
    },
  ],
  education: [
    {
      institution: 'Indian Institute of Technology Kanpur',
      degree: 'Ph.D.',
      from: '2019',
      to: '2024',
    },
    {
      institution: 'University of Engineering and Management Kolkata',
      degree: 'B.Tech.',
      from: '2015',
      to: '2019',
    },
  ],
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'wav2tok: Deep Sequence Tokenizer for Audio Retrieval, ICLR 2023 Poster Presentation',
      description:
        'Search over audio sequences is a fundamental problem. In this paper, we propose a method to extract concise discrete representations for audio that can be used for efficient retrieval. Our motivation comes from orthography which represents speech of a given language in a concise and distinct discrete form. The proposed method, wav2tok, learns such representations for any kind of audio, speech or non-speech, from pairs of similar audio. wav2tok compresses the query and target sequences into shorter sequences of tokens that are faster to match. The learning method makes use of CTC loss and expectation-maximization algorithm, which are generally used for supervised automatic speech recognition and for learning discrete latent variables, respectively. Experiments show the consistent performance of wav2tok across two audio retrieval tasks: music search (query by humming) and speech search via audio query, outperforming state-of-the-art baselines.',
      imageUrl: 'https://iclr.cc/media/PosterPDFs/ICLR%202023/11698-thumb.png',
      link: 'https://iclr.cc/virtual/2023/poster/11698',
    },
    {
      title: 'Enc-Dec RNN Acoustic Word Embeddings learned via Pairwise Prediction, INTERSPEECH 2023 Poster Presentation',
      description:
        'Learning discriminative Acoustic Word Embeddings (AWEs) summarising variable length spoken word segments brings ef- ficiency in speech retrieval tasks, notably, Query-by-Example (QbE) Speech or Spoken Term Detection (STD). In this paper, we add on to RNN based approaches for generating acoustic word embeddings. The model is trained in an encoder-decoder fashion on pairs of similar word segments by optimizing a pair- wise self-supervised loss where the targets are generated of- fline via clustering. The pairs may be generated with word boundaries (weak supervision) or via augmentation of unla- belled word segments (no supervision). Experiments with word discrimination task on TIMIT and LibriSpeech show state of the art performance of the proposed approach outperforming popular RNN AWE approaches in both weakly supervised and unsupervised settings. The AWEs generated by our model gen- eralise well to OOV words. On STD tasks performed on TIMIT, the proposed approach provides speed advantages.',
      imageUrl: 'https://www.mufin.com/wp-content/uploads/2016/03/audio-fingerprinting-technology.png',
      link: 'https://www.isca-speech.org/archive/pdfs/interspeech_2023/banerjee23_interspeech.pdf',
    },

     {
      title: 'Talk on Query-by-Example (QbE) and Query-by-Humming (QbH) Music Information Retrieval (MIR) systems, WISSAP 2023',
      description:
        'Invited talk in Winter School on Speech and Audio Processing 2023, IIT Kanpur. Detailed presentation of QbE systems like Shazam, Now Playing (Google) and retrieval techniques such as Vector Similarity Search, Note-based Retrieval, Hashing, Maximum Inner Product Search (MIPS), Vector Quantization, Anisotropic Vector Quantization.',
      imageUrl: 'https://www.androidpolice.com/wp-content/uploads/2020/09/25/Shazam.png',
      link: 'https://youtube.com/playlist?list=PLbtAaXHMto-vpyPwGJrbpJ9jSb4sEAJo7&si=eOanE1d_qCgtJA-9',
    },
  ],



  // Display blog posts from your medium or dev account. (Optional)
  //blog: {
   // source: 'dev', // medium | dev
   // username: 'arifszn', // to hide blog section, keep it empty
   // limit: 5, // How many posts to display. Max is 10.
  //},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the theme change switch
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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
    >GitProfile</a>`,
};
export default config;
