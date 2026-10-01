#!/usr/bin/env bash
set -euxo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${ROOT_DIR}"

http-server site -p 8080 --silent &
SERVER_PID=$!
trap 'kill "${SERVER_PID}" 2>/dev/null || true' EXIT

for i in $(seq 1 60); do
  curl -sf http://127.0.0.1:8080/ >/dev/null && break
  sleep 1
done

npx playwright install --with-deps chromium

cat > .pa11yci.ci.json <<'JSON'
{
  "defaults": {
    "standard": "WCAG2AA",
    "runners": ["axe"],
    "timeout": 45000,
    "wait": 1500,
    "chromeLaunchConfig": {
      "args": ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--headless=new"]
    }
  },
  "urls": [
    "http://127.0.0.1:8080/"
  ]
}
JSON

npx pa11y-ci --config .pa11yci.ci.json --json > pa11y-results.json || true

node "${SCRIPT_DIR}/check-accessibility.js" pa11y-results.json
