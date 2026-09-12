#!/bin/bash

export NVM_DIR="$HOME/.nvm"

if [ -s "$NVM_DIR/nvm.sh" ]; then
    source "$NVM_DIR/nvm.sh"
else
    echo "❌ NVM non trovato."
    read -p "Premi INVIO per chiudere..."
    exit 1
fi

nvm use 24

if [ $? -ne 0 ]; then
    echo "❌ Node.js 24 non disponibile."
    read -p "Premi INVIO per chiudere..."
    exit 1
fi

cd /home/domenico/la-deriva || exit 1

echo "================================"
echo "       DEPLOY LA DERIVA"
echo "================================"
echo

echo "→ Controllo build..."
npm run build

if [ $? -ne 0 ]; then
    echo
    echo "❌ BUILD FALLITO. Deploy annullato."
    read -p "Premi INVIO per chiudere..."
    exit 1
fi

echo
echo "✓ Build completato."

git add .

git commit -m "Deploy automatico - $(date '+%d/%m/%Y %H:%M')"

if [ $? -ne 0 ]; then
    echo
    echo "❌ Commit fallito. Deploy annullato."
    read -p "Premi INVIO per chiudere..."
    exit 1
fi

echo
echo "→ Invio a GitHub..."
git push

if [ $? -ne 0 ]; then
    echo
    echo "❌ Push fallito."
    read -p "Premi INVIO per chiudere..."
    exit 1
fi

echo
echo "================================"
echo "       ✓ DEPLOY AVVIATO"
echo "================================"
echo
echo "Cloudflare riceverà ora il nuovo commit."
echo
read -p "Premi INVIO per chiudere..."
