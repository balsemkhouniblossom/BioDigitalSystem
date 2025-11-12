# Quick Start Guide - Bio-Digital System Website

## 🚀 Getting Started

### 1. **Open the Website**
Open `index.html` in your web browser to start exploring.

### 2. **Navigate the Site**
Use the top navigation bar to move between sections:
- **Home** - Overview and quick stats
- **How It Works** - 6-stage process explained
- **Subsystems** - Technical details
- **Dashboard** - Real-time monitoring
- **Sustainability** - Environmental impact
- **About** - Team and company info

### 3. **Mobile Friendly**
On mobile devices, tap the menu icon (☰) to open the navigation menu.

---

## 📊 Key Sections at a Glance

### Home Page (index.html)
- **Hero Section**: Introduction with animated visuals
- **Quick Stats**: Air purified, water generated, CO₂ captured, active systems
- **Features Grid**: 6 key capabilities
- **Demo & Partnership Buttons**: Fill forms for engagement

### How It Works (pages/how-it-works.html)
- **Stage Flow Diagram**: 6-step process from polluted air to community benefits
- **Expandable Cards**: Click any stage card to see details
- **Process Overview**: Input → Processing → Output
- **Performance Metrics**: Technical specifications table

### Dashboard (pages/dashboard.html)
- **Live Metrics**: CO₂, PM2.5, SO₂, Temperature, Humidity, O₂
- **Water Stats**: Reservoir level, generation rate, purity, moss moisture
- **Interactive Charts**: 4 different data visualizations
- **Maintenance Alerts**: System status and recommendations
- **Refresh Button**: Update data with new simulated readings

### Subsystems (pages/subsystems.html)
- **6 Subsystem Cards**: Overview of each major component
- **Expandable Details**: Click section headers to expand specifications
- **Component Lists**: Parts and functions for each subsystem
- **Performance Tables**: Specifications and capabilities

### Sustainability (pages/sustainability.html)
- **Impact Metrics**: 6 cards showing environmental achievements
- **Circular Flow**: 6-step process from air intake to community use
- **Biomass Processing**: Step-by-step fertilizer production
- **Community Section**: Engagement opportunities
- **Timeline**: Future vision from 2025 to 2035+

### About (pages/about.html)
- **Mission & Vision**: Company purpose and goals
- **Core Values**: 6 guiding principles
- **Innovation Highlights**: Key technologies and approaches
- **Leadership Team**: 6 team member profiles
- **Company Journey**: Timeline from 2020 to present
- **Partners**: Collaborating organizations

---

## 🎨 Color Guide

| Color | Usage | Hex Code |
|-------|-------|----------|
| Green | Nature, growth, primary actions | #2ecc71 |
| Dark Green | Depth, secondary actions | #27ae60 |
| Blue | Technology, water | #3498db |
| Dark Blue | Trust, stability | #2980b9 |
| Gold | Energy, sun | #f1c40f |
| Light Green | Algae, photosynthesis | #16a085 |

---

## 💡 Tips & Tricks

### Navigation Tips
- Use smooth scroll navigation - just click any anchor link
- Back/forward buttons work with browser navigation
- Mobile menu closes automatically when you click a link

### Dashboard Tips
- **Refresh Data**: Click the "🔄 Refresh Data" button to simulate new readings
- **Live Indicator**: Red dot shows real-time monitoring is active
- **Hover Over Cards**: Cards lift up when you hover over them
- **Mobile Charts**: Charts are responsive and work on all devices

### Interactive Features
- **Click Stage Cards**: On "How It Works" page, click any stage number to expand details
- **Expandable Sections**: On "Subsystems" page, click headers to expand specifications
- **Modal Forms**: Fill out demo requests and partnership applications
- **Hover Effects**: Most elements have subtle animations on hover

### Mobile Optimization
- Tap the hamburger menu (≡) in top right on mobile
- All pages are optimized for touch screens
- Horizontal scrolling not needed on any page
- Responsive images scale to device size

