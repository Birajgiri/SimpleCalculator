# Simple Calculator

A modern, responsive calculator application built with HTML, CSS, and JavaScript featuring a sleek dark theme and interactive button animations.

## 🧮 Features

### Core Functionality
- ✅ **Basic Operations**: Addition (+) and Subtraction (-) 
- ✅ **Digit Input**: Numbers 0-9 with proper digit entry logic
- ✅ **Display**: Shows up to 8 digits or "-" + 7 digits
- ✅ **Calculate (=)**: Performs operations and displays results
- ✅ **All Clear (AC)**: Resets calculator to initial state

### Display & Error Handling
- ✅ **Overflow Protection**: Shows "OVERFLOW" when numbers exceed display limits
- ✅ **Error Handling**: Displays "ERROR" for invalid operations
- ✅ **Real-time Display**: Updates display as numbers are entered
- ✅ **Maximum Values**: 99,999,999 (positive) / -9,999,999 (negative)

## 🎨 Design Features

### Modern UI/UX
- 🎨 **Dark Theme**: Elegant dark background (#1C1C1C)
- 🔘 **Circular Buttons**: Round number and operator buttons
- 📱 **4x4 Grid Layout**: Professional calculator arrangement
- 🎯 **Color Coding**: 
  - Light gray (#D4D4D2) for numbers
  - Orange (#FF9500) for operators and actions
  - Black display with light text

### Interactive Elements
- ✨ **Button Hover Effects**: Scale animation + glow shadows
- 🎭 **Smooth Transitions**: 0.2s ease animations
- 🔄 **Visual Feedback**: Scale (1.05x) and shadow effects on hover
- 🖱️ **Responsive Design**: Works on different screen sizes

### Special Button Styling
- **Zero Button**: Rectangular with rounded edges, spans 3 columns
- **Number Buttons**: Perfect circles (border-radius: 25px)
- **Operator/Action Buttons**: Circular with orange theme
- **No Borders**: Clean, borderless design throughout

## 📁 Project Structure

```
CSD228/Unit1D/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Calculator logic and functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Running the Calculator

#### Option 1: Direct File Access
1. Open `index.html` in any web browser
2. Start calculating!

#### Option 2: Local Server (Recommended)
1. **Using VS Code Live Server:**
   - Right-click `index.html` → "Open with Live Server"
   - Access at `http://127.0.0.1:5500`

2. **Using Node.js Live Server:**
   ```bash
   npm install -g live-server
   live-server
   ```
   - Access at `http://127.0.0.1:8080`

3. **Using XAMPP:**
   - Place project in `htdocs` folder
   - Access at `localhost/CSD228/Unit1D/index.html`

## 🛠️ Technical Implementation

### HTML Structure
- Semantic HTML5 with clean button grid layout
- Event handlers attached directly to buttons
- Responsive viewport meta tag

### CSS Styling
- CSS Grid for button layout (4x4)
- CSS custom properties for consistent theming
- Hover animations using transform and box-shadow
- Mobile-responsive design patterns

### JavaScript Logic
- State management for current/previous numbers
- Operation handling with overflow protection
- Display formatting and error state management
- Event-driven calculator operations

## 🎯 Calculator Layout

```
7   8   9   AC
4   5   6   +
1   2   3   -
[    0    ]  =
```

## 📊 Development History

### ✅ Completed Features
1. **Initial Setup**: Basic calculator structure and functionality
2. **Styling Upgrade**: Modern dark theme with custom colors
3. **Button Enhancement**: Circular buttons with hover effects
4. **Layout Optimization**: 4x4 grid with proper spacing
5. **Interactive Design**: Smooth animations and visual feedback
6. **Error Handling**: Overflow and error state management
7. **Code Optimization**: Clean, maintainable code structure
8. **Documentation**: Comprehensive README and code comments

### 🎨 Design Evolution
- **Simple → Modern**: From basic styling to sophisticated dark theme
- **Rectangular → Circular**: Button shape modernization
- **Static → Interactive**: Added hover animations and feedback
- **Basic → Professional**: Grid layout and consistent spacing

## 🔧 Customization

### Color Scheme
- **Background**: `#1C1C1C` (Dark charcoal)
- **Numbers**: `#D4D4D2` (Light gray)
- **Operators**: `#FF9500` (Orange)
- **Display**: Black background with light text

### Button Styling
- **Border Radius**: 25px for circular buttons, 15px for zero button
- **Hover Scale**: 1.05x magnification
- **Transition**: 0.2s ease for smooth animations

## 📱 Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🐛 Known Limitations
- Only supports addition and subtraction operations
- Display limited to 8 digits maximum
- No decimal point support (integer calculations only)
- No keyboard input support (mouse/touch only)

## 📈 Future Enhancements
- [ ] Add multiplication and division operations
- [ ] Implement decimal point support
- [ ] Add keyboard navigation
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Scientific calculator mode
- [ ] History/tape functionality
- [ ] PWA (Progressive Web App) conversion

## 🤝 Contributing
Feel free to fork this project and submit pull requests for improvements!

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author
**Biraj Giri**
- GitHub: [@Birajgiri](https://github.com/Birajgiri)
- Repository: [SimpleCalculator](https://github.com/Birajgiri/SimpleCalculator)

---

*Built with ❤️ using HTML, CSS, and JavaScript*