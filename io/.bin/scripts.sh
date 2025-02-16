#!/bin/bash
set -e

USB_PORT="/dev/cu.usbserial-0001"
DEFAULT_BUILD_COMMAND="bun build --entrypoints src/main.ts --outdir dist --target node --env inline --external pins --external timer --external wifi --external net"

if [ $# -eq 0 ]; then
  echo "Usage: $0 {dev|build-dev|build-release}"
  exit 1
fi

case "$1" in
  dev)
    echo "Running: xs-dev run --port $USB_PORT --device esp32"
    xs-dev run --port $USB_PORT --device esp32
    ;;
  build-dev)
    echo "Running bun build for development..."
    $DEFAULT_BUILD_COMMAND --watch
    ;;
  build-release)
    echo "Running bun build for release..."
    $DEFAULT_BUILD_COMMAND --minify
    ;;
  *)
    echo "Invalid command: $1"
    echo "Usage: $0 {dev|build-dev|build-release}"
    exit 1
    ;;
esac
