// SocialSync - Mock Analytics & Platform Data
// Designed for realistic startup demonstration with 7d, 30d, and 90d periods

export const INITIAL_ACCOUNTS = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@alexcreativestudio',
    name: 'Alex Creative Studio',
    category: 'Content Creator & Tech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    color: '#E1306C',
    gradient: 'from-pink-500 via-purple-500 to-amber-500',
    connected: true,
    followers: 142800,
    followersGrowth: '+4.8%',
    engagementRate: '5.2%',
    monthlyViews: 890000,
    postsCount: 342,
    lastActivity: '2 hours ago',
    apiStatus: 'Connected (OAuth Demo)',
    recentPost: {
      title: 'Top 5 AI tools that will save you 10+ hours a week 🔥',
      date: 'Today, 2:15 PM',
      likes: '8.4K',
      comments: '412',
      shares: '1.2K'
    }
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: 'Alex Morgan Tech',
    name: 'Alex Morgan Tech',
    category: 'Educational & Reviews',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    color: '#FF0000',
    gradient: 'from-red-600 to-red-500',
    connected: true,
    followers: 86400,
    followersGrowth: '+8.1%',
    engagementRate: '7.8%',
    monthlyViews: 1450000,
    postsCount: 118,
    lastActivity: '1 day ago',
    apiStatus: 'Connected (OAuth Demo)',
    recentPost: {
      title: 'Full Stack React 19 Project in 40 Minutes [2026 Guide]',
      date: 'Yesterday',
      likes: '12.8K',
      comments: '940',
      shares: '2.5K'
    }
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@alexmorgan_dev',
    name: 'Alex on TikTok',
    category: 'Bite-sized Coding Tips',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    color: '#000000',
    gradient: 'from-slate-900 via-cyan-900 to-rose-900',
    connected: true,
    followers: 215000,
    followersGrowth: '+12.4%',
    engagementRate: '9.4%',
    monthlyViews: 3200000,
    postsCount: 520,
    lastActivity: '4 hours ago',
    apiStatus: 'Connected (OAuth Demo)',
    recentPost: {
      title: 'Did you know you can do this in CSS without JS? 👀',
      date: 'Today, 11:30 AM',
      likes: '34.2K',
      comments: '1.1K',
      shares: '5.8K'
    }
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'alex-morgan-creator',
    name: 'Alex Morgan',
    category: 'Founder & Tech Consultant',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    color: '#0A66C2',
    gradient: 'from-blue-700 to-blue-500',
    connected: true,
    followers: 32100,
    followersGrowth: '+3.2%',
    engagementRate: '4.6%',
    monthlyViews: 240000,
    postsCount: 184,
    lastActivity: '3 days ago',
    apiStatus: 'Connected (OAuth Demo)',
    recentPost: {
      title: 'Why personal branding is the highest ROI asset for students in 2026',
      date: '3 days ago',
      likes: '1.8K',
      comments: '230',
      shares: '85'
    }
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    handle: 'Alex Morgan Page',
    name: 'Alex Morgan Official',
    category: 'Community & Updates',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    color: '#1877F2',
    gradient: 'from-blue-600 to-indigo-600',
    connected: false,
    followers: 18500,
    followersGrowth: '+1.1%',
    engagementRate: '2.8%',
    monthlyViews: 95000,
    postsCount: 95,
    lastActivity: '1 week ago',
    apiStatus: 'Ready to Connect',
    recentPost: {
      title: 'Community Q&A Announcement for this weekend! Drop your questions.',
      date: 'May 14',
      likes: '420',
      comments: '58',
      shares: '14'
    }
  }
];

