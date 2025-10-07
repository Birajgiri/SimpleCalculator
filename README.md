# Simple Calculator

A modern calculator application built with HTML, CSS, and JavaScript featuring a dark theme and interactive button animations.

## Features

- Basic operations: Addition (+) and Subtraction (-)
- Digit input: Numbers 0-9 with proper entry logic
- Display: Shows up to 8 digits or "-" + 7 digits
- Calculate (=): Performs operations and displays results
- All Clear (AC): Resets calculator to initial state
- Overflow protection: Shows "OVERFLOW" when numbers exceed limits
- Error handling: Displays "ERROR" for invalid operations
- Maximum values: 99,999,999 (positive) / -9,999,999 (negative)

## Design

- Dark theme with #1C1C1C background
- Circular buttons with hover effects
- 4x4 grid layout
- Color coding: Light gray (#D4D4D2) for numbers, Orange (#FF9500) for operators
- Button hover effects with scale animation and glow shadows
- Smooth transitions (0.2s ease)
- Zero button spans 3 columns with rounded edges
- Borderless design

## Project Structure

```
CSD228/Unit1D/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Calculator logic
└── README.md           # Documentation
```

## Getting Started

### Prerequisites
- Modern web browser

### Running the Calculator

1. **Direct Access**: Open `index.html` in any browser

2. **Live Server**: 
   - Right-click `index.html` → "Open with Live Server"
   - Access at `http://127.0.0.1:5500`

3. **Node.js Live Server**:
   ```bash
   npm install -g live-server
   live-server
   ```

4. **XAMPP**: Access at `localhost/CSD228/Unit1D/index.html`

## Technical Implementation

- HTML5 semantic structure with grid layout
- CSS Grid for 4x4 button arrangement
- JavaScript state management for calculator operations
- Event-driven functionality with overflow protection

## Calculator Layout

```
7   8   9   AC
4   5   6   +
1   2   3   -
[    0    ]  =
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Limitations

- Only addition and subtraction operations
- Integer calculations only (no decimals)
- No keyboard input support
- 8-digit display limit

## Author

**Biraj Giri**
- GitHub: [@Birajgiri](https://github.com/Birajgiri)
- Repository: [SimpleCalculator](https://github.com/Birajgiri/SimpleCalculator)