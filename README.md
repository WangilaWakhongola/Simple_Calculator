# Simple Calculator

A lightweight, fast, and beautiful calculator application built with React.

## Features

- ➕ Basic arithmetic operations (Add, Subtract, Multiply, Divide)
- 🎯 Clear and reset functions
- 📱 Responsive design
- ⌨️ Keyboard support
- 🎨 Modern UI with Tailwind CSS
- 📦 Lightweight and fast
- 🧪 Unit tested

## Quick Start

### With Docker

```bash
docker-compose up
```

Visit: http://localhost:3000

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Usage

1. **Enter numbers** - Click buttons or type on keyboard
2. **Choose operation** - Click +, -, ×, ÷
3. **Press equals** - See the result
4. **Clear** - Reset calculator

## Operations

| Operation | Symbol | Keyboard |
|-----------|--------|----------|
| Add | + | + |
| Subtract | − | - |
| Multiply | × | * |
| Divide | ÷ | / |
| Equals | = | Enter |
| Clear | C | Escape |

## 🛠 Tech Stack

- React 18
- Tailwind CSS
- Vite
- Docker

## Project Structure

```
simple-calculator/
├── src/
│   ├── App.jsx        # Main component
│   ├── Calculator.jsx # Calculator logic
│   ├── App.css
│   └── index.jsx
├── tests/
│   └── Calculator.test.jsx
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🧪 Testing

```bash
npm test
```

## 📦 Build

```bash
npm run build
```

Output in `dist/` directory ready for deployment.

## 🌐 Deployment

### Vercel
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod --dir=dist
```

### Docker
```bash
docker build -t calculator .
docker run -p 3000:3000 calculator
```

## 📄 License

MIT - See LICENSE file

## 🤝 Contributing

Pull requests welcome!

---

**Built with ❤️ by Wangila Wakhongola - Simple, fast, beautiful** ✨