export const PERIOD_DATA = {
  '7d': {
    kpis: {
      totalFollowers: { value: 476300, growth: '+2.4%', isPositive: true, diff: '+11,200 followers' },
      totalLikes: { value: 142500, growth: '+15.8%', isPositive: true, diff: '+19,400 likes' },
      totalComments: { value: 9840, growth: '+8.3%', isPositive: true, diff: '+750 comments' },
      totalViews: { value: 1850000, growth: '+18.2%', isPositive: true, diff: '+285k impressions' },
      totalPosts: { value: 18, growth: '+20.0%', isPositive: true, diff: '3 more than last week' },
      avgEngagementRate: { value: '6.4%', growth: '+0.7%', isPositive: true, diff: '+0.7% engagement' }
    },
    growthTimeline: [
      { date: 'Mon', Instagram: 140500, YouTube: 84800, TikTok: 204000, LinkedIn: 31400, Total: 460700 },
      { date: 'Tue', Instagram: 140900, YouTube: 85100, TikTok: 206500, LinkedIn: 31550, Total: 464050 },
      { date: 'Wed', Instagram: 141400, YouTube: 85400, TikTok: 208900, LinkedIn: 31700, Total: 467400 },
      { date: 'Thu', Instagram: 141800, YouTube: 85750, TikTok: 211000, LinkedIn: 31800, Total: 470350 },
      { date: 'Fri', Instagram: 142100, YouTube: 86000, TikTok: 212800, LinkedIn: 31950, Total: 472850 },
      { date: 'Sat', Instagram: 142500, YouTube: 86250, TikTok: 214100, LinkedIn: 32050, Total: 474900 },
      { date: 'Sun', Instagram: 142800, YouTube: 86400, TikTok: 215000, LinkedIn: 32100, Total: 476300 }
    ],
    platformEngagement: [
      { platform: 'TikTok', rate: 9.4, color: '#0f172a', avgLikes: '34.2K' },
      { platform: 'YouTube', rate: 7.8, color: '#ef4444', avgLikes: '12.8K' },
      { platform: 'Instagram', rate: 5.2, color: '#ec4899', avgLikes: '8.4K' },
      { platform: 'LinkedIn', rate: 4.6, color: '#3b82f6', avgLikes: '1.8K' },
      { platform: 'Facebook', rate: 2.8, color: '#6366f1', avgLikes: '0.4K' }
    ],
    audienceShare: [
      { name: 'TikTok', value: 45, color: '#0f172a' },
      { name: 'Instagram', value: 30, color: '#ec4899' },
      { name: 'YouTube', value: 18, color: '#ef4444' },
      { name: 'LinkedIn', value: 7, color: '#3b82f6' }
    ]
  },
  '30d': {
    kpis: {
      totalFollowers: { value: 476300, growth: '+8.6%', isPositive: true, diff: '+37,800 this month' },
      totalLikes: { value: 685000, growth: '+24.1%', isPositive: true, diff: '+133,000 likes' },
      totalComments: { value: 42100, growth: '+12.5%', isPositive: true, diff: '+4,680 comments' },
      totalViews: { value: 5780000, growth: '+31.4%', isPositive: true, diff: '+1.38M views' },
      totalPosts: { value: 74, growth: '+15.6%', isPositive: true, diff: '10 more than prev month' },
      avgEngagementRate: { value: '6.2%', growth: '+0.5%', isPositive: true, diff: '+0.5% vs last month' }
    },
    growthTimeline: [
      { date: 'Week 1', Instagram: 136200, YouTube: 80100, TikTok: 191000, LinkedIn: 31100, Total: 438400 },
      { date: 'Week 2', Instagram: 138400, YouTube: 82300, TikTok: 198500, LinkedIn: 31400, Total: 450600 },
      { date: 'Week 3', Instagram: 140600, YouTube: 84400, TikTok: 206200, LinkedIn: 31750, Total: 462950 },
      { date: 'Week 4', Instagram: 142800, YouTube: 86400, TikTok: 215000, LinkedIn: 32100, Total: 476300 }
    ],
    platformEngagement: [
      { platform: 'TikTok', rate: 9.1, color: '#0f172a', avgLikes: '32.1K' },
      { platform: 'YouTube', rate: 7.6, color: '#ef4444', avgLikes: '11.9K' },
      { platform: 'Instagram', rate: 5.0, color: '#ec4899', avgLikes: '7.8K' },
      { platform: 'LinkedIn', rate: 4.4, color: '#3b82f6', avgLikes: '1.6K' },
      { platform: 'Facebook', rate: 2.7, color: '#6366f1', avgLikes: '0.4K' }
    ],
    audienceShare: [
      { name: 'TikTok', value: 45, color: '#0f172a' },
      { name: 'Instagram', value: 30, color: '#ec4899' },
      { name: 'YouTube', value: 18, color: '#ef4444' },
      { name: 'LinkedIn', value: 7, color: '#3b82f6' }
    ]
  },
  '90d': {
    kpis: {
      totalFollowers: { value: 476300, growth: '+28.4%', isPositive: true, diff: '+105,400 past quarter' },
      totalLikes: { value: 1920000, growth: '+42.7%', isPositive: true, diff: '+575,000 likes' },
      totalComments: { value: 118400, growth: '+33.2%', isPositive: true, diff: '+29,500 comments' },
      totalViews: { value: 16400000, growth: '+56.8%', isPositive: true, diff: '+5.9M views' },
      totalPosts: { value: 212, growth: '+18.4%', isPositive: true, diff: '33 more posts' },
      avgEngagementRate: { value: '5.9%', growth: '+0.3%', isPositive: true, diff: '+0.3% quarter trend' }
    },
    growthTimeline: [
      { date: 'Month 1', Instagram: 122000, YouTube: 72000, TikTok: 151000, LinkedIn: 27900, Total: 372900 },
      { date: 'Month 2', Instagram: 131500, YouTube: 79000, TikTok: 182000, LinkedIn: 30000, Total: 422500 },
      { date: 'Month 3', Instagram: 142800, YouTube: 86400, TikTok: 215000, LinkedIn: 32100, Total: 476300 }
    ],
    platformEngagement: [
      { platform: 'TikTok', rate: 8.8, color: '#0f172a', avgLikes: '29.4K' },
      { platform: 'YouTube', rate: 7.2, color: '#ef4444', avgLikes: '10.5K' },
      { platform: 'Instagram', rate: 4.8, color: '#ec4899', avgLikes: '6.9K' },
      { platform: 'LinkedIn', rate: 4.1, color: '#3b82f6', avgLikes: '1.4K' },
      { platform: 'Facebook', rate: 2.5, color: '#6366f1', avgLikes: '0.3K' }
    ],
    audienceShare: [
      { name: 'TikTok', value: 45, color: '#0f172a' },
      { name: 'Instagram', value: 30, color: '#ec4899' },
      { name: 'YouTube', value: 18, color: '#ef4444' },
      { name: 'LinkedIn', value: 7, color: '#3b82f6' }
    ]
  }
};

