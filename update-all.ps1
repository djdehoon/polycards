# GitHub Token
$token = "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"

# Controleer token
if ($token -eq "YOUR_GITHUB_TOKEN_HERE") {
    Write-Host "ERROR: Vul je GitHub token in!" -ForegroundColor Red
    exit 1
}

Write-Host "Testing GitHub API..." -ForegroundColor Cyan

# Test verbinding
try {
    $headers = @{
        "Authorization" = "token $token"
        "Accept" = "application/vnd.github.v3+json"
    }
    
    $response = Invoke-RestMethod -Uri "https://api.github.com/user" -Headers $headers -Method Get
    Write-Host "SUCCESS! Token works!" -ForegroundColor Green
    Write-Host "User: $($response.login)" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Token failed!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}
