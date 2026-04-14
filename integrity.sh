#!/bin/sh
# RIVERBRAID TIMELESS VERIFIER (v1.5.1-Rigid)
set -e

echo "--- Riverbraid Structural Integrity Check ---"

# 1. Verify Byte-Floor (No CRLF)
if find . -type f \( -name "*.json" -o -name "*.cjs" \) | xargs file | grep -q "CRLF"; then
  echo "❌ ERR: DIRTY_BYTES_DETECTED"
  exit 1
fi

# 2. Verify Filesystem Hash (Excluding the manifest itself)
if [ ! -f "SHA256SUMS" ]; then
  echo "⚠️  Generating Stationary manifest..."
  # We sort for determinism and exclude the checksum file to avoid recursion errors
  find . -maxdepth 2 -not -path '*/.*' -type f ! -name "SHA256SUMS" | sort | xargs sha256sum > SHA256SUMS
fi

# Check against the manifest
sha256sum -c --strict SHA256SUMS

# 3. Verify Sovereign Manifest (GPG Anchor)
if [ -f "cluster-manifest.json.asc" ]; then
  gpg --verify cluster-manifest.json.asc
else
  echo "❌ ERR: CLUSTER_MANIFEST_MISSING"
  exit 1
fi

echo "✅ GO 44: Stationary State Confirmed."