export const RECENT_POSTS = [
  {
    id: 1,
    platform: 'Instagram',
    platformBadge: 'IG Reel',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80',
    caption: 'Top 5 AI tools that will save you 10+ hours a week as a developer 🔥',
    date: 'Oct 10, 2026',
    likes: 8420,
    comments: 412,
    views: 94500,
    engagementRate: '8.9%',
    status: 'Trending',
    type: 'Reel'
  },
  {
    id: 2,
    platform: 'YouTube',
    platformBadge: 'YT Video',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=80',
    caption: 'Full Stack React 19 & Tailwind Project in 40 Minutes [2026 Practical Guide]',
    date: 'Oct 08, 2026',
    likes: 12840,
    comments: 940,
    views: 145000,
    engagementRate: '9.5%',
    status: 'High Performer',
    type: 'Video'
  },
  {
    id: 3,
    platform: 'TikTok',
    platformBadge: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop&q=80',
    caption: 'Did you know you can do this in modern CSS without a single line of JS? 👀',
    date: 'Oct 09, 2026',
    likes: 34200,
    comments: 1120,
    views: 410000,
    engagementRate: '11.4%',
    status: 'Viral',
    type: 'Short'
  },
  {
    id: 4,
    platform: 'LinkedIn',
    platformBadge: 'Post',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&auto=format&fit=crop&q=80',
    caption: 'Why personal branding is the highest ROI career asset for computer science students in 2026',
    date: 'Oct 06, 2026',
    likes: 1820,
    comments: 230,
    views: 32000,
    engagementRate: '6.4%',
    status: 'Top Discussion',
    type: 'Article'
  },
  {
    id: 5,
    platform: 'Instagram',
    platformBadge: 'Carousel',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80',
    caption: 'Swipe to see the difference between Junior vs Senior UI architecture principles 💻➡️',
    date: 'Oct 04, 2026',
    likes: 6730,
    comments: 288,
    views: 68000,
    engagementRate: '7.3%',
    status: 'High Saves',
    type: 'Carousel'
  }
];

export const TOP_CONTENT_RANKINGS = [
  {
    rank: 1,
    title: 'CSS Modern Tricks 2026',
    platform: 'TikTok',
    views: '410,000',
    roiScore: '98/100',
    reachRatio: '4.2x avg',
    engagement: '11.4%'
  },
  {
    rank: 2,
    title: 'Full Stack React 19 Crash Course',
    platform: 'YouTube',
    views: '145,000',
    roiScore: '94/100',
    reachRatio: '2.8x avg',
    engagement: '9.5%'
  },
  {
    rank: 3,
    title: 'AI Productivity Toolkit',
    platform: 'Instagram',
    views: '94,500',
    roiScore: '89/100',
    reachRatio: '2.1x avg',
    engagement: '8.9%'
  }
];

export const AUDIENCE_DEMOGRAPHICS = {
  ageGroups: [
    { label: '18-24 (Students & Early Career)', percentage: 38 },
    { label: '25-34 (Professionals & Creators)', percentage: 46 },
    { label: '35-44 (Managers & Founders)', percentage: 12 },
    { label: '45+ (Executives)', percentage: 4 }
  ],
  topLocations: [
    { country: 'United States', flag: '🇺🇸', percentage: 34 },
    { country: 'India', flag: '🇮🇳', percentage: 26 },
    { country: 'United Kingdom', flag: '🇬🇧', percentage: 14 },
    { country: 'Germany', flag: '🇩🇪', percentage: 9 },
    { country: 'Canada', flag: '🇨🇦', percentage: 8 },
    { country: 'Other', flag: '🌐', percentage: 9 }
  ],
  peakHours: [
    { time: '11:00 AM - 1:00 PM EST', day: 'Tuesday & Thursday', score: 'Highest Click-Through' },
    { time: '6:00 PM - 8:30 PM EST', day: 'Friday & Sunday', score: 'Viral Reel Velocity' },
    { time: '9:00 AM - 10:30 AM EST', day: 'Wednesday', score: 'LinkedIn Professional Reach' }
  ]
};

