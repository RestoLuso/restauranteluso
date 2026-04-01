if (Get-Command python -ErrorAction SilentlyContinue) {
  python -m http.server 8000
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
  python3 -m http.server 8000
} else {
  Write-Host "No Python found. Open index.html in your browser or install Python to run a local server."
}
