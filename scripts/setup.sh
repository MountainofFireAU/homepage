#!/bin/bash

# MFM Australia Website Setup Script
# This script sets up the development environment

set -e

echo "🚀 Setting up MFM Australia Website development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Check if Python is available (optional)
if command -v python3 &> /dev/null; then
    echo "🐍 Python detected. Installing Python dependencies..."
    pip3 install -r requirements.txt
else
    echo "⚠️  Python not found. Python dependencies will be skipped."
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOF
# MFM Australia Website Environment Variables
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_MFM_EMAIL=info@mfmaustralia.org
NEXT_PUBLIC_MFM_PHONE=+61 (0) XXX XXX XXX
EOF
fi

# Build the project
echo "🔨 Building the project..."
npm run build

echo "✅ Setup complete!"
echo ""
echo "🎉 To start development:"
echo "   npm run dev"
echo ""
echo "🐳 To use Docker:"
echo "   docker-compose up"
echo ""
echo "🌐 Website will be available at: http://localhost:3000" 