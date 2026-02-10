// Centralized app data that can be shared across components

export const builtFromScratch = [
  {
    id: 1,
    name: 'CREX - Just Cricket',
    description: 'A comprehensive live cricket score and analysis app featuring real-time match updates, ball-by-ball commentary, exclusive cricket videos, fantasy tips, detailed scorecards, and in-depth player statistics. Follow all international and domestic cricket matches with viral highlights and expert analysis.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9e/b9/65/9eb96515-3711-a217-73e6-8265c69f5e36/Placeholder.mill/400x400bb-75.webp',
    technologies: ['Swift', 'UIKit', 'Core Data', 'REST APIs'],
    appStoreLink: 'https://apps.apple.com/us/app/crex-just-cricket/id1370408703',
    githubLink: '',
    workedOn: [
      'Engineered and deployed Cricket Exchange (CREX) as a solo developer - achieved 99.9% crash-free rate with 25M+ downloads',
      'Managed complete App Store publishing and release cycles',
      'Built CE Fantasy and One Cricket apps as part of a 2-person team',
      'Designed and implemented custom notifications, Today Widgets, and in-app purchases',
      'Developed Core Animations (CGBasicAnimation, UIViewAnimation) that increased app engagement by 37%',
      'Architected the entire application from scratch with real-time match updates and ball-by-ball commentary'
    ]
  },
  {
    id: 2,
    name: 'OneCricket',
    description: 'A lightning-fast live cricket score app with ball-to-ball updates, live commentary, complete scorecards with auto-refresh, match info with playing XI and team squads, interactive fixtures categorized by date/series/team, series-based matches and news, tournament points tables, and latest cricket news. Features dark theme and covers all International T20s, ODIs, Tests, Tours, and Leagues.',
    icon: 'https://play-lh.googleusercontent.com/f5_w5_hXyQUd0eBgavdNY96Z7V76DcyuKSFO26Z57DPFiQDePmaRrK6ijfhNgmf3Mkc=w480-h960',
    technologies: ['Swift', 'UIKit', 'REST APIs'],
    appStoreLink: 'https://apps.apple.com/af/app/onecricket/id1502683595',
    githubLink: '',
    workedOn: [
      'Built OneCricket as part of a 2-person team alongside CREX development',
      'Architected the entire application structure and navigation flow',
      'Implemented real-time score updates with auto-refresh functionality',
      'Built interactive fixtures system with advanced filtering',
      'Developed dark theme implementation across all screens',
      'Created tournament points table and news integration features'
    ]
  },
  {
    id: 3,
    name: 'ACEapp The Social Network',
    description: 'A social network platform exclusively dedicated to people of the Asexual spectrum. Connect with ACEs globally, create profiles, search based on location/gender/age filters, and start chats to share experiences and interests. ACEapp also functions as a dating app for the asexual community, helping users find chat pals, friends, or potential relationships in a supportive environment.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/8d/e1/b9/8de1b9ce-701e-ccfc-ddf6-17f1fd712816/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/400x400ia-75.webp',
    technologies: ['Swift', 'UIKit', 'Firebase', 'REST APIs'],
    appStoreLink: 'https://apps.apple.com/in/app/aceapp-the-social-network/id1391046754',
    githubLink: '',
    workedOn: [
      'Designed and developed the complete social networking platform',
      'Implemented Firebase authentication and real-time database integration',
      'Built advanced search and filtering system for user discovery',
      'Created chat functionality with real-time messaging',
      'Developed user profile management and matching algorithms'
    ]
  }
]

export const contributedHeavily = [
  {
    id: 4,
    name: 'Furlenco',
    description: 'An online furniture rental and purchase platform offering flexible options to rent short-term, rent long-term, buy brand new, or buy refurbished furniture. Features comprehensive furniture categories including bedroom, dining room, living room, study room, storage solutions, and outdoor seating. Includes 72-hour free delivery and installation, no-cost EMI, damage waiver, manufacturer warranty, and rent-to-own options. Available across major Indian cities.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/dc/05/76/dc05767d-a075-134a-875d-fe9b4d686f3c/Placeholder.mill/400x400bb-75.webp',
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Payment Integration', 'REST APIs'],
    appStoreLink: 'https://apps.apple.com/in/app/furlenco/id1134919232',
    githubLink: '',
    workedOn: [
      'Rebuilt the entire Furlenco app in SwiftUI during a 6-month sprint',
      'Engineered custom SwiftUI components for iOS 13 compatibility',
      'Pioneered development of scrollers and infinite carousels',
      'Published the app to App Store successfully',
      'Managed custom payment flows and reduced third-party dependencies',
      'Introduced MVVM architecture pattern across the application'
    ]
  },
  {
    id: 5,
    name: 'Angel One: Stocks, Mutual Fund',
    description: 'A comprehensive stock market trading and investment platform trusted by 3 crore+ Indians. Features include free Demat account opening, seamless stock trading across 5000+ stocks, live NIFTY 50 and Sensex updates, mutual funds and SIP investments, IPO applications, Futures & Options trading, US stocks, commodities, currencies, and bonds. Includes smart order options, instant fund transfers via UPI, personal loans, motor insurance, and advanced charting with trading insights. Built on 25+ years of experience in the financial markets.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/60/64/c4/6064c45b-f538-1ef1-148f-44552f5ef83c/Placeholder.mill/400x400bb-75.webp',
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Payment Integration', 'Real-time Data', 'REST APIs'],
    appStoreLink: 'https://apps.apple.com/in/app/angel-one-stocks-mutual-fund/id1060530981',
    githubLink: '',
    workedOn: [
      'Leading a team of 4 iOS developers and planning sprints',
      'Architected and rebuilt login/watchlist modules, increasing crash-free sessions to 99.9%',
      'Built a reusable UI component library that reduced development time by ~20%',
      'Migrated login module to SwiftUI with improved user experience',
      'Implemented memory optimizations that cut CPU usage by 35-40%',
      'Introduced VIPER architecture pattern for better code organization',
      'Worked on operation queues for efficient background processing',
      'Integrated payment SDKs and chatbots for enhanced functionality',
      'Reduced app-side payment errors to ~0.1% through rigorous testing and optimization'
    ]
  }
]

export const getAllApps = () => {
  return [...builtFromScratch, ...contributedHeavily]
}