---

## 📋 System Specifications Quick Reference

### Air Quality System
- **Air Processing**: 2,000 m³/hour throughput
- **Monthly Capacity**: 50,000 m³ air processed
- **PM2.5 Capture**: 95% efficiency
- **CO₂ Capture**: 8,500 kg per month
- **Moss Layer**: 15-20 cm thickness
- **Algae Volume**: 50 liters culture

### Water System
- **Daily Generation**: 70-150 liters
- **Monthly Production**: 4,500 liters
- **Purification Level**: 99.9% (UV sterilized)
- **Storage Capacity**: 200 liters
- **Condensation Area**: 2 m² collecting surface
- **Peltier Module**: TEC1-12706, 60W

### Energy System
- **Solar Panel**: 400W monocrystalline
- **Battery Storage**: 48V LiFePO₄, 10kWh
- **Controller Efficiency**: 96% MPPT
- **System Load**: 300W average, 800W peak
- **Energy Source**: 100% renewable

### Biomass System
- **Monthly Harvest**: 5-10 kg
- **Bio-Fertilizer**: Nitrogen/Phosphorus/Potassium enriched
- **Processing**: Drying and composting
- **Distribution**: Community gardens and farmers

---

## 🔄 Circular Economy Model

```
1. AIR INTAKE → Polluted urban air enters system
2. BIO-PROCESSING → Moss & algae clean and convert CO₂ to O₂
3. BIOMASS GROWTH → Organisms accumulate (5-10 kg/month)
4. HARVEST → Monthly collection and processing
5. PACKAGING → QR-tracked bio-fertilizer created
6. COMMUNITY → Distributed to local agriculture
```

---

## 📈 Real-Time Monitoring

The dashboard tracks:

**Air Quality**
- CO₂ level (ppm)
- PM2.5 & PM10 (µg/m³)
- SO₂ level (ppb)
- Temperature (°C)
- Humidity (%)
- O₂ generation (m³/hour)

**Water System**
- Reservoir level (liters)
- Daily irrigation (liters/day)
- Water generation (liters/day)
- Water purity (%)
- Moss moisture (%)
- Algae growth (kg/month)

---

## 🎯 Call-to-Action Options

### On Homepage
- **"Explore Dashboard"** - Go to live monitoring system
- **"Learn How It Works"** - See 6-stage process
- **"Request Demo"** - Fill form to schedule demo
- **"Become Partner"** - Partnership opportunities

### On Other Pages
- **"Join Community"** - Sustainability page CTA
- **"Request Demo"** - Multiple pages have this
- **"Career Opportunities"** - About page
- **"Get In Touch"** - Contact information

---

## 🔧 Customization Quick Tips

### Change Text Content
Edit any `.html` file directly. Look for:
- `<h1>`, `<h2>`, `<h3>` for titles
- `<p>` for paragraphs
- `<div class="...">` for sections

### Change Metrics/Numbers
Update `data-value` attributes:
```html
<div class="stat-value" data-value="50000">0</div>
```

### Change Colors
Edit `:root` in `css/styles.css`:
```css
--primary-green: #2ecc71;  /* Change this */
```

### Add New Content
Copy existing card structure and modify. All cards have consistent styling.

---

## ✅ Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Chrome
- ✅ Mobile Safari (iOS)
- ✅ Samsung Internet

---

## 📞 Need Help?

- **Technical Questions**: Check the main README.md
- **Content Issues**: Edit HTML files directly
- **Style Changes**: Modify CSS files in `css/` folder
- **Functionality**: Review `js/script.js` file

---

## 🌍 Project Goals

✨ Clean urban air
💧 Generate fresh water
♻️ Create circular economy
👥 Engage communities
⚡ Use renewable energy
📊 Real-time monitoring

---

**Happy exploring! 🌿💚**

*Last Updated: November 10, 2025*
