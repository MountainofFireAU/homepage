# MFM Australia Website

A high-standard, well-organized church website for Mountain of Fire and Miracles Ministries Australia, built with modern web technologies and following the design patterns of the official MFM websites.

## 🔥 Features

- **Modern Design**: Professional, responsive design following MFM UK and global website patterns
- **MFM Branding**: Authentic color scheme and styling consistent with MFM international
- **Official MFM Logo**: Custom logo component with mountain and fire symbolism
- **Hero Backgrounds**: Mountain and fire-themed SVG backgrounds
- **Leadership Photos**: Professional placeholder system for leadership images
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Built with Next.js 14 for optimal speed and SEO
- **Comprehensive Content**: Complete church website with all essential pages
- **Interactive Navigation**: Dropdown menus and smooth transitions
- **Contact Forms**: Integrated contact and prayer request forms
- **Social Media Integration**: Connected social media links and sharing
- **Donation Support**: Bank transfer details and upcoming online giving
- **Service Information**: Complete service times and program schedules
- **SEO Optimized**: Proper meta tags, favicon, and Open Graph support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Font Awesome)
- **Language**: TypeScript
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mfmau
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Included

### Main Pages
- **Homepage** - Hero section, services, testimonies, call-to-action
- **About Us** - Ministry overview, mission, vision, leadership
- **Contact** - Contact information, forms, emergency prayer line
- **Donate** - Giving options, bank details, impact stories

### About Sub-pages (Ready for content)
- Meet the GO (Dr. D.K. Olukoya & Pastor Folashade)
- The Ministry
- Statement of Belief
- Ministries Overview

### Resources (Structure ready)
- PMCH (Power Must Change Hands)
- Prayer Points
- Audio Sermons
- Monthly Magazines
- Live Stream
- Downloads

### Additional Pages
- MFM Branches - Australia
- Testimonies
- Privacy Policy
- Public Alert

## 🎨 Design Features

### Color Scheme (Authentic MFM)
- **Primary**: #8B0000 (Deep Red)
- **Secondary**: #FFD700 (Gold)
- **Dark**: #4A0000 (Darker Red)
- **Light**: #FF6B6B (Light Red)
- **Gray**: #F5F5F5 (Light Background)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold, hierarchical sizing
- **Body**: Clean, readable line spacing

### Components
- Responsive navigation with dropdown menus
- Card-based layouts
- Gradient hero sections
- Interactive buttons and forms
- Icon-enhanced content sections

## 📧 Customization

### Contact Information
Update the following files with actual contact details:
- `app/components/Header.tsx` - Phone and email in top bar
- `app/components/Footer.tsx` - Address, phone, email, service times
- `app/contact/page.tsx` - Full contact information

### Bank Details
Update donation information in:
- `app/donate/page.tsx` - BSB, account number, account name

### Service Times
Update service schedules in:
- `app/page.tsx` - Homepage service cards
- `app/components/Footer.tsx` - Footer service times
- `app/contact/page.tsx` - Contact page service information

### Social Media
Add social media links in:
- `app/components/Header.tsx` - Navigation area
- `app/components/Footer.tsx` - Footer social links
- `app/contact/page.tsx` - Contact page social media

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out/` folder to Netlify
3. Configure domain

### Traditional Hosting
1. Build: `npm run build`
2. Upload build files to web server
3. Configure domain and SSL

## 📋 Content Updates Needed

### Immediate Updates Required:
1. **Contact Details**: Replace placeholder phone numbers, addresses, and emails
2. **Bank Information**: Add real BSB and account numbers for donations
3. **Social Media**: Connect actual Facebook, Twitter, YouTube, Instagram accounts
4. **Service Times**: Confirm and update all service schedules
5. **Leadership Photos**: Add actual photos of Dr. D.K. Olukoya and Pastor Folashade
6. **Branch Locations**: Add specific Australian branch addresses and contact info

### Content To Add:
1. **About Pages**: Full biographical information for leadership
2. **Beliefs Page**: Complete statement of faith and doctrine
3. **Ministries**: Detailed information about each ministry arm
4. **Resources**: Actual downloadable content, sermon archives
5. **Testimonies**: Real testimonies from Australian members
6. **Events**: Calendar of upcoming events and special programs

### Images & Branding Integration

The website now includes official MFM imagery and branding elements:

- **Custom MFM Logo**: Professional logo component with mountain and fire symbolism
- **Hero Backgrounds**: Mountain and fire-themed SVG graphics matching MFM aesthetic
- **Leadership Photos**: Professional placeholder system for Dr. D.K. Olukoya and Pastor Folashade
- **MFM Favicon**: Branded favicon with mountain, fire, and MFM text
- **Color Consistency**: All images follow the official MFM color scheme from the main sites

### Visual Components
- `MFMLogo.tsx` - Scalable logo with multiple variants (default, white, dark)
- `LeadershipPhoto.tsx` - Professional photo placeholders with MFM branding
- Hero background SVGs with mountain silhouettes and fire elements
- Consistent use of MFM red (#8B0000) and gold (#FFD700) throughout

## 🔧 Technical Notes

### File Structure
```
mfmau/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx      # Main navigation
│   │   └── Footer.tsx      # Site footer
│   ├── about/              # About section pages
│   ├── contact/            # Contact page
│   ├── donate/             # Donation page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

### Performance Optimizations
- Next.js automatic code splitting
- Optimized images and assets
- Efficient CSS with Tailwind
- SEO-friendly meta tags
- Fast loading times

## 🤝 Support

For technical support or customization:
- Review the code comments for guidance
- Check Next.js documentation for framework questions
- Tailwind CSS documentation for styling
- React documentation for component development

## 📄 License

This project is created for Mountain of Fire and Miracles Ministries Australia. 
Modify and use according to ministry needs.

---

**Built with ❤️ for MFM Australia**

*"Nobody comes to the Mountain of Fire and Miracles Ministries by chance. If you are here, God brought you here."* - Dr. D.K. Olukoya 