# Script para desplegar a GitHub Pages
Write-Host "🔨 Construyendo el proyecto..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build exitoso" -ForegroundColor Green
    
    Write-Host "📁 Copiando archivos a la raíz..." -ForegroundColor Yellow
    Copy-Item "dist\*" -Destination "." -Recurse -Force
    
    Write-Host "📤 Subiendo a GitHub..." -ForegroundColor Yellow
    git add .
    git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git push
    
    Write-Host "🚀 Despliegue completado!" -ForegroundColor Green
    Write-Host "🌐 Tu sitio estará disponible en: https://facundo-pg.github.io/" -ForegroundColor Cyan
} else {
    Write-Host "❌ Error en el build" -ForegroundColor Red
}