export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Starter / Student',
    tagline: 'Ideal for aspiring creators, learners, and personal portfolios.',
    priceMonthly: 0,
    priceYearly: 0,
    badge: 'Always Free',
    isPopular: false,
    features: [
      'Connect up to 2 social accounts',
      '7-day analytics history',
      'Basic engagement tracking',
      'Standard CSV export',
      'Weekly automated summary',
      'Community discord support'
    ],
    cta: 'Start Free Today',
    demoNote: 'Demo Plan — No card required'
  },
  {
    id: 'pro',
    name: 'Creator Pro',
    tagline: 'For active creators & influencers scaling multiple social channels.',
    priceMonthly: 19,
    priceYearly: 15,
    badge: 'Most Popular',
    isPopular: true,
    features: [
      'Connect up to 8 social accounts',
      'Unlimited historical analytics (90d+)',
      'Cross-platform engagement comparison',
      'Audience overlap & demographic insights',
      'Automated high-res CSV & PDF exports',
      'Custom date range filtering',
      'AI-driven best time to post suggestions',
      'Priority email & chat support'
    ],
    cta: 'Try Creator Pro Demo',
    demoNote: 'Demo Subscription — Instant access'
  },
  {
    id: 'business',
    name: 'Agency & Business',
    tagline: 'For growth agencies, startups, and marketing teams managing clients.',
    priceMonthly: 49,
    priceYearly: 39,
    badge: 'Complete Suite',
    isPopular: false,
    features: [
      'Unlimited social accounts & workspaces',
      'White-label client reporting',
      'Team seats (up to 10 members)',
      'Competitor benchmarking',
      'Raw API data access & webhooks',
      'Dedicated account manager',
      'SLA & 99.9% uptime guarantee'
    ],
    cta: 'Explore Business Demo',
    demoNote: 'Demo Enterprise Tier'
  }
];

export const TESTIMONIALS = [
  {
    quote: "SocialSync completely replaced my messy spreadsheets. I used to spend 2 hours every Sunday logging into Instagram, YouTube Studio, and TikTok just to make sense of my metrics. Now I see everything in 30 seconds.",
    author: "Elena Rostova",
    role: "Full-Time Tech Creator & Educator",
    platform: "380K combined audience",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    quote: "As a student founder juggling university classes and a growing podcast, I don't have time for complex enterprise BI tools. SocialSync gives me clear, actionable charts without corporate clutter.",
    author: "Marcus Chen",
    role: "Student Founder @ BuildCamp",
    platform: "LinkedIn & YouTube",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    quote: "Comparing cross-platform engagement on SocialSync proved that our TikTok shorts were driving 3x higher comment engagement than our standard posts. That single insight shifted our Q3 campaign strategy.",
    author: "Sophie Dupont",
    role: "Social Media Director @ Bloom Agency",
    platform: "Managing 14 Client Channels",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "How does SocialSync connect to my social media accounts?",
    answer: "In this live interactive demonstration, SocialSync provides a simulated OAuth connection workflow using verified mock data structures. In production, SocialSync uses official Graph and REST APIs from Meta (Instagram & Facebook), YouTube Data API v3, TikTok for Developers, and LinkedIn Marketing Developer APIs with secure tokens."
  },
  {
    question: "Can I export my analytics for clients or team presentations?",
    answer: "Yes! Click the 'Export CSV Report' button anywhere on the dashboard to immediately download a formatted spreadsheet containing follower counts, engagement rates, impressions, and post performance for your selected date range."
  },
  {
    question: "Do I need real credentials or passwords to explore the demo?",
    answer: "No! You do not need to share any passwords, credit card info, or live tokens. SocialSync comes pre-loaded with comprehensive demo datasets so you can test all filters, account switches, charts, and reporting immediately."
  },
  {
    question: "Can I track multiple accounts from the same platform?",
    answer: "Yes! On the Pro and Business tiers, you can add multiple Instagram pages, YouTube channels, or LinkedIn profiles and view both consolidated workspace analytics or isolate individual accounts."
  },
  {
    question: "What makes SocialSync different from native platform studios?",
    answer: "Native apps (like YouTube Studio or Meta Business Suite) keep you trapped in silos with incompatible metrics. SocialSync standardizes engagement rates, normalizes growth trajectories, and visualizes cross-platform audience distribution in one clean interface."
  }
];
