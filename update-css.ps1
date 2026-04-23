# GitHub Token
$token = "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"
$repo = "djdehoon/polycards"
$branch = "main"

$headers = @{
    "Authorization" = "token $token"
    "Accept" = "application/vnd.github.v3+json"
}

Write-Host "Testing GitHub API connection..." -ForegroundColor Cyan

try {
    $testUrl = "https://api.github.com/user"
    $testResponse = Invoke-RestMethod -Uri $testUrl -Headers $headers -Method Get
    Write-Host "✅ Connected! User: $($testResponse.login)" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Ready to update CSS files!" -ForegroundColor Yellow
    Write-Host "Next: Upload CSS files manually to GitHub" -ForegroundColor Cyan
} catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
}
